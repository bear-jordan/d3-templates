// Modules
import { useEffect, useRef } from "react"
import * as d3 from "d3"

// User Modules
import { config } from "./js/config"
import { update } from "./js/update"
import { clean } from "./js/clean"

// CSS
import "./css/DivergingBar.css"

function DivergingBar({ data }) {
    const svgRef = useRef()

    useEffect(() => {
        const svg = d3.select(svgRef.current)

        update(svg, clean(data))
    }, [data])

    return (
        <>
            <svg ref={svgRef} height={config.box_height} width={config.box_width}>
                <g className="figure">
                    <g className="bars"></g>
                    <g className="x-axis"></g>
                    <g className="y-axis"></g>
                </g>
            </svg>
        </>
    )
}

export default DivergingBar