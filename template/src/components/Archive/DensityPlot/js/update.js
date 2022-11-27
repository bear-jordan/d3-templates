// Modules
import * as d3 from "d3"

// User Modules
import { config } from "./config"
import { layout } from "./layout"

function initializeFigure(svg) {
    console.log("init figure")
    svg.select(".figure")
        .attr("transform", "translate("+config.margin.left+","+config.margin.top+")")

    svg.select(".paths")    
        .attr("transform", "translate("+config.margin.left+",0)")
    
    svg.select(".x-axis")
        .attr("transform", "translate("+config.margin.left+","+(config.fig_height+5)+")")

    svg.select(".y-axis")
        .attr("transform", "translate("+(config.margin.left-5)+",0)")
}

function updateFigure(svg, layoutData, xAxis, yAxis) {
    console.log(layoutData)

    const area = d3.area()
        .x(d => d.x)
        .y0(d => d.y0)
        .y1(d => d.y1)

    svg.select(".paths")
        .append("path")
        .data([layoutData])
        .attr("d", area)
        .classed(".path", true)

    svg.select(".x-axis")
        .call(xAxis)

    svg.select(".y-axis")
        .call(yAxis)
}

export function update(svg, data) {
    console.log("update")
    const isEmpty = svg.select(".paths *").empty()

    if(isEmpty){initializeFigure(svg)}

    const [layoutData, xAxis, yAxis] = layout(data)
    console.log(xAxis)
    updateFigure(svg, layoutData, xAxis, yAxis)
}