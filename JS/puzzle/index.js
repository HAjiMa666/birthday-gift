import createPuzzleMap from "./createPuzzleMap.js";
import createPuzzleArr from "./createPuzzleArr.js";
import changeLocation from "./changeLocation.js";
import findAdjecentEle from "./findAdjecentEle.js";
import randomFrag from "./randomFrag.js"
import puzzlePicUrl from "../localData.js";



const fragments = document.querySelectorAll("div[class^='fragment']");  // 选中九宫格所有的格子
let whiteFragment = document.querySelector(".whiteFrag");  // 单独选中最后一个空白格子
const puzzle = document.querySelector(".puzzle");  // 选中拼图整体
const puzzleMap = createPuzzleMap();  // 创建拼图映射
const puzzleArr = createPuzzleArr(); // 创建拼图方盘

const randomArr = randomFrag();
const fragClasses = [
    "fragment-1",
    "fragment-2",
    "fragment-3",
    "fragment-4",
    "fragment-5",
    "fragment-6",
    "fragment-7",
    "fragment-8",
    "whiteFrag"
];
const fragmentsMap = new Map();
const fragMap = findAdjecentEle(puzzleArr, puzzleMap); // fragMap是放入了所有的节点的临近节点
// 将所有的拼图对应序号
fragments.forEach((item, index) => {
    fragmentsMap.set(item, puzzleArr[index].toString());
})
// 随机拼图
function reRandomPuzzle(randomArr) {
    let i = 0;
    recoverArr = [];
    fragments.forEach(item => {
        item.classList.remove(item.classList[1]);
    })
    if (randomArr) {
        randomArr.forEach(fragClass => {
            fragments[i].classList.add(fragClasses[fragClass]);
            recoverArr.push(fragClasses[fragClass]);
            i++;
        })
        fragments[8].classList.add(fragClasses[8]);
    }
}

let firstSelected = null;
let secondSelected = null;
let steps = 0;
let timer = null;
puzzle.addEventListener("click", (e) => {
    firstSelected = e.target;
    whiteFragment = document.querySelector(".whiteFrag");
    if (whiteFragment) {
        const whileFragmentAdj = fragMap.get(fragmentsMap.get(whiteFragment)); // 白色格子的邻近元素
        whileFragmentAdj.forEach(item => {
            if (fragmentsMap.get(firstSelected) === item.toString()) {
                secondSelected = whiteFragment;
                let result = changeLocation(firstSelected, secondSelected, fragments);
                console.log(result);
                if (!result) {
                    steps++;
                    gameSteps.textContent = steps;
                } else {
                    console.log("游戏胜利");
                    gameSteps.textContent = 0;
                    clearInterval(timer);
                    gameTime.textContent = 0;
                }
            }
        })
    }
})

let recoverArr = [];
const reRandomBtn = document.querySelector(".reRandom");
const startGameBtn = document.querySelector(".start");
const recoverBtn = document.querySelector(".recover");
const gameTime = document.querySelector(".gameTime .time");
const gameSteps = document.querySelector(".gameSteps .steps");
reRandomBtn.addEventListener("click", () => {
    clearInterval(timer);
    steps = 0;
    gameSteps.textContent = steps;
    let i = 0;
    timer = setInterval(() => {
        i++;
        gameTime.textContent = `${i} s`;
    }, 1000);
    reRandomPuzzle(randomArr);
})
recoverBtn.addEventListener("click", (e) => {
    e.stopImmediatePropagation();
    let i = 0;
    fragments.forEach(item => {
        item.classList.remove(item.classList[1]);
    })
    recoverArr.forEach(item => {
        fragments[i].classList.add(item);
        i++;
    })
    fragments[8].classList.add(fragClasses[8]);
})

startGameBtn.addEventListener("click", () => {
    reRandomBtn.click();
})

const changePicBtn = document.querySelector(".changePic");
const allFragmentsPic = document.querySelectorAll(".puzzle .game div[class^=fragment]");
const smallPic = document.querySelector(".smallPic");
changePicBtn.addEventListener("click", () => {
    gameSteps.textContent = 0;
    clearInterval(timer);
    gameTime.textContent = 0;
    let num = Math.floor(Math.random() * puzzlePicUrl.length);
    console.log(num);
    smallPic.style.backgroundImage = `url(${puzzlePicUrl[num]})`
    allFragmentsPic.forEach(item => {
        item.style.backgroundImage = `url(${puzzlePicUrl[num]})`
    })
})






