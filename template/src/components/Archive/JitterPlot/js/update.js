// Modules
import * as d3 from "d3"

// User Modules
import { config } from "./config"
import { layout } from "./layout"

function initializeFigure(svg) {
    console.log("init figure")

    svg.select(".figure")
        .attr("transform", "translate("+config.margin.left+","+config.margin.top+")")
        
    svg.select(".x-axis")
        .attr("transform", "translate(0,"+(config.fig_height+5)+")")
    
    svg.select(".y-axis")
        .attr("transform", "translate(-5,0)")
}

function updatePoints(svg, layoutData) {
    console.log("update points")
    svg.select(".points")
        .selectAll(".point")
        .data(layoutData)
        .join("circle")
        .attr("r", 4)
        .attr("cx", d => d.cx)
        .attr("cy", d => d.cy)
        .attr("fill", d => d.fill)
        .classed("point", true)
}

function updateAxes(svg, xAxis, yAxis) {
    console.log("update axes")

    svg.select(".x-axis")
        .call(xAxis)

    svg.select(".y-axis")
        .call(yAxis)
}

export function update(svg, data) {
    console.log("update")
    const isEmpty = svg.select(".points *").empty()

    if(isEmpty){initializeFigure(svg)}

    const [layoutData, xAxis, yAxis] = layout(data)
    updatePoints(svg, layoutData)
    updateAxes(svg, xAxis, yAxis)
}