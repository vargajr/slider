'use strict';

// mock data
const images = [
    {
        source:'./assets/img/Altaijpg.jpg',
        caption:'Altai',
    },
    {
        source:'./assets/img/snail.jpg',
        caption:'Snail',
    },
    {
        source:'./assets/img/the sea.jpg',
        caption:'The sea',
    },
    {
        source:'./assets/img/cherry_blossom.jpg',
        caption:'Cherry blossom',
    },
];

const forwardButton = document.querySelector('.slidershow__forestep');
const backwardButton = document.querySelector('.slidershow__backstep');
const navButtons = Array.from(document.querySelectorAll('.bar'));
const radioButtons = Array.from(document.querySelectorAll('.slidershow__sliders input'));
let actualImageIndex = 0;

const selectImage = (indexOfImage) => {
    navButtons.forEach((buttonElement, index) => buttonElement.classList.toggle('active', (index === indexOfImage)));
    radioButtons[indexOfImage].checked = true;
};

const callImage = () => {
    actualImageIndex = (actualImageIndex += 1)%images.length;
    selectImage(actualImageIndex);
}

const stepBack = () => {
    actualImageIndex = (actualImageIndex += 3)%images.length;
    selectImage(actualImageIndex);
};

forwardButton.addEventListener('click', callImage);
backwardButton.addEventListener('click', stepBack);

setInterval(callImage, 4000);