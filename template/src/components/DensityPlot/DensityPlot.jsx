// Modules
import { useState, useRef, useEffect } from "react"
import * as d3 from "d3"

// User modules
import { config } from "./js/config"
import { update } from "./js/update"

// CSS
import "./css/DensityPlot.css"

export default function DensityPlot({ passed_data }) {
    const svgRef = useRef()
    const [data, updateData] = useState(passed_data)

    useEffect(() => {
        const svg = d3.select(svgRef.current)
        update(svg, data)
    }, [data])

    return (
        <svg ref={svgRef} width={config.box_width} height={config.box_height}>
            <g className="figure">
                <g className="paths"></g>
                <g className="x-axis"></g>
                <g className="y-axis"></g>
            </g>
        </svg>
    )
}