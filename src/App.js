import React from 'react';

import firebase from "firebase";

import ListItem from './ListItem';

function App() {

    function add() {
        let db = firebase.firestore();
        db.collection('todos').add({'todo': text})
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


export default App;
