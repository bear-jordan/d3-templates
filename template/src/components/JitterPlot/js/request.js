import * as d3 from "d3"

export function request_data() {
    console.log("request_data")
    d3.csv("/src/assets/data/penguins.csv", (d) => {
        return {
            species: d.species,
            island: d.island,
            bill_length_mm: +d.bill_length_mm,
            bill_depth_mm: +d.bill_depth_mm,
            flipper_length_mm: +d.flipper_length_mm,
            body_mass_g: +d.body_mass_g,
            sex: d.sex,
            year: +d.year
        }
    }).then((data) => {
        return data
    })
}
