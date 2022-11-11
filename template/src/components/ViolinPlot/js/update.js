import { config } from "./config"
import { layout } from "./layout"
import * as d3 from "d3"

function initializeChart(svg) {
    svg.select(".figure")
        .attr("transform", "translate("+config.margin.left+","+config.margin.top+")")

    svg.select(".x-axis")
        .attr("transform", "translate(0,"+config.fig_height+")")
}

function updateChart(svg, data) {
    const [figureData, xAxis, yAxis] = layout(data)

    const area = d3.area()
        .x0(d => d.x0)
        .x1(d => d.x1)
        .y(d => d.y)
        .curve(d3.curveBasis)

    svg.select(".violin")
        .append("path")
        .data([figureData])
        .attr("d", area)
        .classed("violin", true)

    svg.select(".x-axis")
        .call(xAxis)

    svg.select(".y-axis")
        .call(yAxis)   
}

export function update(svg, data) {
    if (svg.selectAll(".path").empty()) { 
        console.log("Init")
        initializeChart(svg) 
    }

    updateChart(svg, data)
}

