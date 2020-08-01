import {v4 as uuid} from "uuid";

export const _addCounter = (list, num) => [...list,{"id": uuid(), "value": num}];
