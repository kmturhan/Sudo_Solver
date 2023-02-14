import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("test",event)
    event.target[1].value = 9999;
  }

  return (
    <form className='table' onSubmit={handleSubmit}>
        <h1>SUDO-SOLVER</h1>
        <div className='table-wrapper'>
          <div className='table-row'>
            {(() => {
              const arr = [];
              for (let index = 1; index < 9; index++) {
                arr.push(
                  <input key={"row1"+index} inputMode='numeric' type="number" className={`table-row-cell table-row1-cell-${index}`} onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()} onChange={(e) => setName(e.target.value)}></input>
                );
              }
              return arr;
            })()}
          </div>
          <div className='table-row'>
          {(() => {
              const arr = [];
              for (let index = 1; index < 9; index++) {
                arr.push(
                  <input key={"row1"+index} inputMode='numeric' type="number" className={`table-row-cell table-row2-cell-${index}`} onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()} onChange={(e) => setName(e.target.value)}></input>
                );
              }
              return arr;
            })()}
          </div>
          <div className='table-row'>
          {(() => {
              const arr = [];
              for (let index = 1; index < 9; index++) {
                arr.push(
                  <input key={"row1"+index} inputMode='numeric' type="number" className={`table-row-cell table-row3-cell-${index}`} onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()} onChange={(e) => setName(e.target.value)}></input>
                );
              }
              return arr;
            })()}
          </div>
        </div>
        <button type='submit'>test</button>
      </form>

  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyForm />);