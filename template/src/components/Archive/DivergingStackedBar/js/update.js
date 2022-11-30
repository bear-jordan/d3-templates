// Modules
import * as d3 from "d3"

// User Modules
import { config } from "./config"
import { layout } from "./layout"


function initializeFigure(svg) {

    svg.select(".figure")
        .attr("transform", "translate("+config.margin.left+","+config.margin.top+")")

    svg.select(".x-axis")
        .attr("transform", "translate(0,"+(config.fig_height+config.axis_offset.x)+")")

    svg.select(".y-axis")
        .attr("transform", "translate("+(-1*config.axis_offset.y)+",0)")

    svg.select(".bars")
        .attr("transform", "translate(0,0)")
}

function initializeGroup(g, d) {

    g.append("rect")
        .classed("bar", true)
    
    g.append("text")
        .classed("label", true)
}


function updateBars(d) {

    if(!d.label[0].includes("female")){
        let g = d3.select(this)
        g.attr("transform", "translate("+d.x+","+d.y+")")

        if(g.selectAll("*").empty()){initializeGroup(g, d)}
        
        g.select(".bar")
            .attr("height", d.height)
            .attr("width", d.width)

        g.select(".label")
            .text(d.label[0])
    }
}

function updateAxes(svg, xAxis, yAxis) {
    svg.select(".x-axis")
        .call(xAxis)

    svg.select(".y-axis")
        .call(yAxis)
}

function updateChart(svg, layoutData) {
    svg.select(".bars")
        .selectAll("g")
        .data(layoutData)
        .join("g")
        .each(updateBars)
}

function update(svg, clean_data) {

    const isEmpty = svg.select(".x-axis *").empty()
    if(isEmpty){initializeFigure(svg)}

    const [layoutData, xAxis, yAxis] = layout(clean_data)
    updateChart(svg, layoutData)
    updateAxes(svg, xAxis, yAxis)
}

export { update }