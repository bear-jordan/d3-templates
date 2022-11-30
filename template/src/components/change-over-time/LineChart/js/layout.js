import * as d3 from "d3"
import { config } from "./config"

function getMaxY(data) {
    return data.map(d => d3.max(d.map(a => a.y)))
}

function getMaxX(data) {
    return data.map(d => d3.max(d.map(a => a.x)))
}

export function layout(data) {

    const yScale = d3.scaleLinear()
        .domain([0, getMaxY(data)])
        .range([config.fig_height, 0])

    const yAxis = d3.axisLeft(yScale)
    
    const xScale = d3.scaleLinear()
        .domain([1, getMaxX(data)])
        .range([0, config.fig_width])

    const xAxis = d3.axisBottom(xScale)
    
    const layoutData = data.map(d => {        
        const item = {}
        const line = d3.line()
            .x(i => xScale(i.x))
            .y(i => yScale(i.y))
        item.d = line(d)

        return item
    })

    return [layoutData, xAxis, yAxis]
}
