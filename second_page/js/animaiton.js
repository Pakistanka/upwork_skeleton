let s_panel = document.querySelector(".s_panel");
let s_panel_close_btn = document.querySelector(".s_panel_close_btn")
let settings = document.querySelector(".settings");

let priceBtn = document.querySelector(".price_btn");


settings.onclick = openPanel = () => {
    gsap.to(".s_panel", {  visibility: 'visible'});
    gsap.to(".s_panel", {  duration: .5, autoAlpha: 1});
    gsap.to('.s_panel_close_btn', { delay: .5, autoAlpha: 1 });
    gsap.to('.settings', { duration: .5, ease: "power4.out", autoAlpha: 0 })
}
priceBtn.onclick = openPanel;

s_panel_close_btn.onclick = closePanel = () => {
    gsap.to(".s_panel", { duration: .5, autoAlpha: 0});
    gsap.to('.s_panel_close_btn', { autoAlpha: 0},"-=1");
    gsap.to('.settings', { duration: .5, ease: "power4.out", autoAlpha: 1 });
}





let base_opener = document.querySelector(".s_panel__base_label__show");
base_open = true; 
base_opener.onclick = toggleBase = () => {
    if (base_open){
        gsap.to('.s_panel__base-dynamic-el', {duration: .3, opacity: 0});
        gsap.to('.s_panel__base-dynamic-el', {delay: .3, visibility: "hidden", });
        gsap.to('.s_panel__base_selector', {delay: .3, height: '12px'});
        gsap.to('.s_panel__base_label__show', {duration: .1, rotation: -90});
        base_open = false;
        
    } else if (base_open === false){
        gsap.to('.s_panel__base-dynamic-el',{duration: .3, y: 0});
        gsap.to('.s_panel__base-dynamic-el',{delay: .3, visibility: "visible", opacity: 1});
        gsap.to('.s_panel__base_selector', {height: '94px'});
        gsap.to('.s_panel__base_label__show', {duration: .1, rotation: 0})
        base_open = true;
    }
}


let color_opener = document.querySelector(".s_panel__color_label__show");
color_open = true; 
color_opener.onclick = toggleBase = () => {
    if (color_open){
        gsap.to('.s_panel__color_piker', {duration: .3, opacity: 0});
        gsap.to('.s_panel__color_piker', {delay: .3, visibility: "hidden", });
        gsap.to('.s_panel__color_selector', {delay: .3, height: '12px'});
        gsap.to('.s_panel__color_label__show', {duration: .1, rotation: -90});
        color_open = false;
        
    } else if (color_open === false){
        gsap.to('.s_panel__color_piker',{duration: .3, y: 0});
        gsap.to('.s_panel__color_piker',{delay: .3, visibility: "visible", opacity: 1});
        gsap.to('.s_panel__color_selector', {height: '84px'});
        gsap.to('.s_panel__color_label__show', {duration: .1, rotation: 0})
        color_open = true;
    }
}


let blockAbout = document.querySelector(".s_panel__info_about"); 
let blockFeedback = document.querySelector(".s_panel__info_wrap");

let highLightAbout = false;
let higtLightFeedback = false;


blockAbout.onclick = toggleAbout = () => {
    if(highLightAbout===false){
        gsap.to('.s_panel__info_about', {duration: .2, background: '#fff'});
        gsap.to('.s_panel__info_wrap', {duration: .2, background: 'transparent'});
        gsap.to('.s_panel__info--block',{ visibility: "visible"});
        gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 1});

        highLightAbout = true;
        highLightFeedback = false;
    } else if (highLightAbout){
        gsap.to('.s_panel__info_about', {duration: .2, background: 'transparent'});
        gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 0});
        // remove block below
        highLightAbout = false;
    }
}

blockFeedback.onclick = toggleFeedback = () => {
    if (highLightFeedback === false){
        gsap.to('.s_panel__info_about', {duration: .2, background: 'transparent'});
        gsap.to('.s_panel__info_wrap', {duration: .2, background: '#fff'});
        gsap.to('.s_panel__info--block',{ visibility: "visible"});
        gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 1});
    
        highLightAbout = false;
        highLightFeedback = true;

    } else if (highLightFeedback){
        gsap.to('.s_panel__info_wrap', {duration: .2, background: 'transparent'});
        gsap.to('.s_panel__info--block',{durtation: .3, autoAlpha: 0});
        // remove block below
        highLightFeedback = false;
    }
}

gsap.from('.tooth', {opacity: 0, duration: 1, x: -20});
gsap.from('.mushroom', {opacity: 0, duration: 1, x: -10});
gsap.from('.eye', {opacity: 0, duration: 1, x: -40});
gsap.from('.knife', {opacity: 0, duration: 1, x: -30});
gsap.from('.herb', {opacity: 0, duration: 1, x: -10});



gsap.from('.tongue', {opacity: 0, duration: 1, x: 30});
gsap.from('.scissors', {opacity: 0, duration: 1, x: 40});
gsap.from('.flower', {opacity: 0, duration: 1, x: 40});
gsap.from('.bone', {opacity: 0, duration: 1, x: 20});
gsap.from('.coffin', {opacity: 0, duration: 1, x: 40});
gsap.from('.light', {opacity: 0, duration: 1, x: 40});




let baseColor = document.querySelector(".base_bg_color");
let basePattern = document.querySelector(".base_bg_pattern");

baseColor.onclick = moveToPattern = () => {
    gsap.to('.underColorPattern', {duration: .3, x: 0});
}

basePattern.onclick = moveToColor = () => {
    gsap.to('.underColorPattern', {duration: .3, x: 115});
}

