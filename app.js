const THUMBAILS = document.querySelectorAll(".thumbail img");
const POPUP = document.querySelector(".popup");
const POPUP_CLOSE = document.querySelector(".popup__close");
const POPUP_IMG = document.querySelector(".popup__img");
const ARROW_LEFT = document.querySelector(".popup__arrow--left");
const ARROW_RIGHT = document.querySelector(".popup__arrow--right");

let currentImgIndex;

const showNextImg =  () => {
    if (currentImgIndex === THUMBAILS.length -1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex++;
    }
    POPUP_IMG.src = THUMBAILS[currentImgIndex].src;

};

const showPreviousImg = () => {
    if (currentImgIndex ===  0) {
        currentImgIndex = THUMBAILS.length -1;
    } else {
        currentImgIndex--;
    }
    POPUP_IMG.src = THUMBAILS[currentImgIndex].src;

};

const closePopup = () => {
    POPUP.classList.add("fade-out");
    setTimeout (() => {
        POPUP.classList.add("hidden");
        POPUP.classList.remove("fade-out");
        THUMBAILS.forEach(element => {
            element.setAttribute("tabindex", 1);
        });
    }, 300);
};

THUMBAILS.forEach((thumbail, index) => {
    const showPopup =  (e) => {
        POPUP.classList.remove("hidden");
        POPUP_IMG.src = e.target.src;
        currentImgIndex = index;
        THUMBAILS.forEach(element => {
            element.setAttribute("tabindex", -1);
        });
    };
    thumbail.addEventListener("click", showPopup);
    

    thumbail.addEventListener("keydown", (e) => {
        if (e.code === "Enter") {
            showPopup(e);

        }
    })

});

POPUP_CLOSE.addEventListener("click", closePopup);


ARROW_RIGHT.addEventListener("click", showNextImg);


ARROW_LEFT.addEventListener("click", showPreviousImg);

document.addEventListener("keydown", (e) => {
 if (!POPUP.classList.contains("hidden")) {
    if (e.key === "ArrowRight") {
        showNextImg();
    }

    if (e.code ==="ArrowLeft") {
        showPreviousImg();
    }

    if (e.code === "Escape") {
        closePopup();
    }
}

});

POPUP.addEventListener("click", (e) => {
if (e.target === POPUP) {
    closePopup();
    }

});

