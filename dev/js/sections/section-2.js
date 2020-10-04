import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section2TL = gsap.timeline();

section2TL.from("#section-2-first")

export function section2Animation(){
    ScrollTrigger.create({
        markers: true,
        animation: section2TL,
        toggleActions: "play none none none",
        trigger: "#section-2",
        start: "top top",
        endTrigger: "#otherID",
        end: "bottom 50%"
       
    });
}