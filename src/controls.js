export function RowControl(arrayRow, allTable) {
    let arr = [];

    for(let index = 1;index <= 9;index++){
        arr.push(index);
    }

    let removedArray = arr.filter((item) => !arrayRow.includes(item))

    removedArray.forEach(item => {
        let foundZeroIndex = allTable[0].indexOf(0);
        if(foundZeroIndex != -1) {
            allTable[0][foundZeroIndex] = item;
        }
    });
    console.table("Last allTable",allTable);
}

export function ColumnControl(currentColumn, table) {
    
}

/* Take index of the row with the most clues */ 
export function RowWithMostClues(table) {
    let rowMostCluesIndex;
    let rowMostCluesCount;
    table.forEach((item,index) => {
        /* 0 means the cell is empty */
        let itemRowCluesCount = item.filter(x => x != 0).length;
        if(typeof rowMostCluesCount == "undefined" || (itemRowCluesCount > rowMostCluesCount)) {
            rowMostCluesCount = itemRowCluesCount;
            rowMostCluesIndex = index;
        }
    });
    return {
        index: rowMostCluesIndex,
        cluesCount: rowMostCluesCount,
        type: "row"
    };
}

/* Take index of the column with the most clues */ 
export function ColumnWithMostClues(table) {
    let columnMostCluesIndex;
    let columnMostCluesCount;

    /* I get how many columns it consists of */
    let tableColumnCount = table[0].length;
    for(let index = 0;index < tableColumnCount;index++) {
        let itemColumnCluesCount = table.map(x => x[index]).filter(x => x != 0).length;
        if(typeof columnMostCluesCount == "undefined" || (itemColumnCluesCount > columnMostCluesCount)) {
            columnMostCluesIndex = index;
            columnMostCluesCount = itemColumnCluesCount; 
        }
    }

    return {
        index: columnMostCluesIndex,
        cluesCount: columnMostCluesCount,
        type: "column"
    };
}