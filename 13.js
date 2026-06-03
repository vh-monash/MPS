const moveProductTextUp = () => {
const productsName = document.querySelectorAll(".product.panel:not(.CONTENT) .info .name")

    productsName.forEach(product => {
        product.style.setProperty("position", "relative"),
        product.style.setProperty("bottom", "45px"),
        product.style.setProperty("color", "white")
    })

    const dividerParents = document.querySelectorAll(".products .product.panel.CONTENT")

    dividerParents.forEach(parent => {
        parent.style.setProperty("position", "relative"),
        parent.style.setProperty("max-height", "250px"),
        parent.style.setProperty("max-width", "250px")
    })
    
    const dividers = document.querySelectorAll(".products .product.panel.CONTENT .info")

    dividers.forEach(divider => {
        divider.style.setProperty("position", "absolute"),
        divider.style.setProperty("top", "50%"),
        divider.style.setProperty("transform", "translateY(-50%)"),
        divider.style.setProperty("padding-left", "10px"),
        divider.style.setProperty("color", "white")
    })

    const dividersText = document.querySelectorAll(".products .product.panel.CONTENT .info .name")

    dividersText.forEach(text => {
        text.style.setProperty("text-align", "left")
    })
}

const removePricing = () => {
    const prices = document.querySelectorAll(".products .product.panel .info2 .price")

    prices.forEach(price => {
        price.style.setProperty("display", "none")
    })
}

const fitProductTexts = () => {
    const texts = document.querySelectorAll(".products .product.panel .info .name a")

    texts.forEach(text => {
        if (text.offsetWidth > 230) {
            text.style.setProperty("letter-spacing", "-0.5px")
        }
    })
}

$(document).ready(function () {
    let root = document.querySelector(":root");
    let url = window.location.href;
    let url_splitted = url.split("/")

    let in_print = url.includes("Print")
    let in_design = url.includes("Graphic-Design")
    let in_thesis = url.includes("Theses")
    let in_wide_format = url.includes("PostersBannersSigns")
    let in_presentation_folders = url.includes("Presentation-Folders")
    let in_stamps = url.includes("Stamps")
    let in_stationery = url.includes("Stationery")
    let in_other = url.includes('Ad-Hoc-Product')
    let in_screens = url.includes("Digital-Display-Screens")
    let in_year_planners = url.includes("Year-Planners")
    
    let html_content_in_products = root.querySelectorAll(".products .panel.CONTENT");

    html_content_in_products.forEach((item) => {
        if (item.querySelector(".info .name")?.textContent.trim() === "NextLine") {
            item.style.setProperty("visibility", "hidden");
        }
    })

    root.querySelector("#main-footerText-inner")?.style.setProperty("margin-top", "10px");
    root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20From%20Pixels%20to%20Print%20blueberry.png?raw=true)")       

    moveProductTextUp()
    fitProductTexts()

    if (in_print) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Print.png?raw=true)")
    }
    else if (in_presentation_folders){
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Presentation%20folders.png?raw=true)")
    }
    else if (in_stamps){
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Stamps.png?raw=true)")
    }
    else if (in_stationery){
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Stationery.png?raw=true)")
        removePricing()
    }
    else if (in_design) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Design.png?raw=true)")
    }
    else if (in_thesis) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Theses.png?raw=true)")
    }
    else if (in_wide_format) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20WF.png?raw=true)")
    }
    else if (in_screens) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Screens.png?raw=true)")
    }
    else if (in_year_planners) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Year%20Planners.png?raw=true)")
    }
    else if (in_other) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Other.png?raw=true)")
    }
})