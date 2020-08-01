import  {useState} from "react";
import {_reset} from "./_reset";
import {_decrease} from "./_decrease";
import {_increase} from "./_increase";
import { v4 as uuid } from 'uuid';

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

    const handleAddCounter =() => {
        const newList = [...list,{"id": uuid(), "value": rand}];
        setList(newList);
    }

    const handleDelete =(id) => {
        const idx =list.findIndex((el) => el.id === id);
        const newList =  [
            ...list.slice(0, idx),
            ...list.slice(idx + 1)
        ];
        setList(newList);
    }

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
