var $burger = $("#burger-icon");
var $nav = $('nav[data-nav]');
var $navA = $('nav[data-nav] a');
var isVisible = false;

function mouseClick(){
    console.log("click");
    if(isVisible === false){
        $nav.show();
        isVisible = true;
    }

    else{
        $nav.hide();
        isVisible = false;
    }
}

$burger.on( "click", mouseClick);
//close the mobile menu when menu is clicked
$navA.on("click", mouseClick);

// import {gsap} from "gsap";

import {section1Animation} from "./sections/section-1.js"
import {section2Animation} from "./sections/section-2.js"
import {section3Animation} from "./sections/section-3.js"

// call section 1 animation function
section1Animation();
section2Animation();
section3Animation();