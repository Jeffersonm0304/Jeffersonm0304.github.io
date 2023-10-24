const element = document.getElementById('centerButton');

element.addEventListener('mouseenter', () => {
  element.style.backgroundColor = 'lightgray';
    element.style.color = 'black';
});

element.addEventListener('mouseleave', () => {
  element.style.backgroundColor = '#591218';
  element.style.color = 'white';
});
function jS() {
  var jFirst = document.getElementById("fname").value;

  alert(`This is the start of ${jFirst}'s Jim Journey!

 "The journey of a thousand miles begins with a single step." - Lao Tzu `);
}
const openImageButton = document.getElementById('openImageButton');
const imagePopup = document.getElementById('imagePopup');
const closePopup = document.getElementById('closePopup');

openImageButton.addEventListener('click', () => {
  imagePopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
  imagePopup.style.display = 'none';
});
