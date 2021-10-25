export default function createPuzzleArr() {
    let puzzleArr = [];
    for (let y = 1; y <= 3; y++) {
        for (let x = 1; x <= 3; x++) {
            puzzleArr.push([x, y]);
        }
    }
    return puzzleArr;
}