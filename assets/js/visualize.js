 gsap.registerPlugin(ScrollTrigger);
gsap.from(".firsthead *",{duration:1.5,opacity:0,scale:0.3,stagger:0.25
})
gsap.from(".test",{
    duration:1.5,opacity:0, scale:0.3,stagger:0.25

})
// let tl = gsap.timeline()
// tl.from(".secondbanner",{
//     scrollTrigger:{
//         trigger:".secondbanner",
//         start:"top center",
//         markers:true,
//     },
//     duration:1.5,opacity:0,scale:0.3

// })
// let tl = gsap.timeline()
gsap.from(".secondfirsthead h4",{
    scrollTrigger:{
            trigger:".secondbanner",
            start:"top center",

            // markers:false,
            },
    
    duration:0.5,opacity:0,scale:0.5,
})
gsap.from(".appname",{
    scrollTrigger:{
        trigger:".secondbanner",
        start:"top center",
        // markers:true,
        },

    duration:0.5,opacity:0,scale:0.5,stagger:0.25,

})
gsap.from(".thirdbannercontent *",{
    scrollTrigger:{
        trigger:".thirdbanner",
        start:"top center",
        // markers:true,
    },

    duration:1, opacity:0,scale:0.3,stagger:0.25

})
gsap.from(".thirdbannerimg",{
    scrollTrigger:{
        trigger:".thirdbanner",
        start:"top center",
        // markers:true,
    },
    duration:1, opacity:0,scale:0.6,stagger:0.25


})
gsap.from(".fourthcontainer *",{
    scrollTrigger:{
        trigger:".fourthbanner",
        start:"top center",
        // markers:true,
    },
    duration:1, opacity:0,scale:0.3,stagger:0.30


})
gsap.from(".imagegallery",{
    duration:1, opacity:0,scale:0.7

})
gsap.from(".fifthbannercontent",{
    scrollTrigger:{
        trigger:".fifthbanner",
        start:"top center",
        // markers:true,
    },

    duration:1, opacity:0,scale:0.3,stagger:0.25

})
gsap.from(".fifthbannerround",{
    scrollTrigger:{
        trigger:".fifthbanner",
        start:"top center",
        // markers:true,
    },
    duration:1, opacity:0,scale:0.3,stagger:0.25

})
// let la=gsap.timeline()
gsap.from(".sithphonecontainer",{
    scrollTrigger:{
        trigger:".sixthbanner",
        start:"top center",
        // markers:true,
    },
    duration:1, opacity:0,scale:0.5
})
gsap.from(".second *",{
    scrollTrigger:{
        trigger:".sixthbanner",
        start:"top center",
        // markers:true,
    },
    duration:1,opacity:0,scale:0.3 ,stagger:0.25
})
$(".icon").click(function(){
    $(".phonediv").fadeToggle();
 })
 $(".closingtag").click(function(){
     $(".phonediv").fadeToggle();
  })
  if(window.matchMedia('(max-width:768px)').matches){
    
    gsap.from(".firsthead ",{
        duration:1.5, opacity:0,scale:0.3,stagger:0.25
    })
    gsap.from(".secondhead *",{
        duration:1,delay:1,opacity:0,scale:0.3,stagger:0.50
    })
    gsap.from(".fifthbannercontent *",{
        duration:0.5,opacity:0,scale:0.3,stagger:0.50
    })
    gsap.from(".fifthbannerround",{
        duration:0.5,opacity:0,scale:0.3,stagger:0.50
    })

    gsap.from(".fifthbannersecondcontent",{
        duration:1.5,delay:2,opacity:0,scale:0.3,stagger:0.50
    })
}
if(window.matchMedia('(max-width:426px)').matches){
    
    gsap.from(".phonedivnav * ",{
        duration:1,opacity:0,stagger:0.25,x:500
    })
    gsap.from(".closingtag",{
        duration:0.5,opacity:0,scale:0.3,x:500
    })
    
    // gsap.from(".secondhead *",{
    //     duration:2,delay:1,opacity:0,scale:0.3,stagger:0.50
    // })
   // gsap.from(".fifthbannersecondcontent",{
    //     duration:1.5,delay:2,opacity:0,scale:0.3,stagger:0.50
    // })
} 



