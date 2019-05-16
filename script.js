// jshint esversion:6
// Løsningsforslag - Eksamen H17 - Tom Jarle Christiansen V18
// Globals

const bilder = ['Lan.jpg', 'Rasmus.jpg', 'Une.jpg'];
const mdglyd = new Audio('lyd/Night-owl.mp3');
let kjører = false; // Kjører bildekarusellen? (Flagg)
let karusell;

// Hent elemeneter
const mdgElement = document.querySelector('.MDG');
const spElement = document.querySelector('.SP')
const appElement = document.querySelector('#appBoks');

// Lyttere
mdgElement.addEventListener('click', mdgslide);
spElement.addEventListener('click', spFilm);

// Funksjoner
// Bildekarusellen for MDG
function mdgslide(){
    mdglyd.play();
    mdglyd.loop = true;
    let bildeNr = 0;

    appElement.innerHTML = `<img src="bilder/mdg-slides/${bilder[bildeNr]}">`;
    bildeNr++;

    if (!kjører) {
        kjører = true;
        karusell = setInterval(function (){
            appElement.innerHTML = `<img src="bilder/mdg-slides/${bilder[bildeNr]}">`;
            if (bildeNr == bilder.length - 1){
                bildeNr = 0;
            }
            else{
                bildeNr++;
            }
        }, 2000);
    }
    else {
        // Stopper bildcekarusellen
        mdglyd.pause();
        kjører = false;
        clearInterval(karusell);
    }
}

function spFilm(){
    // Stopper mdg-bildcekarusellen
    mdglyd.pause();
    kjører = false;
    clearInterval(karusell);

    let filmElement = `
    <video width="320" height="240" controls autoplay>
        <source src="./film/senterpartiet.mp4" type="video/mp4">
    Your browser does not support the video tag.
    </video>
    `;
    appElement.innerHTML = filmElement;
}