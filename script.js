const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const span = document.getElementsByClassName("close")[0];
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentImgIndex = 0;
const allImages = document.querySelectorAll('.gallery img');

// Open Modal
allImages.forEach((img, index) => {
  img.onclick = function() {
    modal.style.display = "flex"; // Change "block" to "flex"
    modalImg.src = this.src;
    currentImgIndex = index;
}
});

// Next Function
nextBtn.onclick = function() {
  currentImgIndex++;
  if (currentImgIndex >= allImages.length) { currentImgIndex = 0; } // Loop to start
  modalImg.src = allImages[currentImgIndex].src;
}

// Previous Function
prevBtn.onclick = function() {
  currentImgIndex--;
  if (currentImgIndex < 0) { currentImgIndex = allImages.length - 1; } // Loop to end
  modalImg.src = allImages[currentImgIndex].src;
}

// Close
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; }