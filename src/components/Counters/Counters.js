import React from 'react';
import {useCounter} from "../assets/useCounter";

export const Counter = ({x}) => {

    const { count,  handleMinus, handlePlus, handleReset } = useCounter(x);

    return (
        <div className="list-group-item d-flex justify-content-between">
            <button className="btn btn-outline-info m-3" onClick={handleMinus}>-{x}</button>
            <span className="h3 m-3">{count}</span>
            <button  className="btn btn-outline-info m-3" onClick={handlePlus}>+{x}</button>
            <button  className="btn btn-info m-3" onClick={handleReset}>RESET</button>
        </div>
    );
};
