import { blessWord } from "./localData.js"
const dialogBox = document.querySelector(".letter .dialogBox");
const btn = document.querySelector(".letter .dialogBox button");
const word = document.querySelector(".letter .blessWord");



let letterCount = 0;
btn.addEventListener("click", () => {
    dialogBox.classList.add("puff-out-center");
    word.classList.add("tracking-in-contract-bck");
    word.textContent = blessWord[0];
    setTimeout(() => {
        removeBlessWord();
    }, 3000)
})
function changeBlessWord() {
    console.log("计数:", letterCount);
    word.textContent = blessWord[letterCount];
    word.classList.remove("text-blur-out");
    word.classList.add("tracking-in-contract-bck");
    setTimeout(() => {
        removeBlessWord();
    }, 3000);
}

function removeBlessWord() {
    word.classList.remove("tracking-in-contract-bck");
    word.classList.add("text-blur-out");
    letterCount++;
    if (letterCount === blessWord.length) {
        word.classList.remove("text-blur-out");
        letterCount = 0;
        removeBlessWord = null;
        changeBlessWord = null;
        blessWord.forEach(item => {
            word.insertAdjacentHTML("afterbegin", `<span>${item}</sapn> 。`);
        })
        return;
    }
    setTimeout(() => {
        changeBlessWord();
    }, 1200);
}





