// Modules
import * as d3 from "d3"

// User Modules
import { config } from "./config"

export function layout(data) {
    console.log("layout")
    console.log(data)

    const xScale = d3.scaleLinear()
        .domain(d3.extent(data.map(d => d.body_mass_g)))
        .range([0, config.fig_width])

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.species))
        .range([0, config.fig_height])

    const colorScale = d3.scaleOrdinal()
        .domain(data.map(d => d.species))
        .range(["#d8b365", "#f5f5f5", "#5ab4ac"])

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    const layoutData = data.map((d, i) => {
        const jitter = i%2 == 0 ? Math.random()*10 : -1*Math.random()*10
        
        const item = {}

        item.cx = xScale(d.body_mass_g)
        item.cy = yScale(d.species)+yScale.bandwidth()/2+jitter
        item.fill = colorScale(d.species)

        return item
    })

    return [layoutData, xAxis, yAxis]
}