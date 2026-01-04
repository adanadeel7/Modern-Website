document.addEventListener("mousemove",function(events){ 
    let crsr = document.querySelector("#cursor");
    crsr.style.left = events.x + "px";
    crsr.style.top = events.y + "px";
})

document.addEventListener("mousemove",function(events){ 
    let crsr = document.querySelector("#cursor-blur");
    crsr.style.left = events.x - 200 + "px";
    crsr.style.top = events.y - 200 + "px";
})



gsap.to("#nav", { 
    backgroundColor:"#000",
    height:"100px",
    duration:0.5,
    scrollTrigger: {
        trigger:"#nav", 
        scroller:"body",
        markers: true,
        start: "top -10%", 
        end: "top -11%",
        scrub:1,
    }
})

gsap.to("#main", { 
    backgroundColor:"#000",
    scrollTrigger:{ 
        trigger:"#main", 
        scroller: "body", 
        markers:true,
        start:"top -25%",
        end:"top -70%", 
        scrub:2,
    }
})