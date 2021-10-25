import getVictory from "./getVictory.js"
export default function changeLocation(firstSelected, secondSelected, fragments) {
    let tempClass = null;
    let result = null;
    if (firstSelected !== secondSelected) {
        tempClass = firstSelected.classList[1];
        firstSelected.classList.remove(firstSelected.classList[1]);
        firstSelected.classList.add(secondSelected.classList[1]);
        secondSelected.classList.remove(secondSelected.classList[1]);
        secondSelected.classList.add(tempClass);
        result = getVictory(fragments);
    }
    if (result === "victory") return true;
    return false;
}