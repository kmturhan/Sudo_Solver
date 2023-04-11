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
    let rowMostClues;
    table.forEach((item,index) => {
        /* 0 means the cell is empty */
        let itemRowCluesCount = item.filter(x => x != 0).length;
        if(typeof rowMostClues == "undefined" || (itemRowCluesCount > rowMostClues)) {
            rowMostClues = index;
        }
    });
    return rowMostClues;
}

/* Take index of the column with the most clues */ 
export function ColumnWithMostClues(table) {
    let columnMostClues;
    /* I get how many columns it consists of */
    let tableColumnCount = table[0].length;
    for(let index = 0;index < tableColumnCount;index++) {
        let itemColumnCluesCount = table.map(x => x[index]).filter(x => x != 0).length;
        if(typeof columnMostClues == "undefined" || (itemColumnCluesCount > columnMostClues)) {
            columnMostClues = index;
        }
    }
    return columnMostClues;
}

const arrayColumn = (arr, n) => arr.map(x => x[n]);