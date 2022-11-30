// Modules
import * as d3 from "d3"
import _ from "lodash"

// User Modules
import { config } from "./config"

function layout(clean_data) {

    const stackGenerator = d3.stack()
        .keys(Object.keys(clean_data[0]).filter(k => k !== "island"))

    const stackedData = stackGenerator(clean_data)

    const islands = clean_data.map(d => d.island)
    const xMax = d3.max(stackedData[stackedData.length-1].map(d => d3.max(d)))

    const xScale = d3.scaleLinear()
        .domain([-1*xMax, xMax])
        .range([0, config.fig_width])

    const yScale = d3.scaleBand()
        .domain(islands)
        .range([0, config.fig_height])
        .padding(0.1)

    const xAxis = d3.axisBottom(xScale)

    const yAxis = d3.axisLeft(yScale)

    const layoutData = stackedData.map(data => {
        console.log(stackedData)

        const items = data.map((d) => {

            const type = data.key
            const isFemale = type.includes("female")
            const island = d.data.island

            const item = {}
            
            if(isFemale) {
                item.x = xScale(d3.max(d)*-1)
                item.width = xScale(d3.min(d)*-1)
            } else {
                item.x = xScale(d3.min(d))
                item.width = xScale(d3.max(d))-xScale(d3.min(d))
            }

            item.label = [type, island]
            item.y = yScale(island)
            item.height = yScale.bandwidth()
            
            return item
        })
        
        return items
    })

    return [layoutData.flat(), xAxis, yAxis]
}


export { layout }