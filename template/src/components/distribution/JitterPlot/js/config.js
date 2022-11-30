const settings = {
    box_height: 600,
    box_width: 800,
    margin: {
        top: 10,
        right: 30,
        bottom: 30,
        left: 65
    }
}

export const config = {
    ...settings,
    fig_height: settings.box_height - settings.margin.top - settings.margin.bottom,
    fig_width: settings.box_width - settings.margin.left - settings.margin.right
}