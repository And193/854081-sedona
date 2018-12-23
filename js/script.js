var popup = document.querySelector(".modal-search");
var button = document.querySelector(".button--open-order");

popup.classList.remove("modal-search--open");
popup.classList.add("modal-search--close");
button.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.toggle("modal-search--open");
  popup.classList.toggle("modal-search--close");
});
document.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    popup.classList.remove("modal-search--open");
    popup.classList.add("modal-search--close");
  }
});
