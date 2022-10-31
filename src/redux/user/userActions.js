import { EDITING , SELECTED} from "./types";

export const EDITINGS = (isediting) => {
    return {
        type : EDITING,
        payload : isediting
    }
}

export const SELECTEDS = (selecting) => {
    return {
        type : SELECTED,
        payload : selecting
    }
}