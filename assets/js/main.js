window.onscroll = function() {scrollAnimation()};
function scrollAnimation() {
    let scroll = document.scrollingElement.scrollTop;
    if (scroll >= 600) {
        document.getElementById("article-title").classList.remove("opacity-0");
    }
    else if (scroll >= 800) {
        document.getElementById("p-1").classList.remove("opacity-0");
        console.log('800');
    }
    else {
        console.log("nothing")

    }
}
