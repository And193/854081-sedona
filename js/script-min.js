var popup=document.querySelector(".modal-search"),button=document.querySelector(".button--open-order");popup.classList.remove("modal-search--open"),popup.classList.add("modal-search--close"),button.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("modal-search--open"),popup.classList.toggle("modal-search--close")}),document.addEventListener("keydown",function(e){27===e.keyCode&&(popup.classList.remove("modal-search--open"),popup.classList.add("modal-search--close"))});
