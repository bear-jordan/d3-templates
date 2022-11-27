import _ from "lodash"

function clean(data) {
    console.log("clean")

    const filtered_data = data.filter(row => !isNaN(row.bill_length_mm))

    console.log(filtered_data)

    const mean_total = _.meanBy(filtered_data, "bill_length_mm")
    const mean_adelie = _.meanBy(filtered_data.filter(row => row.species === "Adelie"), "bill_length_mm")
    const mean_gentoo = _.meanBy(filtered_data.filter(row => row.species === "Gentoo"), "bill_length_mm")
    const mean_chinstrap = _.meanBy(filtered_data.filter(row => row.species === "Chinstrap"), "bill_length_mm")

    
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