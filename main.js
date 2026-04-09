$(document).ready(function () {
    let root = document.querySelector(":root");
    let url = window.location.href;

    let in_design = url.includes("Graphic-Design")
    let in_thesis = url.includes("Theses")
    let in_wide_format = url.includes("PostersBannersSigns")

    if (in_design) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Design.png?raw=true)")
    }
    else if (in_thesis) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Theses.png?raw=true)")
    }
    else if (in_wide_format) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20WF.png?raw=true)")
    }
})