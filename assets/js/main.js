window.onscroll = function() {scrollAnimation()};
function scrollAnimation() {
    let scroll = document.scrollingElement.scrollTop;
    let viewportHeight = window.innerHeight;
    if (scroll >= 9000) {
        console.log('9000');
    }
    else if (scroll >= viewportHeight * 6) {
        document.querySelector(".demonstratie-container").classList.remove("opacity-0");
        document.querySelector(".blm-container").classList.add("opacity-0");
        //hamburger
        console.log(viewportHeight * 6);
    }
    else if (scroll >= viewportHeight * 5) {
        document.querySelector(".blm-container").classList.remove("opacity-0");
        setTimeout(function() { blmLogo(); }, 1000);
        document.querySelector(".optelsom-container").classList.add("opacity-0");
        //hamburger
        console.log("optelsom" + viewportHeight * 5);
    }
    else if (scroll >= viewportHeight * 4) {
        document.querySelector(".riot").classList.add("opacity-0");
        document.querySelector(".optelsom-container").classList.remove("opacity-0");
        document.getElementById('optelsom-container').classList.add("smoothUpTransition");
        //hamburger
        console.log(viewportHeight * 4);
    }
    else if (scroll >= viewportHeight * 3) {
        document.querySelector(".riot").classList.remove("opacity-0");
        document.querySelector(".p-1").classList.add("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        console.log(viewportHeight * 3);
    }
    else if (scroll >= viewportHeight * 2) {
        document.getElementById('p-1').classList.remove("opacity-0");
        document.getElementById('p-1').classList.add("smoothUpTransition");
        document.getElementById('article-title').classList.add("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        console.log(viewportHeight * 2);
    }
    else if (scroll >= viewportHeight) {
        document.getElementById('p-1').classList.add("opacity-0");
        document.getElementById('article-title').classList.remove("opacity-0");
        document.getElementById('article-title').classList.add("smoothUpTransition");
        document.querySelector('.victim-container').classList.add("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        console.log(viewportHeight);
    }
    else {
        document.getElementById('article-title').classList.add("opacity-0");
        document.querySelector('.victim-container').classList.remove("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.add("opacity-0");
        console.log("nothing");

    }
}

function riotImages() {
    let BackgroundImg=["assets/img/riot.jpg",
        "assets/img/riot2.jpg",
        "assets/img/riot3.jpg"
    ];
    setInterval(changeImage, 5000);
    function changeImage() {
        let i = Math.floor((Math.random() * 3));
        document.querySelector("#riot-img").src = BackgroundImg[i];
    }
};

window.onload = function(){
    document.getElementById("blm-logo").addEventListener("click", blmLogo);
    document.getElementById("title").addEventListener("click", scrollTitle);
    document.getElementById("floyd").addEventListener("click", scrollFloyd);
    document.querySelector(".arrow-container-left").addEventListener("click", scrollOne);
    riotImages();
};

function blmLogo() {
    document.querySelector(".blm-text-1").classList.add("visible-text");
    document.querySelector(".blm-text-2").classList.add("visible-text");
    document.querySelector(".blm-text-3").classList.add("visible-text");
    document.querySelector(".blm-text-4").classList.add("visible-text");
    console.log('click');
}
const scrollPosition = window.innerHeight;

function scrollOne() {
    window.scrollBy({top: scrollPosition, behavior: 'smooth'});
}

function scrollTitle() {
    window.scrollTo({top: scrollPosition, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

function scrollFloyd() {
    window.scrollTo({top: scrollPosition * 2, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

