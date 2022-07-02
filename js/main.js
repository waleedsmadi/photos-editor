// selectors
const saturate = document.querySelector("#saturate");
const contrast = document.querySelector("#contrast");
const brightness = document.querySelector("#brightness");
const sepia = document.querySelector("#sepia");
const grayscale = document.querySelector("#grayscale");
const blur = document.querySelector("#blur");
const hueRotate = document.querySelector("#hue-rotate");


const upload = document.querySelector("#upload");
const download = document.querySelector("#download");
const reset = document.querySelector("#reset")

const photo = document.querySelector("#img");
const imgBox = document.querySelector(".img-box");


// make buttons and image box
// hidden when program starts
window.onload = function(){
    download.style.display = "none";
    reset.style.display = "none";
    imgBox.style.display = "none";
}


upload.onchange = function(){
    download.style.display = "block";
    reset.style.display = "block";
    imgBox.style.display = "block";

    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);

    file.onload = function(){
        photo.src = file.result;
    }
}