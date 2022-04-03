import {FETCH_COMMENTS, FETCH_PROPERTY} from "./actionTypes";

export function fetchProperty(id){
    return {
        type: FETCH_PROPERTY,
        payload: id
    }
}


