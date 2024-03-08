
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    const x = window.pageYOffset;
    if (x > 0) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img");
const imgContainer = document.querySelector(".aspect-ratio-169");
const dotIteam = document.querySelectorAll(".dot");
let index = 0;
let imgNumber = imgPosition.length;

imgPosition.forEach(function (image, index) {
    image.style.left = index * 100 + "%";
    dotIteam[index].addEventListener("click", function () {
        slider(index);
    });
});

function imgSlide() {
    index++;
    if (index >= imgNumber) {
        index = 0;
    }
    slider(index);
}

function slider(index) {
    imgContainer.style.left = "-" + index * 100 + "%";
    const dotActive = document.querySelector(".active");
    dotActive.classList.remove("active");
    dotIteam[index].classList.add("active");
}

setInterval(imgSlide, 5000);