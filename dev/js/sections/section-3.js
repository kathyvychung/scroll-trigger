import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section3TL = gsap.timeline();

section3TL.from("#section-3 #right-cloud3", {duration: 0.5, x:600});
section3TL.from("#section-3 #left-cloud", {duration: 0.5, x:-600});
section3TL.from("#section-3 #img", {duration: 0.5, alpha:0});
section3TL.from("#section-3 h1", {duration: 0.5, alpha:0});
section3TL.from("#section-3 p", {duration: 0.5, alpha:0});
section3TL.from("#section-3 #right-cloud", {duration: 0.5, x:300});

export function section3Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section3TL,
        toggleActions: "restart none reverse none",
        trigger: "#section-3",
        scrub:1,
        start: "top 90%",
        // endTrigger: "#otherID",
        end: "bottom 40%"
       
    });
}