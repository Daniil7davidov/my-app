import React from 'react';

function ListItem(props) {

    function remove(){
        console.log(props.text)
        console.log(props.idx)
        props.remove(props.idx)
    }
    
    return (
        <div className="App">
            <span>{props.text}</span>
            <button onClick={remove}>X</button>
        </div>
    );
}

function Component7() {

    function add() {
        setNumbers([...numbers, text])
        setText('')
    }

    function remove(idx){
        numbers.splice(idx, 1)
        setNumbers([...numbers])
    }
    //отрисовка списка
    let [text, setText] = React.useState('')
    let [numbers, setNumbers] = React.useState(["potato", "orange"])
    let listNumbers = numbers.map((number, idx)=><ListItem text={number} idx={idx} remove={remove}/>)
    
    return (
        <div className="App">
            {listNumbers}
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={add}>+</button>
        </div>
    );
}


export default Component7;
