/* eslint-disable no-undef */ 
if(document.getElementById('product_detail')){
const mainImage = document.querySelector('.main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentImageIndex = 0;

function showNextImage() {
  currentImageIndex++;
  
  if (currentImageIndex >= thumbnails.length) {
    currentImageIndex = 0;
  }
  
  const newImageSrc = thumbnails[currentImageIndex].src;
  mainImage.src = newImageSrc;
}

thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', () => {
    const newImageSrc = thumbnail.src;
    mainImage.src = newImageSrc;
    currentImageIndex = Array.from(thumbnails).indexOf(thumbnail);
  });
});

setInterval(showNextImage, 5000);
}
