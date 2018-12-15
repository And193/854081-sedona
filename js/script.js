var popup = document.querySelector(".modal-search");
var button = document.querySelector(".button--open-order");

popup.classList.add("modal-search--close");
button.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.toggle("modal-search--close");
});
