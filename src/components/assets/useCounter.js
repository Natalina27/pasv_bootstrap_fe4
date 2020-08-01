import  {useState} from "react";
import {_reset} from "./_reset";

export const useCounter =()=>{

    const rand = +(Math.random() * 10).toFixed();

    const initialList = [
        {"id": 1, "value": 1},
        {"id": 2, "value": 10},
        {"id": 3, "value": rand},
    ];

    const [count, setCount] = useState(0);
    const [list, setList] = useState(initialList);

    const handleAddCounter =() => {
        const newList = [...list,{"id": list.length += 1, "key": "id",  "value": rand}];
         setList(newList);
    }


    const handleMinus = (id) => {
        const idx =[...list].findIndex((el) => el.id === id);
        setCount(count - list[idx].value);
    }

    const handlePlus = (id) => {
        console.log('list', list);

        //const idx =list.findIndex(el => console.log(el.id));
        //console.log('idx', idx);
        //console.log('list[idx].value', list[idx].value);


        //setCount(count + list[idx].value);
    }

    const handleReset = () => setCount(_reset)

    const handleDelete =(id, list) => {
        const idx =[...list].findIndex((el) => el.id === id);
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
