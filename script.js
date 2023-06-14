function visible(id) {
    popup = document.getElementById("popup");
    detailImg = document.getElementById("detailImg");
    detailImg.src = "./image/img" + id + ".png";
    popup.style.display = "flex";
}

function invisible() {
    popup = document.getElementById("popup");
    popup.style.display = "none";
}
