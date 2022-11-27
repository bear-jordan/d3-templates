// Modules
import * as d3 from "d3"

// User Modules
import { config } from "./config"
import { layout } from "./layout"


function initializeFigure(svg) {
    console.log("init")

    svg.select(".figure")
        .attr("transform", "translate("+config.margin.left+","+config.margin.top+")")

    svg.select(".x-axis")
        .attr("transform", "translate(0,"+(config.fig_height+config.axis_offset.x)+")")

    svg.select(".y-axis")
        .attr("transform", "translate("+(-1*config.axis_offset.y)+",0)")

    svg.select(".bars")
        .attr("transform", "translate(0,0)")
}

function updateBars(svg, layoutData) {
    svg.select(".bars")
        .selectAll(".bar")
        .data(layoutData)
        .join("rect")
        .attr("x", d => d.x)
        .attr("y", d => d.y)
        .attr("height", d => d.height)
        .attr("width", d => d.width)
        .classed("bar", true)
}

function updateAxes(svg, xAxis, yAxis) {
    svg.select(".x-axis")
        .call(xAxis)

    svg.select(".y-axis")
        .call(yAxis)
}

function update(svg, clean_data) {
    console.log("update")

    const isEmpty = svg.select(".x-axis *").empty()
    if(isEmpty){initializeFigure(svg)}

    const [layoutData, xAxis, yAxis] = layout(clean_data)
    updateBars(svg, layoutData)
    updateAxes(svg, xAxis, yAxis)
}

export { update }