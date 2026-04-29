const moveProductTextUp = () => {
    const products = document.querySelectorAll(".product.panel .info")

    products.forEach(product => {
        product.style.setProperty("position", "relative")
        product.style.setProperty("bottom", "40px")
    })
}

$(document).ready(function () {
    let root = document.querySelector(":root");
    let url = window.location.href;
    let url_splitted = url.split("/")

    let in_print = url.includes("1969")
    let in_design = url.includes("Graphic-Design")
    let in_thesis = url.includes("Theses")
    let in_wide_format = url.includes("PostersBannersSigns")

    if (in_print) {
        if (url_splitted.at(-1).includes("1969")) {
            moveProductTextUp()
        }
    }
    else if (in_design) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Design.png?raw=true)")

        if (url_splitted.at(-1).includes("1973")) {
            moveProductTextUp()
        }
    }
    else if (in_thesis) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Theses.png?raw=true)")
    }
    else if (in_wide_format) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20WF.png?raw=true)")
        if (url_splitted.at(-1).includes("1968")) {
            moveProductTextUp()
        }
    }
    else {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20From%20Pixels%20to%20Print%20blue.png?raw=true)")       
    }
})