
let s_panel = document.querySelector(".s_panel");
let s_panel_close_btn = document.querySelector(".s_panel_close_btn")
let settings = document.querySelector(".settings");

let open = 1;

settings.onclick = openPanel = () => {
    gsap.to(".s_panel", { duration: .5, x: -400 });
    gsap.to('.s_panel_close_btn', { delay: .5, opacity: 1 });
    gsap.to('.settings', { duration: .5, ease: "power4.out", opacity: 0 })
}

s_panel_close_btn.onclick = closePanel = () => {
    gsap.to(".s_panel", { duration: .5, x: 200});
    gsap.to('.s_panel_close_btn', { opacity: 0},"-=1");
    gsap.to('.settings', { duration: .5, ease: "power4.out", opacity: 1 });
}



