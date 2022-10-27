var swiper = new Swiper('.Bx-Pr', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

//For Popup
var selectorLogin = document.getElementById("login");
        var selectorRegister = document.getElementById("register");
        var selectorBtn = document.getElementById("btn");
        function register()
        {
            selectorLogin.style.left = "-400px";
            selectorRegister.style.left = "50px";
            selectorBtn.style.left="110px";
        }
        function login()
        {
            selectorLogin.style.left = "50px";
            selectorRegister.style.left = "450px";
            selectorBtn.style.left="0";
        } 

let PopupBox = document.getElementById("popup-box")
function opnePopup(){
  PopupBox.classList.add("Open-Popup");
}
function ClosePopup(){
  PopupBox.classList.remove("Open-Popup");
}