// Modules
import * as d3 from "d3"

// User Modules
import { config } from "./config"

function getMaxX(data) {
    return d3.max(data.map(d => d.x))
}

function getMaxY(data) {
    return d3.max(data.map(d => d.y))
}

export function layout(data) {
    console.log("layout")
    console.log(data)

    const xScale = d3.scaleLinear()
        .domain([0, getMaxX(data)])
        .range([0, config.fig_width])

    const xAxis = d3.axisBottom(xScale)
    
    const yScale = d3.scaleLinear()
        .domain([0, getMaxY(data)])
        .range([config.fig_height, 0])

    const yAxis = d3.axisLeft(yScale)
    
    const layoutData = data.map(d => {
        const item = {}
        item.x = xScale(d.x)
        item.y0 = yScale(0)
        item.y1 = yScale(d.y)

        return item
    })

    return [layoutData, xAxis, yAxis]
}