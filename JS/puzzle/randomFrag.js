export default function randomFrag() {
    let randomArr = [];
    while (randomArr.length !== 8) {
        let randomNum = Math.floor(Math.random() * 8);
        if (randomArr.findIndex(item => item === randomNum) < 0) {
            randomArr.push(randomNum);
        }
    }
    let count = 0;
    for (let i = 0; i < randomArr.length; i++) {
        for (let j = i + 1; j < randomArr.length; j++) {
            if (randomArr[i] > randomArr[j]) {
                count++;
            }
        }
    }
    console.log(count);
    if (count % 2 !== 0) return randomFrag();
    return randomArr;
}