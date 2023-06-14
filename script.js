var currentIdx = 0;

function visible(id) {
    popup = document.getElementById("popup");
    detailImg = document.getElementById("detailImg");
    detailImg.src = "./image/img" + id + ".png";
    currentIdx = id;
    popup.style.display = "flex";
}

function invisible() {
    popup = document.getElementById("popup");
    popup.style.display = "none";
}

function setImg(id) {
    detailImg = document.getElementById("detailImg");
    detailImg.src = "./image/img" + id + ".png";
    currentIdx = id;
}

function changeIdx(type) {
    if (type == 0) {
        if (currentIdx == 1) {
            alert("첫번째 사진입니다.");
        } else {
            currentIdx -= 1;
        }
    } else {
        if (currentIdx == 14) {
            alert("마지막 사진입니다.");
        } else {
            currentIdx += 1;
        }
    }
    detailImg = document.getElementById("detailImg");
    detailImg.src = "./image/img" + currentIdx + ".png";
}
