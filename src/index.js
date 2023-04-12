import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RowControl, ColumnWithMostClues, RowWithMostClues, ColumnControl, ArrayToPlace, functionCall} from './controls.js';
function IsEmptyCellDefineZero(value) {
  if(value == "" || value == "undefined") {
    return 0;
  }
  else {
    return value;
  }
}

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("test",event);
    //ArrayToPlace(event);
    let rows = 9;
    let cols = 9;
    let defaultValue = 50;

    let table = Array(rows).fill([]).map((x) => x = Array(cols).fill(defaultValue));
    window.test = table;
    [...event.target].forEach(element => {
      try {
        table[element.dataset.row - 1][element.dataset.column - 1] = parseInt(IsEmptyCellDefineZero(element.value));  
      } catch (error) {
        console.log("test", element.dataset.row , element.dataset.column);
      } 
      console.log(element.value);
      console.log(`cell-${element.dataset.row}-${element.dataset.column}`)
    });
    console.table(table);
    let selectedArray = ColumnControl(table);
    console.log(selectedArray);
    RowControl(table[0], table, event);
    //ArrayToPlace(table);
    
  }

  return (
    <form className='table' onSubmit={handleSubmit}>
        <h1>SUDO-SOLVER</h1>
        <div className='table-wrapper'>
            {(() => {
              const arr = [];
              let allInputsHtml = [];
              for(var row = 1; row <= 9; row++) {
                let blocksInputList = [];
                let sectionLimit3 = 1;
                let sectionIndex = 1;
                for (let column = 1; column <= 9; column++) {
                  blocksInputList.push(
                   <input id={`cell-${row}-${column}`} key={`test-${row}-${column}`} data-row={row} data-column={column} inputMode='numeric' type="number" className={`table-row-cell table-section-${sectionIndex} table-row-${row}`} onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()} onChange={(e) => setName(e.target.value)}></input>
                  );
                  if(sectionLimit3 < 3) {
                    sectionLimit3++;
                  }
                  else {
                    sectionLimit3 = 1;
                    sectionIndex++;
                  }
                }
                allInputsHtml.push(<div id={`table${row}`} key={`table${row}`} className='table-row'>{blocksInputList}</div>);
              }
              return allInputsHtml;
            })()}
        </div>
        <button type='submit'>SOLVE</button>
      </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);