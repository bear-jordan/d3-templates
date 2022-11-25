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

export const default_data = [
    {
        species: "Adelie",
        island: "Torgersen",
        bill_length_mm: 39.1,
        bill_depth_mm: 18.7,
        flipper_length_mm: 181,
        body_mass_g: 3750,
        sex: "female",
        year: 2007
    },
    {
        species: "Chinstrap",
        island: "Dream",
        bill_length_mm: 50.2,
        bill_depth_mm: 18.8,
        flipper_length_mm: 202,
        body_mass_g: 3800,
        sex: "male",
        year: 2009
    }
]