import React from 'react';
import {useCounter} from "../assets/useCounter";

export const Counter = ({x}) => {

    const { count,  handleMinus, handlePlus, handleReset } = useCounter(x);
    console.log('count', count);

    return (
        <div>
            <button onClick={handleMinus}>-{x}</button>
            <div>{count}</div>
            <button  onClick={handlePlus}>+{x}</button>
            <button  onClick={handleReset}>RESET</button>
        </div>
    );
};
