const settings = {
    margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 40
    },
    box_width: 800,
    box_height: 600,
    transitionDuration: 500,
    transitionDelay: 8
}

export const config = {
    ...settings,
    fig_width: settings.box_width-settings.margin.left-settings.margin.right,
    fig_height: settings.box_height-settings.margin.top-settings.margin.bottom,
}