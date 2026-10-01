const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const successMessage = document.getElementById("successMessage");

const question = document.querySelector(".question");
const buttonArea = document.querySelector(".button-area");


// -----------------------------------------
// YES BUTTON
// -----------------------------------------

yesButton.addEventListener("click", () => {

    question.classList.add("hidden");
    buttonArea.classList.add("hidden");

    successMessage.classList.remove("hidden");

});


// -----------------------------------------
// MOVE THE NO BUTTON
// -----------------------------------------

function moveNoButton() {

    const areaWidth = buttonArea.clientWidth;
    const areaHeight = buttonArea.clientHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Maximum possible positions
    const maxX = areaWidth - buttonWidth;
    const maxY = areaHeight - buttonHeight;

    // Generate random position
    let randomX =
        Math.floor(Math.random() * maxX);

    let randomY =
        Math.floor(Math.random() * maxY);


    // Keep a little distance from the Yes button
    const yesRect = yesButton.getBoundingClientRect();
    const areaRect = buttonArea.getBoundingClientRect();

    const yesX =
        yesRect.left - areaRect.left;

    const yesY =
        yesRect.top - areaRect.top;


    const distance = Math.sqrt(
        Math.pow(randomX - yesX, 2) +
        Math.pow(randomY - yesY, 2)
    );


    // If too close to Yes button,
    // generate another position
    if (distance < 100) {

        randomX =
            Math.floor(Math.random() * maxX);

        randomY =
            Math.floor(Math.random() * maxY);
    }


    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}


// -----------------------------------------
// DESKTOP
// -----------------------------------------

noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


// -----------------------------------------
// MOBILE / TOUCH DEVICES
// -----------------------------------------

noButton.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();
    }
);


// -----------------------------------------
// EXTRA SAFETY
// -----------------------------------------
// Even if a click somehow occurs,
// don't allow the No action.

noButton.addEventListener("click", (event) => {

    event.preventDefault();

    moveNoButton();

});

// -----------------------------------------
// INITIAL NO BUTTON POSITION
// -----------------------------------------

function setInitialPosition() {

    const areaWidth = buttonArea.clientWidth;

    const buttonWidth = noButton.offsetWidth;

    const initialX =
        Math.max(
            0,
            (areaWidth / 2) + 20
        );

    noButton.style.left = `${initialX}px`;

    noButton.style.top = "50%";

    noButton.style.transform =
        "translateY(-50%)";
}

setInitialPosition();

window.addEventListener(
    "resize",
    setInitialPosition
);


// Recalculate on screen resize
window.addEventListener(
    "resize",
    setInitialPosition
);