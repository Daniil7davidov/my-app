import React from 'react';


function App() {

    function add() {
        setNumbers([...numbers, text])
        setText('')
    }
    //отрисовка списка
    let [text, setText] = React.useState('')
    let [numbers, setNumbers] = React.useState([1, 2, 3, 4, 5, 6])
    let listNumbers = numbers.map((number)=><li>{number}</li>)
    
    return (
        <div className="App">
            {listNumbers}
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={add}>+</button>
        </div>
    );
}


export default App;
