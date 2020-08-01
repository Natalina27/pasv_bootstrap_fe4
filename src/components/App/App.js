import React from 'react';
import {Counter} from "../Counters/Counters";
import {useCounter} from "../assets/useCounter";

function App() {

    const { list, count, handleDelete, handleMinus, handlePlus, handleReset, handleAddCounter} = useCounter();

    return (
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className="font-weight-lighter">Counters</h1>
            <div className="d-flex flex-column justify-content-between">
                {list.map(el => (
                    <Counter
                        key={el.id}
                        id={el.id}
                        count={count}
                        value={el.value}
                        handleDelete={handleDelete}
                        handleMinus={handleMinus}
                        handlePlus={handlePlus}
                        handleReset={handleReset}
                    />
                    ))}
            </div>
            <button className="btn btn-info mb-3" onClick={handleAddCounter}>ADD COUNTER</button>
        </div>
    );
}

export default App;
