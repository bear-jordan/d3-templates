import * as d3 from "d3"
import { config } from "./config"

function getMaxY(data) {
    return d3.max(data.map(d => d.y))
}

export function layout(data) {
    const xScale = d3.scaleBand()
        .domain(data.map(d => d.x))
        .range([0, config.fig_width])

    const yScale = d3.scaleLinear()
        .domain([0, getMaxY(data)])
        .range([config.fig_height, 0])

    const yAxis = d3.axisLeft(yScale)

    const xAxis = d3.axisBottom(xScale)
    
    const layoutData = data.map(d => {        
        const item = {}
        item.x = xScale(d.x)
        item.y = yScale(d.y)
        item.width = xScale.bandwidth()
        item.height = config.fig_height - yScale(d.y)
        item.rx = 0

        return item
    })

    console.log(layoutData)

    return [layoutData, xAxis, yAxis]
}
