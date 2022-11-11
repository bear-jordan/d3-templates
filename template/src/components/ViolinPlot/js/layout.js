import * as d3 from "d3"
import { v4 as uuidv4 } from 'uuid'
import { config } from "./config"


function getMaxX(data) {
    return d3.max(data.map(d => d3.max(d.map(i => i.x))))
}

function getMaxY(data) {
    return d3.max(data.map(d => d3.max(d.map(i => i.y))))
}

export function layout(data) {
    const layoutScale = d3.scaleBand()
        .domain(data.map((d, i) => i))
        .range([0, config.fig_width])

    const layoutAxis = d3.axisBottom(layoutScale)
    
        const xScale = d3.scaleLinear()
        .domain([-1*getMaxX(data), getMaxX(data)])
        .range([0, layoutScale.bandwidth()])

    const xAxis = d3.axisBottom(xScale)

    const yScale = d3.scaleLinear()
        .domain([0, getMaxY(data)])
        .range([config.fig_height, 0])

    const yAxis = d3.axisLeft(yScale)

    const layoutData = data.map((d, i) => {        
        const items = {}
        items.id = uuidv4()
        items.xOffset = layoutScale(i)
        items.data = d.map(i => {
            const item = {}
            item.x0 = xScale(i.x)
            item.x1 = xScale(-1*i.x)
            item.y = yScale(i.y)

            return item
        })


        return items
    })

    return [layoutData, layoutAxis, xAxis, yAxis]
}
