import React from 'react';
import {Counter} from "../Counters/Counters";

function App() {
    const x = 1, y = 10, rand = +(Math.random() * 10).toFixed();
    return (
        <div className="container">
            <Counter x={x}/>
            <Counter x={y}/>
            <Counter x={rand}/>
            <button>ADD COUNTER</button>
        </div>
    );
}

export default App;
