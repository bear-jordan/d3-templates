import * as d3 from "d3"

import { config } from "./config"

export function layout(data) {
    console.log("layout")
    const xScale = d3.scaleLinear()
        .domain([0, d3.max(data.map(d => d.x))])
        .range([5, config.fig_width])

    const yScale = d3.scaleLinear()
        .domain([0, d3.max(data.map(d => d.y))])
        .range([config.fig_height, 0])

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    const layoutData = data.map(d => {
        const item = {}
        item.x = xScale(d.x)
        item.y = yScale(d.y)

        return item
    })

    return [layoutData, xAxis, yAxis]
}