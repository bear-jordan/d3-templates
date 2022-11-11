import * as d3 from "d3"
import { config } from "./config"


function getMaxX(data) {
    return d3.max(data.map(d => d.x))
}

function getMaxY(data) {
    return d3.max(data.map(d => d.y))
}

export function layout(data) {

    const xScale = d3.scaleLinear()
        .domain([-1*getMaxX(data), getMaxX(data)])
        .range([0, config.fig_width])

    const xAxis = d3.axisBottom(xScale)

    const yScale = d3.scaleLinear()
        .domain([0, getMaxY(data)])
        .range([config.fig_height, 0])

    const yAxis = d3.axisLeft(yScale)

    const layoutData = data.map(d => {        
        const item = {}
        item.x0 = xScale(d.x)
        item.x1 = xScale(-1*d.x)
        item.y = yScale(d.y)

        return item
    })

    return [layoutData, xAxis, yAxis]
}
