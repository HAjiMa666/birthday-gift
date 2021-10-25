const shadow = document.querySelector(".shadow");
const diaBtn = document.querySelector(".dialogBox button");
const diaText = document.querySelector(".dialogBox span");
const body = document.querySelector("body");
const mainMelody = document.querySelector("#MainMelody");
let diaCount = 0; // 提示框的信息

const bless = document.querySelector(".bless");
let blessName = "妈妈".matchAll(/\S/g);
let blessWord = "祝你生日快乐".matchAll(/\S/g);

for (const word of blessName) {
    bless.insertAdjacentHTML("beforeend", `<div>${word}</div>`)
}
for (const word of blessWord) {
    bless.insertAdjacentHTML("beforeend", `<div>${word}</div>`)
}
const blessText = document.querySelectorAll(".bless div");
const pics = document.querySelectorAll(".scrollPic div[class^='pic']");

blessText.forEach((item, index) => {
    item.addEventListener("click", () => {
        let animationStart = true;
        item.classList.toggle("text-pop-up-top");
        blessText.forEach(item => {
            item.style.pointerEvents = "none";
        })
        item.addEventListener("animationend", () => {
            blessText.forEach(item => {
                item.style.pointerEvents = "all";
            })
            pics[index].classList.add("pic-scroll");
            animationStart = false;
        })
        setTimeout(() => {
            animationStart === true && blessText.forEach(item => {
                item.style.pointerEvents = "all";
            })
        }, 1000);
    })
})

let isScroll = false; //提示框没有关闭之前 不能滚动页面
if (isScroll === false) {
    body.style.overflowY = "hidden"
}
diaBtn.addEventListener("click", () => {
    diaCount++;
    diaText.textContent = "妈妈,接下来您需要把鼠标移动到生日祝福进行点击";
    diaCount === 2 && shadow.classList.add("puff-out-center");
    if (diaCount === 2) {
        body.style.overflowY = "auto"
        mainMelody.play();
    };
})

