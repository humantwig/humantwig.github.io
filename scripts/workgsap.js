
const allWorks = gsap.utils.toArray(".work-item");
const workImageWrap = document.querySelector(".work-img-wrap");
const workImage = document.querySelector(".work-img");

function initWorks() {
    allWorks.forEach((link) => {
        link.addEventListener("mouseenter", workHover);
        link.addEventListener("mouseleave", workHover);
        link.addEventListener("mousemove", moveWorkImage);
    });
}

function moveWorkImage(e) {
    let xpos = e.clientX;
    let ypos = e.clientY;
    const tl = gsap.timeline();
    tl.to(workImageWrap, {
        x: xpos / 2,
        y: ypos / 5
    });
}

function workHover(e) {
    if (e.type === "mouseenter") {
        const targetImage = e.target.dataset.img;

        const t1 = gsap.timeline();
        t1.set(workImage, {
            backgroundImage: `url(${targetImage})`
        }).to(workImageWrap, {
            duration: 1,
            autoAlpha: 1
        });
    } else if (e.type === "mouseleave") {
        const tl = gsap.timeline();
        tl.to(workImageWrap, {
            duration: 1,
            autoAlpha: 0
        });
    }
}
function init() {
    initWorks();
}
window.addEventListener("load", function () {
    init();
});