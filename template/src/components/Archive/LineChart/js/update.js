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
    
    svg.select(".paths")
        .selectAll(".path")
        .data(figureData)
        .join("path")
        .classed("path", true)
        .attr("d", d => d.d) 

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
