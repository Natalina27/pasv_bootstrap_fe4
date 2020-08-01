import React from 'react';
import {useCounter} from "../assets/useCounter";

export const Counter = ({id}) => {
console.log('Counter id', id);


    const { count, handleMinus, handlePlus, handleReset, handleDelete } = useCounter();

    return (
        <div className="list-group-item d-flex justify-content-between">
            <button className="btn btn-outline-info m-3" onClick={()=>handleMinus(id)}>-{}</button>
            <span className="h3 m-3">{count}</span>
            <button  className="btn btn-outline-info m-3" onClick={()=>handlePlus(id)}>+{}</button>
            <button  className="btn btn-info m-3" onClick={()=>handleReset(id)}>RESET</button>
            <button  className="btn btn-danger m-3" onClick={()=>handleDelete(id)}>DELETE</button>
        </div>
    );
};
