import _ from "lodash"

function clean(data) {
    console.log("clean")

    data = data.filter(row => !isNaN(row.bill_length_mm))

    const mean_total = _.meanBy(data, "bill_length_mm")
    const mean_adelie = _.meanBy(data.filter(row => row.species === "Adelie"), "bill_length_mm")
    const mean_gentoo = _.meanBy(data.filter(row => row.species === "Gentoo"), "bill_length_mm")
    const mean_chinstrap = _.meanBy(data.filter(row => row.species === "Chinstrap"), "bill_length_mm")

    
    return ([
        {
            species: "Adelie",
            mean_diff: mean_adelie-mean_total
        },
        {
            species: "Gentoo",
            mean_diff: mean_gentoo-mean_total
        },
        {
            species: "Chinstrap",
            mean_diff: mean_chinstrap-mean_total
        },
    ])
    
}

export { clean }