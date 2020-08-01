import React from 'react';
import {useCounter} from "../assets/useCounter";

export const Counter = ({id, value, handleDelete}) => {

    const {count, handleMinus, handlePlus, handleReset} = useCounter(value);

    return (
        <div className="d-flex justify-content-between m-2">
            <div className="container d-flex justify-content-between">
                <button className="btn btn-outline-info m-1" onClick={handleMinus}>-{value}</button>
                <span className="h3 m-2">{count}</span>
                <button className="btn btn-outline-info m-1" onClick={handlePlus}>+{value}</button>
            </div>
            <div className="container d-flex justify-content-end">
                <button className="btn btn-info m-1" onClick={() => handleReset(id)}>RESET</button>
                <button className="btn btn-danger m-1" onClick={() => handleDelete(id)}>DELETE
                </button>

            </div>
        </div>
    );
};
