$(document).ready(function () {
    let root = document.querySelector(":root");
    let url = window.location.href;

    let in_design = url.includes("Graphic-Design")

    if (in_design) {
        root.style.setProperty("--bg", "url(https://github.com/vh-monash/MPS/blob/main/images/Banner%20-%20Design.png?raw=true)")
    }
})