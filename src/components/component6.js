import React from 'react';


function Component6() {

    function add() {
        setNumbers([...numbers, text])
        setText('')
    }
    //отрисовка списка
    let [text, setText] = React.useState('')
    let [numbers, setNumbers] = React.useState([])
    let listNumbers = numbers.map((number)=><li>{number}</li>)//
    
    return (
        <div className="App">
            {listNumbers}
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={add}>+</button>
        </div>
    );
}


export default Component6;