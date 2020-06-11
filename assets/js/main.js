window.onscroll = function() {scrollAnimation()};
function scrollAnimation() {
    let scroll = document.scrollingElement.scrollTop;
    let viewportHeight = window.innerHeight;
    if (scroll >= 9000) {
        console.log('9000');
    }
    else if (scroll >= viewportHeight * 10) {
        afdelingenPage();
        document.querySelector('.afdelingen-container').classList.remove("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "Afdelingen";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        console.log(viewportHeight * 10);
    }
    else if (scroll >= viewportHeight * 9) {
        //hide
        document.querySelector('.afdelingen-container').classList.add("opacity-0");
        for (let i = 0; i < 30; i++) {
            document.querySelector('#fist-' + i).classList.add("opacity-0");
        }
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "Meerdere leiders";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        //counter
        counter = 0;
        console.log(viewportHeight * 9);
    }
    else if (scroll >= viewportHeight * 8) {
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "Ondersteunende organisaties";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        console.log(viewportHeight * 8);
    }
    else if (scroll >= viewportHeight * 7) {
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "Patrisse Cullors";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        console.log(viewportHeight * 7);
    }
    else if (scroll >= viewportHeight * 6) {
        document.querySelector(".sticky-container").classList.remove("opacity-0");
        document.querySelector(".blm-container").classList.add("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "#BLM";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        console.log(viewportHeight * 6);
    }
    else if (scroll >= viewportHeight * 5) {
        document.querySelector(".blm-container").classList.remove("opacity-0");
        setTimeout(function() { blmLogo(); }, 1000);
        document.querySelector(".optelsom-container").classList.add("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "#BLM";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        //counter
        counter = 0;
        console.log("optelsom" + viewportHeight * 5);
    }
    else if (scroll >= viewportHeight * 4) {
        document.querySelector(".riot").classList.add("opacity-0");
        // document.querySelector(".optelsom-container").classList.remove("opacity-0");
        optelsomPage();
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "De optelsom";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        console.log("testje" + viewportHeight * 4);
    }
    else if (scroll >= viewportHeight * 3) {
        document.querySelector(".riot").classList.remove("opacity-0");
        document.querySelector(".p-1").classList.add("opacity-0");
        document.querySelector(".optelsom-container").classList.add("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "Riots";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        //counter
        counter = 0;
        console.log(viewportHeight * 3);
    }
    else if (scroll >= viewportHeight * 2) {
        // setTimeout(function(){document.getElementById('p-1').classList.remove("opacity-0");},5000);
        // document.getElementById('p-1').classList.add("smoothUpTransition");
        document.getElementById('article-title').classList.add("opacity-0");
        //hamburger
        document.querySelector('.hamburger-menu').classList.remove("opacity-0");
        //arrow
        document.querySelector('.arrow-container-left').classList.remove("opacity-0");
        //title
        document.querySelector('.page-title').classList.remove("opacity-0");
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = "George Floyd";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
        // transcriptFloyd();
        addFirstTranscriptLine();
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
        //title
        // document.querySelector('.page-title').classList.add("opacity-0");
        document.querySelector('.page-title').classList.add("title-animation");
        document.querySelector('.page-title').innerHTML = " ";
        setTimeout(function(){document.querySelector('.page-title').classList.remove('title-animation')},100);
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
    document.querySelector(".mid-title").addEventListener("click", patriceText);
    document.querySelector(".arrow-container-left").addEventListener("click", scrollOne);
    document.getElementById("aa").addEventListener("click", addAA);
    document.getElementById("fem").addEventListener("click", addFem);
    document.getElementById("sncc").addEventListener("click", addSncc);
    document.getElementById("leader-3").addEventListener("click", addLeaders);
    document.querySelector(".transcript").addEventListener("click", transcriptFloyd);

    //Hamburger menu links
    document.getElementById("home").addEventListener("click", scrollHome);
    document.getElementById("title").addEventListener("click", scrollTitle);
    document.getElementById("floyd").addEventListener("click", scrollFloyd);
    document.getElementById("riot").addEventListener("click", scrollRiot);
    document.getElementById("optelsom").addEventListener("click", scrollOptelsom);
    document.getElementById("blm").addEventListener("click", scrollBlm);
    document.getElementById("patrisse").addEventListener("click", scrollPatrisse);
    document.getElementById("organisaties").addEventListener("click", scrollOrganisaties);
    document.getElementById("leiders").addEventListener("click", scrollLeiders);
    document.getElementById("afdelingen").addEventListener("click", scrollAfdelingen);

    riotImages();
};

function blmLogo() {
    document.querySelector(".blm-text-1").classList.add("visible-text");
    document.querySelector(".blm-text-2").classList.add("visible-text");
    document.querySelector(".blm-text-3").classList.add("visible-text");
    document.querySelector(".blm-text-4").classList.add("visible-text");
}
const scrollPosition = window.innerHeight;

function scrollOne() {
    window.scrollBy({top: scrollPosition, behavior: 'smooth'});
}

function scrollHome() {
    window.scrollTo({top: 0, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
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

function scrollRiot() {
    window.scrollTo({top: scrollPosition * 3, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

function scrollOptelsom() {
    window.scrollTo({top: scrollPosition * 4, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

function scrollBlm() {
    window.scrollTo({top: scrollPosition * 5, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

function scrollPatrisse() {
    window.scrollTo({top: scrollPosition * 7, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

function scrollOrganisaties() {
    window.scrollTo({top: scrollPosition * 8, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

function scrollLeiders() {
    window.scrollTo({top: scrollPosition * 9, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

function scrollAfdelingen() {
    window.scrollTo({top: scrollPosition * 10, behavior: 'smooth'});
    document.getElementById("checkbox").checked = false;
    console.log(scrollPosition);
}

function patriceText() {
    document.querySelector("#patrice-left").classList.toggle("opacity-0");
    document.querySelector("#patrice-right").classList.toggle("opacity-0");
}

function addAA() {
    document.getElementById('explanation').innerHTML = 'De anti-apartheidsbeweging was een internationale sociale beweging die zich keerde tegen de apartheid in Zuid-Afrika met name in de periode tussen ongeveer 1960 en 1994.';
}

function addFem() {
    document.getElementById('explanation').innerHTML = 'De Verenigde Staten in de woelige jaren zeventig. Een aantal vrouwen binnen de Afro-Amerikaanse bevrijdingsbeweging is al jaren ontevreden met de rol die hen is toegewezen. Ze voelen zich genegeerd door hun mannelijke strijdgenoten en gediscrimineerd door de vrouwonvriendelijke mentaliteit en rolverdelingen die er heersen.';
}

function addSncc() {
    document.getElementById('explanation').innerHTML = 'De Student Nonviolent Coordinating Committee (SNCC) was één der organisaties actief in de Afro-Amerikaanse Burgerrechtenbeweging (African-American Civil Rights Movement). De SNCC ontstond vanuit een aantal studentenbijeenkomsten onder leiding van Ella Baker in april 1960 aan de Shaw University in Raleigh, North Carolina.';
}

function addLeaders() {
    setTimeout(() => {  document.querySelector("#leader-1").classList.toggle("opacity-0"); }, 1000);
    // document.querySelector("#leader-1").classList.toggle("opacity-0");
    document.querySelector("#leader-2").classList.toggle("opacity-0");
    document.querySelector("#leader-4").classList.toggle("opacity-0");
    // document.querySelector("#leader-5").classList.toggle("opacity-0");
    setTimeout(() => {  document.querySelector("#leader-5").classList.toggle("opacity-0"); }, 1000);
    setTimeout(() => {  document.querySelector("#leader-protest").classList.toggle("opacity-0"); }, 2000);
}

function addFirstTranscriptLine() {
    document.querySelector("#trans-1").classList.remove("opacity-0");
}

function transcriptFloyd() {
    // document.querySelector(".transcript").style.display = "flex";

    setTimeout(() => {  document.querySelector("#trans-1").classList.remove("opacity-0"); }, 100);
    setTimeout(() => {  document.querySelector("#trans-2").classList.remove("opacity-0"); }, 2000);
    setTimeout(() => {  document.querySelector("#trans-3").classList.remove("opacity-0"); }, 4000);
    setTimeout(() => {  document.querySelector("#trans-4").classList.remove("opacity-0"); }, 6000);
    setTimeout(() => {  document.querySelector("#trans-5").classList.remove("opacity-0"); }, 8000);
    setTimeout(() => {  document.querySelector("#trans-6").classList.remove("opacity-0"); }, 10000);
    setTimeout(() => {  document.querySelector("#trans-7").classList.remove("opacity-0"); }, 12000);
    setTimeout(() => {  document.querySelector("#trans-8").classList.remove("opacity-0"); }, 14000);
    setTimeout(() => {  document.querySelector("#trans-9").classList.remove("opacity-0"); }, 16000);
    setTimeout(() => {  document.querySelector("#trans-10").classList.remove("opacity-0"); }, 18000);
    setTimeout(() => {  document.querySelector("#trans-11").classList.remove("opacity-0"); }, 20000);
    setTimeout(() => {  document.querySelector("#trans-12").classList.remove("opacity-0"); }, 22000);
    setTimeout(() => {  document.querySelector(".floyd-overleed").classList.remove("opacity-0"); }, 26000);

    setTimeout(() => {  document.querySelector("#trans-1").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-2").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-3").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-4").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-5").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-6").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-7").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-8").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-9").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-10").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-11").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector("#trans-12").classList.toggle("opacity-0"); }, 24000);
    setTimeout(() => {  document.querySelector(".floyd-overleed").classList.toggle("opacity-0"); }, 28000);
    setTimeout(function(){document.getElementById('p-1').classList.remove("opacity-0");},30000);
    setTimeout(function(){document.getElementById('p-1').classList.add("smoothUpTransition");},30000);
}

let counter = 0;

function optelsomPage() {
    if (counter == 0) {
            document.querySelector(".optelsom-1").classList.add("opacity-0");
            document.querySelector(".plus-1").classList.add("opacity-0");
            document.querySelector(".optelsom-2").classList.add("opacity-0");
            document.querySelector(".plus-2").classList.add("opacity-0");
            document.querySelector(".optelsom-3").classList.add("opacity-0");

        setTimeout(() => {
            document.querySelector(".optelsom-container").classList.remove("opacity-0");
        }, 500);
        setTimeout(() => {
            document.querySelector(".optelsom-title").classList.remove("opacity-0");
        }, 500);
        setTimeout(() => {
            document.querySelector(".optelsom-left-img").classList.remove("opacity-0");
        }, 500);
        setTimeout(() => {
            document.querySelector(".optelsom-right-img").classList.remove("opacity-0");
        }, 500);
        setTimeout(() => {
            document.querySelector(".optelsom-left-img").classList.add("optelsom-left-img-animation");
        }, 500);
        setTimeout(() => {
            document.querySelector(".optelsom-right-img").classList.add("optelsom-right-img-animation");
        }, 500);
        setTimeout(() => {
            document.querySelector(".optelsom-left-img").classList.add("opacity-0");
        }, 4000);
        setTimeout(() => {
            document.querySelector(".optelsom-right-img").classList.add("opacity-0");
        }, 4000);
        setTimeout(() => {
            document.querySelector(".optelsom-left-img").classList.remove("optelsom-left-img-animation");
        }, 7000);
        setTimeout(() => {
            document.querySelector(".optelsom-right-img").classList.remove("optelsom-right-img-animation");
        }, 7000);

        setTimeout(() => {
            document.querySelector(".optelsom-1").classList.remove("opacity-0");
        }, 7000);
        setTimeout(() => {
            document.querySelector(".plus-1").classList.remove("opacity-0");
        }, 7500);
        setTimeout(() => {
            document.querySelector(".optelsom-2").classList.remove("opacity-0");
        }, 8000);
        setTimeout(() => {
            document.querySelector(".plus-2").classList.remove("opacity-0");
        }, 8500);
        setTimeout(() => {
            document.querySelector(".optelsom-3").classList.remove("opacity-0");
        }, 9000);
        counter++;
    }
}

function afdelingenPage() {
    if (counter == 0) {
        for (let i = 0; i < 30; i++) {
            document.querySelector(".fists").innerHTML += '<img src="assets/img/fist.svg"' + 'class="fist-img opacity-0"' + ' id="fist-' + i + '"' + '>';
        }
        setTimeout(() => {document.querySelector("#fist-0").classList.remove('opacity-0')}, 100);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "1"}, 100);
        setTimeout(() => {document.querySelector("#fist-1").classList.remove('opacity-0')}, 100);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "2"}, 500);
        setTimeout(() => {document.querySelector("#fist-2").classList.remove('opacity-0')}, 500);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "3"}, 1000);
        setTimeout(() => {document.querySelector("#fist-3").classList.remove('opacity-0')}, 1000);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "4"}, 1500);
        setTimeout(() => {document.querySelector("#fist-4").classList.remove('opacity-0')}, 1500);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "5"}, 2000);
        setTimeout(() => {document.querySelector("#fist-5").classList.remove('opacity-0')}, 2000);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "6"}, 2200);
        setTimeout(() => {document.querySelector("#fist-6").classList.remove('opacity-0')}, 2200);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "7"}, 2400);
        setTimeout(() => {document.querySelector("#fist-7").classList.remove('opacity-0')}, 2400);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "8"}, 2600);
        setTimeout(() => {document.querySelector("#fist-8").classList.remove('opacity-0')}, 2600);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "9"}, 2800);
        setTimeout(() => {document.querySelector("#fist-9").classList.remove('opacity-0')}, 2800);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "10"}, 3000);
        setTimeout(() => {document.querySelector("#fist-10").classList.remove('opacity-0')}, 3000);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "11"}, 3100);
        setTimeout(() => {document.querySelector("#fist-11").classList.remove('opacity-0')}, 3100);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "12"}, 3200);
        setTimeout(() => {document.querySelector("#fist-12").classList.remove('opacity-0')}, 3200);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "13"}, 3300);
        setTimeout(() => {document.querySelector("#fist-13").classList.remove('opacity-0')}, 3300);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "14"}, 3400);
        setTimeout(() => {document.querySelector("#fist-14").classList.remove('opacity-0')}, 3400);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "15"}, 3500);
        setTimeout(() => {document.querySelector("#fist-15").classList.remove('opacity-0')}, 3500);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "16"}, 3600);
        setTimeout(() => {document.querySelector("#fist-16").classList.remove('opacity-0')}, 3600);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "17"}, 3700);
        setTimeout(() => {document.querySelector("#fist-17").classList.remove('opacity-0')}, 3700);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "18"}, 3800);
        setTimeout(() => {document.querySelector("#fist-18").classList.remove('opacity-0')}, 3800);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "19"}, 3900);
        setTimeout(() => {document.querySelector("#fist-19").classList.remove('opacity-0')}, 3900);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "20"}, 4000);
        setTimeout(() => {document.querySelector("#fist-20").classList.remove('opacity-0')}, 4000);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "21"}, 4100);
        setTimeout(() => {document.querySelector("#fist-21").classList.remove('opacity-0')}, 4100);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "22"}, 4200);
        setTimeout(() => {document.querySelector("#fist-22").classList.remove('opacity-0')}, 4200);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "23"}, 4300);
        setTimeout(() => {document.querySelector("#fist-23").classList.remove('opacity-0')}, 4300);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "24"}, 4400);
        setTimeout(() => {document.querySelector("#fist-24").classList.remove('opacity-0')}, 4400);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "25"}, 4500);
        setTimeout(() => {document.querySelector("#fist-25").classList.remove('opacity-0')}, 4500);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "26"}, 4600);
        setTimeout(() => {document.querySelector("#fist-26").classList.remove('opacity-0')}, 4600);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "27"}, 4700);
        setTimeout(() => {document.querySelector("#fist-27").classList.remove('opacity-0')}, 4700);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "28"}, 4800);
        setTimeout(() => {document.querySelector("#fist-28").classList.remove('opacity-0')}, 4800);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "29"}, 4900);
        setTimeout(() => {document.querySelector("#fist-29").classList.remove('opacity-0')}, 4900);
        setTimeout(() => {document.querySelector(".afdelingen-counter").innerHTML = "30"}, 4900);


        setTimeout(() => {document.querySelector("#fist-20").classList.toggle('bounce-animation')}, 5500);

        document.querySelector("#fist-20").addEventListener('click', openAfdelingenText);
        counter++;
    }
}

function openAfdelingenText() {
    document.querySelector(".afdelingen-text-container").classList.toggle('opacity-0');
    document.querySelector("#fist-20").classList.toggle('fist-20-background');
}

