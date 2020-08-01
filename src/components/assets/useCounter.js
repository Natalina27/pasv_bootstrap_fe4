import {useState} from "react";
import {_reset} from "./_reset";
import {_decrease} from "./_decrease";
import {_increase} from "./_increase";
import {_addCounter} from "./_addCounter";
import {_deleteCounter} from "./_deleteCounter";
import {v4 as uuid} from 'uuid';

export const useCounter = (value) => {

    const rand = +(Math.random() * 10).toFixed();

    const initialList = [
        {id: uuid(), value: 1},
        {id: uuid(), value: 10},
        {id: uuid(), value: rand},
    ];

    const [count, setCount] = useState(0);
    const [list, setList] = useState(initialList);

    const handleMinus = () => setCount(_decrease(count, value));

    const handlePlus = () => setCount(_increase(count, value));

    const handleReset = () => setCount(_reset);

    const handleAddCounter = () => setList(_addCounter(list, rand));

    const handleDelete = (id) => setList(_deleteCounter(id, list));

    return {
        count,
        list,
        handlePlus,
        handleMinus,
        handleReset,
        handleDelete,
        handleAddCounter
    }

}
