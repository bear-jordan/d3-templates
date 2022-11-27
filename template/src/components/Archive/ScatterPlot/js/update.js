import { layout } from "./layout"
import { config } from "./config"

function initializeFigure(svg) {
    console.log("init figure")

    svg.select(".figure")
        .attr("transform", "translate("+config.margin.left+","+config.margin.top+")")

    svg.select(".x-axis")
        .attr("transform", "translate(0,"+(config.fig_height+5)+")")
}

function updatePoints(svg, layoutData) {
    console.log(layoutData)

    svg.select(".points")
        .selectAll(".point")
        .data(layoutData)
        .join("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", 5)
        .classed("point", true)
}

function updateAxes(svg, xAxis, yAxis) {
    svg.select(".x-axis")
        .call(xAxis)

    svg.select(".y-axis")
        .call(yAxis)
}

export function update(svg, data) {
    console.log("update")

    const isEmpty = svg.select(".x-axis *").empty()
    if(isEmpty){initializeFigure(svg)}

    const [layoutData, xAxis, yAxis] = layout(data)
    updatePoints(svg, layoutData)
    updateAxes(svg, xAxis, yAxis)
}