const moveProductTextUp = () => {
    const products = document.querySelectorAll(".product.panel .info .name")

    products.forEach(product => {
        product.style.setProperty("position", "relative")
        product.style.setProperty("bottom", "40px")
        product.style.setProperty("color", "white")
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
    let  = url_splitted.at(-2)?.includes("Grid")
    let in_other = url.includes('Ad-Hoc-Product')
    
    let html_content_in_products = root.querySelectorAll(".products .panel.CONTENT");

    html_content_in_products.forEach((item) => {
        if (item.querySelector(".info .name")?.textContent.trim() === "NextLine") {
            item.style.setProperty("visibility", "hidden");
        }
    })

    root.querySelector("#main-footerText-inner")?.style.setProperty("margin-top", "10px");
    root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20From%20Pixels%20to%20Print%20blue.png?raw=true)")       
    moveProductTextUp()

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
    else if (in_other) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Other.png?raw=true)")
    }
})