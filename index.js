// gsap.to("#box1", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     backgroundColor: "blue",
//     repeat: -1,
//     yoyo: true
// })

// gsap.from("#box2", {
//     x: 500,
//     duration: 2,
//     delay: 1
// })

// gsap.from("h1", {
//     opacity: 0,
//     duration: 2,
//     y: 30,
//     delay: 1,
//     stagger: 0.4
// })

var tl = gsap.timeline()

tl.from("h2", {
    y: -20,
    duration: 1,
    delay: 0.5,
    opacity: 0,
})

tl.from("h4", {
    y: -20,
    duration: 1,
    opacity: 0,
    stagger: 0.3

})

tl.from("h1", {
    y: 20,
    opacity: 0,
    duration: 0.5,
    scale: 0.2
})