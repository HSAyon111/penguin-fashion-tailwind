const modelImage = document.getElementById('banner-image');
console.log(modelImage);

const menLeatherJacket = document.getElementById('jacket-description');
console.log(menLeatherJacket.innerText);

document.getElementById('buy-now-button').addEventListener('click', function () {
    const bannerHeading = document.getElementById('banner-heading');
    bannerHeading.innerText = 'I AM PENGUIN';
});