import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2 .dad", {duration: 0.5, alpha:0});
section2TL.from("#section-2 #text1", {duration: 0.5, alpha:0});
section2TL.from("#section-2 #text2", {duration: 1, alpha:0});
section2TL.from("#section-2 .mom", {duration: 1, alpha:0});

export function section2Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start: "top 50%",
        // endTrigger: "#otherID",
        end: "bottom 50%"
       
    });
}