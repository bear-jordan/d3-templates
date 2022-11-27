import { config } from "./config"
import { layout } from "./layout"
import * as d3 from "d3"

function initializeChart(svg) {
    svg.select(".figure")
        .attr("transform", "translate("+config.margin.left+","+config.margin.top+")")

    svg.select(".x-axis")
        .attr("transform", "translate(0,"+config.fig_height+")")
}

function initializeGroup(g, d) {
    g.attr("transform", "translate("+d.xOffset+", 0)")
}

function updateGroup(d, i) {

    const g = d3.select(this)

    if(g.selectAll("*").empty()) { initializeGroup(g, d) }

    const area = d3.area()
        .x0(d => d.x0)
        .x1(d => d.x1)
        .y(d => d.y)
        .curve(d3.curveBasis)

    const figureData = d.data

    g.append("path")
        .data([figureData])
        .attr("d", area)
        .classed("violin", true)
}

function updateChart(svg, data) {
    const [figureData, layoutAxis, xAxis, yAxis] = layout(data)
    
    svg.select(".violins")
        .selectAll("g")
        .data(figureData, d => d.id)
        .join("g")
        .each(updateGroup)

    svg.select(".y-axis")
        .call(yAxis)  

    svg.select(".x-axis")
        .call(layoutAxis)  
}

export function update(svg, data) {
    const chartEmpty = svg.select(".violins").selectAll("*").empty()
    if (chartEmpty) { initializeChart(svg) }
    
    updateChart(svg, data,)
}

