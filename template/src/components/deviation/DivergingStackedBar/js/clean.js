import * as d3 from "d3"
import _, { filter } from "lodash"

function cleanCounts(counts, island) {
    const island_data = counts.filter(row => row[0] === island)
    const adelie_male = island_data.filter(row => row[1] === "Adelie" && row[2] === "male")
    const adelie_female = island_data.filter(row => row[1] === "Adelie" && row[2] === "female")
    const gentoo_male = island_data.filter(row => row[1] === "Gentoo" && row[2] === "male")
    const gentoo_female = island_data.filter(row => row[1] === "Gentoo" && row[2] === "female")
    const chinstrap_male = island_data.filter(row => row[1] === "Chinstrap" && row[2] === "male")
    const chinstrap_female = island_data.filter(row => row[1] === "Chinstrap" && row[2] === "female")

    return {
        island: island,
        adelie_male: adelie_male.length === 0 ? 0.1 : adelie_male[0][3],
        adelie_female: adelie_female.length === 0 ? 0.1 : adelie_female[0][3],
        gentoo_male: gentoo_male.length === 0 ? 0.1 : gentoo_male[0][3],
        gentoo_female: gentoo_female.length === 0 ? 0.1 : gentoo_female[0][3],
        chinstrap_male: chinstrap_male.length === 0 ? 0.1 : chinstrap_male[0][3],
        chinstrap_female: chinstrap_female.length === 0 ? 0.1 : chinstrap_female[0][3]
    }
}

function clean(data) {
    console.log("cleaning")

    const filtered_data = data.filter(row => !isNaN(row.bill_length_mm))
    const counts = d3.flatRollup(filtered_data, v => v.length, d => d.island, d => d.species, d => d.sex)

    console.log(["Torgersen", "Biscoe", "Dream"].map(island => cleanCounts(counts, island)))
}

export { clean }