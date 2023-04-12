export function RowControl(arrayRow, table,event) {
    let arr = [];
    let rowToProcessInfo = ColumnControl(table);
    for(let index = 1;index <= 9;index++){
        arr.push(index);
    }


    let removedArray = arr.filter((item) => !table[rowToProcessInfo.index].includes(item))

    removedArray.forEach(item => {
        let foundZeroIndex = table[0].indexOf(0);
        if(foundZeroIndex != -1) {
            table[0][foundZeroIndex] = item;
        }
    });
    console.table("Last table",table);
    ArrayToPlace(event, table);
}

export function ArrayToPlace(event, table) {
    for (let row = 1; row <= 9; row++) {
        for (let column = 1; column <= 9; column++) {
            document.getElementById(`cell-${row}-${column}`).value = table[row-1][column-1];        
        }
    }
}

export function ColumnControl(table) {
    let rowCluesResult = RowWithMostClues(table);
    let columnCluesResult = ColumnWithMostClues(table);
    console.log("ROW : ",rowCluesResult);
    console.log("Column : ",columnCluesResult);
    if(rowCluesResult.cluesCount >= columnCluesResult.cluesCount) {
        return rowCluesResult;//table[rowCluesResult.index];
    }
    else {
        return columnCluesResult;//table.map(x => x[columnCluesResult.index]);
    }
}

/* Take index of the row with the most clues */ 
function RowWithMostClues(table) {
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
function ColumnWithMostClues(table) {
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