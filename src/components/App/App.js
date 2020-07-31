import React from 'react';
import {Counter} from "../Counters/Counters";

function App() {
    const x = 1, y = 10, rand = +(Math.random() * 10).toFixed();
    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className="font-weight-lighter">Counters</h1>
            <ul className="list-group mb-2">
                <Counter x={x}/>
                <Counter x={y}/>
                <Counter x={rand}/>
            </ul>
            <button className="btn btn-info mb-3">ADD COUNTER</button>
        </div>
    );
}

export default App;
