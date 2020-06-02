window.onscroll = function() {scrollAnimation()};
function scrollAnimation() {
    let scroll = document.scrollingElement.scrollTop;
    if (scroll >= 2000) {
        console.log('2000');
    }
    else if (scroll >= 1900) {
        console.log('1900');
    }
    else if (scroll >= 1800) {
        console.log('1800');
    }
    else if (scroll >= 1700) {
        console.log('1700');
    }
    else if (scroll >= 1600) {
        console.log('1600');
    }
    else if (scroll >= 1500) {
        console.log('1500');
    }
    else if (scroll >= 1400) {
        console.log('1400');
    }
    else if (scroll >= 1300) {
        console.log('1300');
    }
    else if (scroll >= 1200) {
        console.log('1200');
    }
    else if (scroll >= 1100) {
        console.log('1100');
    }
    else if (scroll >= 1000) {
        console.log('1000');
    }
    else if (scroll >= 900) {
        console.log('900');
    }
    else if (scroll >= 800) {
        console.log('800');
    }
    else if (scroll >= 700) {
        document.getElementById('p-1').classList.remove("opacity-0");
        console.log('700');
    }
    else if (scroll >= 600) {
        document.getElementById('p-1').classList.add("opacity-0");
        document.getElementById('article-title').classList.remove("opacity-0");
        document.querySelector('.Victim-container').classList.add("opacity-0");
        console.log('600');
    }
    else {
        document.getElementById('article-title').classList.add("opacity-0");
        document.querySelector('.Victim-container').classList.remove("opacity-0");
        console.log("nothing");

    }
}
