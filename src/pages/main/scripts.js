var popup = document.querySelector('.popup-contact');
var overlay = document.querySelector('.popup-overlay')
var popupBtn = document.querySelector('.slider-btn_js');
var popupCloseBtn = popup.querySelector('.popup-contact-btn')
var input = popup.querySelector('input')

popupBtn.addEventListener('click', function() {
    popup.classList.add('popup-contact-open');
    overlay.classList.add('show');
    input.focus();
})

popupCloseBtn.addEventListener('click', function(){
    popup.classList.remove('popup-contact-open');
    overlay.classList.remove('show');
})

window.addEventListener('keydown', function(evt) {
    if (evt.code === "Escape") {
        if(popup.classList.contains('popup-contact-open')) {
            popup.classList.remove('popup-contact-open');
            overlay.classList.remove('show');
        } 
    } 
})


var btnMobileHeader = document.querySelector('.mobile-btn_js');
var btnCloseHeader = document.querySelector('.close-btn_js');
var mobileHeader = document.querySelector('.mobile-header_js');

btnMobileHeader.addEventListener('click', function() {
    mobileHeader.classList.add('mobile-header_open');
})

btnCloseHeader.addEventListener('click', function(){
    mobileHeader.classList.remove('mobile-header_open');
})
