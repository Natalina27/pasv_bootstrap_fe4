import React from 'react';
import {useCounter} from "../assets/useCounter";

export const Counter = ({id, value, handleDelete}) => {

    const { count, handleMinus, handlePlus, handleReset } = useCounter(value);

    return (
        <div className="list-group-item d-flex justify-content-between">
            <button className="btn btn-outline-info m-3" onClick={handleMinus}>-{value}</button>
            <span className="h3 m-3">{count}</span>
            <button  className="btn btn-outline-info m-3" onClick={handlePlus}>+{value}</button>
            <button  className="btn btn-info m-3" onClick={()=>handleReset(id)}>RESET</button>
            <button  className="btn btn-danger m-3" onClick={()=>handleDelete(id)}>DELETE</button>
        </div>
    );
};
