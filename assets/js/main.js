window.onscroll = function() {scrollAnimation()};
function scrollAnimation() {
    let scroll = document.scrollingElement.scrollTop;
    let viewportHeight = window.innerHeight;
    // console.log(viewportHeight);
    if (scroll >= 9000) {
        console.log('9000');
    }
    else if (scroll >= viewportHeight * 5.2) {
        document.querySelector(".demonstratie-container").classList.remove("opacity-0");
        document.querySelector(".blm-container").classList.add("opacity-0");
        console.log(viewportHeight * 5.2);
    }
    else if (scroll >= viewportHeight * 4) {
        document.querySelector(".blm-container").classList.remove("opacity-0");
        document.querySelector(".optelsom-container").classList.add("opacity-0");
        console.log(viewportHeight * 4);
    }
    else if (scroll >= viewportHeight * 3.5) {
        document.querySelector(".riot").classList.add("opacity-0");
        document.querySelector(".optelsom-container").classList.remove("opacity-0");
        console.log(viewportHeight * 3.5);
    }
    else if (scroll >= viewportHeight * 3) {
        document.querySelector("#riot-img").src = "assets/img/riot3.jpg";
        console.log(viewportHeight * 3);
    }
    else if (scroll >= viewportHeight * 2.8) {
        document.querySelector("#riot-img").src = "assets/img/riot2.jpg";
        console.log(viewportHeight * 2.8);
    }
    else if (scroll >= viewportHeight * 2.6) {
        document.querySelector(".riot").classList.remove("opacity-0");
        document.querySelector("#riot-img").src = "assets/img/riot.jpg";
        console.log(viewportHeight * 2.6);
    }
    else if (scroll >= viewportHeight * 2.4) {
        document.querySelector(".p-1").classList.add("opacity-0");
        console.log(viewportHeight * 2.4);
    }
    else if (scroll >= viewportHeight * 2) {
        document.getElementById('p-1').classList.remove("opacity-0");
        document.getElementById('p-1').classList.add("smoothUpTransition");
        document.getElementById('article-title').classList.add("opacity-0");
        console.log(viewportHeight * 2);
    }
    else if (scroll >= viewportHeight) {
        document.getElementById('p-1').classList.add("opacity-0");
        document.getElementById('article-title').classList.remove("opacity-0");
        document.getElementById('article-title').classList.add("smoothUpTransition");
        document.querySelector('.victim-container').classList.add("opacity-0");
        console.log(viewportHeight);
    }
    else {
        document.getElementById('article-title').classList.add("opacity-0");
        document.querySelector('.victim-container').classList.remove("opacity-0");
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


