window.onscroll = function() {scrollAnimation()};
function scrollAnimation() {
    let scroll = document.scrollingElement.scrollTop;
    if (scroll >= 9000) {
        console.log('9000');
    }
    else if (scroll >= 4200) {
        document.querySelector(".demonstratie-container").classList.remove("opacity-0");
        document.querySelector(".blm-container").classList.add("opacity-0");
        console.log('3700');
    }
    else if (scroll >= 3300) {
        document.querySelector(".blm-container").classList.remove("opacity-0");
        document.querySelector(".optelsom-container").classList.add("opacity-0");
        console.log('3300');
    }
    else if (scroll >= 2800) {
        document.querySelector(".riot").classList.add("opacity-0");
        document.querySelector(".optelsom-container").classList.remove("opacity-0");
        console.log('2800');
    }
    else if (scroll >= 2600) {
        document.querySelector("#riot-img").src = "assets/img/riot3.jpg";
        console.log('2600');
    }
    else if (scroll >= 2300) {
        document.querySelector("#riot-img").src = "assets/img/riot2.jpg";
        console.log('2300');
    }
    else if (scroll >= 1800) {
        document.querySelector(".riot").classList.remove("opacity-0");
        document.querySelector("#riot-img").src = "assets/img/riot.jpg";
        console.log('1800');
    }
    else if (scroll >= 1600) {
        document.querySelector(".p-1").classList.add("opacity-0");
        console.log('1600');
    }
    else if (scroll >= 1550) {
        document.querySelector(".p-1").classList.remove("opacity-0");
        console.log('1550');
    }
    else if (scroll >= 1050) {
        document.getElementById('red').classList.add("red");
    }
    else if (scroll >= 1000) {
        document.getElementById('red').classList.add("red");
        document.getElementById('p-1').classList.remove("opacity-0");
        document.getElementById('p-1').classList.add("smoothUpTransition");
        document.getElementById('article-title').classList.add("opacity-0");
        console.log('700');
    }
    else if (scroll >= 800) {
        document.getElementById('p-1').classList.add("opacity-0");
        document.getElementById('article-title').classList.remove("opacity-0");
        document.getElementById('article-title').classList.add("smoothUpTransition");
        document.querySelector('.Victim-container').classList.add("opacity-0");
        console.log('600');
    }
    else {
        document.getElementById('article-title').classList.add("opacity-0");
        document.querySelector('.Victim-container').classList.remove("opacity-0");
        console.log("nothing");

    }
}

window.onload = function() { document.getElementById("blm-logo").addEventListener("click", blmLogo);
function blmLogo() {
    document.querySelector(".blm-text-1").classList.add("visible-text");
    document.querySelector(".blm-text-2").classList.add("visible-text");
    document.querySelector(".blm-text-3").classList.add("visible-text");
    document.querySelector(".blm-text-4").classList.add("visible-text");
    console.log('click');
}};
