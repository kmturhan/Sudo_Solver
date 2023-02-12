import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}



class Table extends React.Component {
  render() {
    function handleSubmit(e) {
      // Prevent the browser from reloading the page
      e.preventDefault();

      // Read the form data
      const form = e.target;
      const formData = new FormData(form);

      // You can pass formData as a fetch body directly:
      fetch('/some-api', { method: form.method, body: formData });

      // Or you can work with it as a plain object:
      const formJson = Object.fromEntries(formData.entries());
      console.log(formJson);
    }
    return (

      <div className='table' onSubmit={handleSubmit}>
        <h1>SUDO-SOLVER</h1>
        <div className='table-wrapper'>
          <div className='table-row'>
            {(() => {
              const arr = [];
              for (let index = 1; index < 9; index++) {
                arr.push(
                  <input inputMode='numeric' type="number" className={`table-row-cell table-row-cell-${index}`} onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
                );
              }
              return arr;
            })()}


            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
          </div>
          <div className='table-row'>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
          </div>
          <div className='table-row'>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
            <input inputMode='numeric' type="number" className='table-row-cell' onKeyDown={(evt) => evt.key === 'e' && evt.preventDefault()}></input>
          </div>
        </div>
      </div>
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Table />);