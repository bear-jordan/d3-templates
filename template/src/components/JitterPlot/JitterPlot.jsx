// Modules
import * as d3 from "d3"
import { useRef, useState, useEffect } from "react"

// User Modules
import { config } from "./js/config"
import { update } from "./js/update"

// CSS
import "./css/JitterPlot.css"

export default function JitterPlot({ data }) {
    console.log("JitterPlot")
    console.log(data)
    const svgRef = useRef()

    useEffect(() => {
        console.log("use effect")
        const svg = d3.select(svgRef.current)
        
        update(svg, data)
    }, [data])

    return (
        <svg ref={svgRef} height={config.box_height} width={config.box_width}>
            <g className="figure">
                <g className="points"></g>
                <g className="x-axis"></g>
                <g className="y-axis"></g>
            </g>
        </svg>
    )
}