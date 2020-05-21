function Rainbow() {
    document.getElementById("petofi").style.animationPlayState = "running";
    document.getElementById("petofi").src = "petofiCool.png";
}

function toggleActive(x) {
    document.getElementById(x).classList.toggle("active");
    if (document.body.style.overflowY === "scroll") {
        document.body.style.overflowY = "hidden";
    } else {
        document.body.style.overflowY = "scroll";
    }
}