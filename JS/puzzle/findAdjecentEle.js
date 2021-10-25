
export default function findAdjecentEle(puzzleArr, puzzleMap) {
    let fragMap = new Map();
    let adjecentXL, adjecentXR, adjecentYT, adjecentYB, adjecentX, adjecentY = null;
    let arr = [];
    puzzleArr.forEach((item) => {
        arr = [];
        adjecentXL = item[0] - 1;
        adjecentXR = item[0] + 1;
        adjecentYT = item[1] + 1;
        adjecentYB = item[1] - 1;
        adjecentX = [adjecentXL, adjecentXR];
        adjecentY = [adjecentYT, adjecentYB];
        //寻找x轴的临近元素
        adjecentX.forEach(itemx => {
            if (puzzleMap.has([itemx, item[1]].toString())) {
                arr.push([itemx, item[1]]);
            }
        })
        // 寻找y轴临近的元素
        adjecentY.forEach(itemy => {
            if (puzzleMap.has([item[0], itemy].toString())) {
                arr.push([item[0], itemy]);
            }
        })
        fragMap.set(item.toString(), arr);
    })
    return fragMap;
}