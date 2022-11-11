// Modules
import { useEffect, useRef } from 'react'
import * as d3 from "d3"

// User Modules
import { config } from "./js/config"
import { update } from './js/update'

// User Styles
import './ViolinPlot.css'

function ViolinPlot({ data }) {
  const svgRef = useRef()

  useEffect(() => {
    const svg = d3.select(svgRef.current)
    update(svg, data)
  }, [])

  return (
    <>
      <svg height={config.box_height} width={config.box_width} ref={svgRef}>
        <g className="figure">
          <g className="violin"></g>
          <g className="x-axis"></g>
          <g className="y-axis"></g>
        </g>
      </svg>
    </>
  )
}

export default ViolinPlot
