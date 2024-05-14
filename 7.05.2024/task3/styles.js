let styles = [
    {
        name: `color`,
        value: `red`
    },
    {
        name: `font-size`,
        value: `25px`
    },
    {
        name: `text-decoration`,
        value: `underline`
    },
    {
        name: `text-align`,
        value: `center`
    },
    {
        name: `cursor`,
        value: `pointer`
    }
]

function applyStyles(styles, text) {
    let styleString = '';

    styles.forEach(s => {
        styleString += `${s.name}: ${s.value}; `
    });
    document.write(`<p style="${styleString}">${text}</p>`)
}
applyStyles(styles, 'Salam')