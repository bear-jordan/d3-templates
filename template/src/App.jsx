// Modules
import React from "react"
import { useState, useEffect } from 'react'
import * as d3 from "d3"

// User Modules
import { default_data } from './components/JitterPlot/js/request'
import DivergingBar from './components/deviation/DivergingBar/DivergingBar'

export default function App() {
    const [data, updateData] = useState(default_data)

    useEffect(() => {
        d3.csv("/src/assets/data/penguins.csv", (d) => {
            return {
                species: d.species,
                island: d.island,
                bill_length_mm:+ d.bill_length_mm,
                bill_depth_mm: +d.bill_depth_mm,
                flipper_length_mm: +d.flipper_length_mm,
                body_mass_g: +d.body_mass_g,
                sex: d.sex,
                year: +d.year
            }
        }).then((d) => {
            console.log("data loaded")
            updateData(d)
        })
    }, [])   

    return (
        <DivergingBar data={data} />
    )
}
