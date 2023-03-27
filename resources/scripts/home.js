'use strict';

const countImages = 49;
const imgRandArrNrs = new Array(countImages);

//check if number has been used in array
const notUsedIn = function (checkNum, inArray) {
    if (inArray.includes(checkNum)) {
        return false;
    } else {
        return true;
    }
}

//populate array with random unique numbers from 1 to parameter value
const populateImgRandArrNrs = function (imagesNr) {
    const arrNumsUsed = new Array(imagesNr);

    console.log(arrNumsUsed)

    for (let k = 0; k <= imagesNr - 1; k++) {
        let randNum = Math.ceil(Math.random() * countImages); //random number from 1 to countImages both included

        if (notUsedIn(randNum, arrNumsUsed)) {
            arrNumsUsed[k] = randNum; //now it was used
            imgRandArrNrs[k] = randNum; // add to array of random numbers
        } else {
            k--;//it needs to be done again since no NEW value was found
        };
    }
}

populateImgRandArrNrs(countImages);

//TEST IF EVERY VALUE EXISTS BUT IS RANDOM
// console.log(imgRandArrNrs);

// for (let k = 1; k <= 52; k++) {
//     console.log(imgRandArrNrs.includes(k));
// }

for (let k = (1 - 1); k <= (42 - 1); k++) {
    const image = document.getElementsByClassName('image')[k];

    //Link om te gerbuik vir free random images
    //https://picsum.photos/500?random=${k + 1}

    // image.setAttribute('src', `https://picsum.photos/500?random=${k + 1}`);

    image.setAttribute('src', `resources/images/${imgRandArrNrs[k + 1]}.jpg`);


    image.setAttribute('alt', `Image${k + 1}`);
}

const menuBtn = document.querySelector('.menu-btn');
const waterfall = document.querySelector('.container>.waterfall');
const navBar = document.querySelector(`.container>.nav-bar`)
let menuBtnClicks = 0;

menuBtn.onclick = function () {
    menuBtnClicks++;
    console.log(menuBtnClicks);
    navBar.classList.toggle('inactive');
    navBar.classList.toggle('active');

    if (menuBtnClicks % 2 === 0) {
        waterfall.style.margin = '3vw';
        waterfall.style.height = '97vh';
    } else {
        waterfall.style.margin = '3vh 3vw';
        waterfall.style.height = '70vh';
    }
}

const rightNavArrow = document.querySelector('.right-nav-arrow');
const leftNavArrow = document.querySelector('.left-nav-arrow');
const countNavLinkChildren = 7;

leftNavArrow.onclick = function () {
    for (let k = 1; k <= countNavLinkChildren; k++) {
        let navBarChild = document.querySelector(`.nav-bar::nth-child(${k}n)`);

        switch (k) {
            case 1: navBarChild.setAttribute('data-rank', `${0}`); break;
            case 2: navBarChild.setAttribute('data-rank', `${0}`); break;
            case 3: navBarChild.setAttribute('data-rank', `${1}`); break;
            case 4: navBarChild.setAttribute('data-rank', `${2}`); break;
            case 5: navBarChild.setAttribute('data-rank', `${3}`); break;
            case 6: navBarChild.setAttribute('data-rank', `${2}`); break;
            case 7: navBarChild.setAttribute('data-rank', `${1}`); break;
        }
    }
}
// rightNavArrow.onclickl = function () {
//     for (let k = 1; k <= 7/*hardcoded for now*/; k++) {
//         let navBarChild = document.querySelector(`.container>.nav-bar:nth-of-child${k}`);

//         if (navBarChild.datalist.rank <= 3) {
//             navBarChild.datalist.rank -= 1;
//         } else {
//             navBarChild.datalist.rank += 1;
//         }
//     }
// }
