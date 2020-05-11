
var logo_tl = gsap.timeline();

logo_tl.from(".header__logo--sticker", {duration: .6,  ease: "elastic.out(1, 0.3)", opacity: 0, scale: 2.5, rotation:190})
.from(".header__logo--park", {duration: .6, ease: "elastic.out(1, 0.3)", opacity: 0, scale: 2.5, rotation:-190},"-=0.3")


let header_logo = document.querySelector('.header__logo');

header_logo.addEventListener('mouseover', mouseOver);
header_logo.addEventListener('mouseout', mouseOut);

function mouseOver() {
    gsap.to(".header__logo--sticker", {duration: .5, rotationX: 40, ease: "circ.out"});
    gsap.to(".header__logo--park", {duration: .5, rotationX: -30, ease: "circ.out"});
}

function mouseOut() {
    gsap.to(".header__logo--sticker", {duration: .5, rotationX: 0, ease: "circ.out"});
    gsap.to(".header__logo--park", {duration: .5, rotationX: 0, ease: "circ.out"});
}


gsap.from(".stickerpack-slider", {duration: 1, y: 150, opacity: 0});



