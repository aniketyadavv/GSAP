gsap.to("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue"
})

gsap.from("#box2", {
    x: 500,
    duration: 2,
    delay: 1
})

gsap.from("h1", {
    opacity: 0,
    duration: 2,
    y: 30,
    delay: 1,
    stagger: 0.4
})