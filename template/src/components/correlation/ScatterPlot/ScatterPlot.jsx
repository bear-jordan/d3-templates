// Modules
import { useRef, useEffect, useState } from "react"
import * as d3 from "d3"

// User Modules
import { config } from "./js/config"
import { update } from "./js/update"

// CSS
import "./ScatterPlot.css"

export default function ScatterPlot({ passed_data }) {
    console.log(passed_data)

    const [data, updateData] = useState(passed_data)
    const svgRef = useRef()

    useEffect(() => {
        const svg = d3.select(svgRef.current)
        update(svg, data)
    }, [data])

    return (
        <svg ref={svgRef} width={config.box_width} height={config.box_height}>
            <g className="figure">
                <g className="points"></g>
                <g className="x-axis"></g>
                <g className="y-axis"></g>
            </g>
        </svg>
    )
}