const victorySound = document.querySelector("#victory");
const dialogBox = document.querySelector(".puzzle .shadow");
const dialogBoxBtn = document.querySelector(".puzzle .shadow .dialogBox button");
const gameTime = document.querySelector(".gameTime .time");
const gameSteps = document.querySelector(".gameSteps .steps");
dialogBoxBtn.addEventListener("click", () => {
    dialogBox.classList.remove("roll-in-blurred-left");
})
export default function getVictory(fragments) {
    let vCount = 0; // 如果所有拼图对上的话 则胜利
    let result = null;;
    fragments.forEach((item, index) => {
        // 空出最后一个空格
        if (index < 8) {
            let lastLetter1 = item.classList[0].charAt(item.classList[0].length - 1);
            let lastLetter2 = item.classList[1].charAt(item.classList[1].length - 1);
            if (lastLetter1 === lastLetter2) {
                vCount++;
            }
            if (vCount === 8) {
                result = "victory";
                dialogBox.classList.add("roll-in-blurred-left");
                victorySound.play();
            }
        }
    })
    return result;
}