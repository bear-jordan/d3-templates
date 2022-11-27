// Modules
import * as d3 from "d3"
import _ from "lodash"

// User Modules
import { config } from "./config"

function sort(clean_data) {
    console.log("sorting")
    return _.sortBy(clean_data, "mean_diff").reverse()
}

function layout(clean_data) {
    console.log(clean_data)

    clean_data = sort(clean_data)

    const xScale = d3.scaleLinear()
        .domain(d3.extent(clean_data.map(d => d.mean_diff)))
        .range([0, config.fig_width])

    const yScale = d3.scaleBand()
        .domain(clean_data.map(d => d.species))
        .range([0, config.fig_height])
        .padding(0.3)

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    const layoutData = clean_data.map(d => {
        const item = {}

        item.x = Math.min(xScale(0), xScale(d.mean_diff))
        item.y = yScale(d.species)
        item.height = yScale.bandwidth()
        item.width = Math.abs(xScale(0)-xScale(d.mean_diff))
        
        return item
    })

    return [layoutData, xAxis, yAxis]
}


export { layout }