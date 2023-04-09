export function RowControl(arrayRow, allTable) {
    console.log("Controls : ",arrayRow);
    let arr = [];

    for(let index = 1;index <= 9;index++){
        arr.push(index);
    }

    console.log("test", arr);
    console.log("arrayRow", arrayRow);

    let removedArray = arr.filter((item) => !arrayRow.includes(item))
    
    console.log("test2",removedArray);
    //allTable[0][3] = 3333;
    console.table("Controls", arrayRow);

    removedArray.forEach(item => {
        let foundZeroIndex = allTable[0].indexOf(0);
        if(foundZeroIndex != -1) {
            allTable[0][foundZeroIndex] = item;
        }
    });
    console.table("Last allTable",allTable[0]);
}