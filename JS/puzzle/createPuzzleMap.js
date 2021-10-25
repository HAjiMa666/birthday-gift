export default function createPuzzleMap() {
    let fragMap = new Map();
    let i = 0;
    for (let y = 1; y <= 3; y++) {
        for (let x = 1; x <= 3; x++) {
            i++;
            fragMap.set([x, y].toString(), i);
        }
    }
    return fragMap;
}
