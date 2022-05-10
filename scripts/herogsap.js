
tl = new TimelineMax({});
tl.staggerFrom(['.hero-text'], 1.5, {
    y: "80%", ease: Power4.easeOut
}
    , 0.15)

tl = new TimelineMax({});
tl.staggerFrom(['.me'], 1.5, {
    y: "50%", ease: Power4.easeOut
}, 0.3)

tl = new TimelineMax({});
tl.staggerFrom(['#rotate'], 1.5, {
    y: "150%", ease: Power4.easeOut
}
    , 0.5)

tl = new TimelineMax({});
tl.staggerFrom(['.hero-contact-button'], 1.5, {
    y: "200%", ease: Power4.easeOut
}
    , 0.5)