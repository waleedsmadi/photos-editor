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



// Reset function
function resetValues(){
    photo.style.filter = "none";
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    hueRotate.value = '0';
}

reset.onclick = function(){
    resetValues();
}

// make buttons and image box
// hidden when program starts
window.onload = function(){
    download.style.display = "none";
    reset.style.display = "none";
    imgBox.style.display = "none";
}


// When upload image
upload.onchange = function(){

    //reset values
    resetValues();


    // show buttons 
    download.style.display = "block";
    reset.style.display = "block";
    imgBox.style.display = "block";

    // upload (reading) the image
    let file = new FileReader();
    file.readAsDataURL(upload.files[0]);

    file.onload = function(){
        photo.src = file.result;
    }
}

// array of filters
const filters = Array.from(document.querySelectorAll(".filters ul li"));

filters.forEach(filter => {

    // add an event for change filter
    filter.addEventListener("input", function(){
        photo.style.filter = `

        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${hueRotate.value}deg)
        
        `;
    });
});

