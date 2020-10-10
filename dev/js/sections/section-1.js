// import {gsap} from "gsap";

// export function section1Animation(){
//     gsap.from("#section-1 #hero-image",{duration:1, alpha:0, y:400});
// }



import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section1TL = gsap.timeline();
section1TL.from("#section-1 hero-image", {duration: 0.5, alpha:0})
section1TL.from("#section-1 #text", {duration: 1, alpha:0});
section1TL.from("#section-1 h1", {duration: 2, alpha:0});
section1TL.from("#section-1 #cloud", {duration: 1, x:-600});

export function section1Animation(){
    gsap.from("#section-1 #hero-image",{duration:1, alpha:0, y:400});
    ScrollTrigger.create({
        markers: true,
        animation: section1TL,
        toggleActions: "play none none none",
        trigger: "#section-1",
        start: "top 70%",
        end: "bottom 70%"
       
    });
}