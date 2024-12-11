gsap.from('.bg', {
    width:0,
    left:0,
    duration: 1,
    delay: .2
});
gsap.from('.img', {
    scale: 1.3,
    opacity: 0,
    duration: .5,
    delay: .3
});
gsap.to('.fade', {
    y:0,
    opacity: 1,
    duration: .4,
    delay: .3,
    stagger: .2,
});
gsap.to('.fade2', {
    y:0,
    opacity: 1,
    duration: .4,
    delay: .3,
    stagger: .2,
});
gsap.from('.sm-img', {
    scaleX: 0,
    duration: .6,
    delay: .8,
});
gsap.from('.inner', {
    scaleX: 0,
    duration: .4,
    delay: 1.3,
});
gsap.from('.img-small', {
    scaleX: 1.5,
    opacity: 0,
    duration: .4,
    delay: 2,
});