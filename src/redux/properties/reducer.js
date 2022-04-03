import {defaultState} from "../defaultState";
import {FETCH_PROPERTIES, FETCH_PROPERTIES_ERROR, FETCH_PROPERTIES_SUCCESS} from "./actionTypes";
import produce from "immer";

export default function propertiesReducer(state = defaultState.properties, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_PROPERTIES: {
                draft.isLoading = true;
                break;
            }
            case FETCH_PROPERTIES_SUCCESS: {
                draft.isLoading = false;
                draft.items = action.payload;
                break;
            }
            case FETCH_PROPERTIES_ERROR: {
                draft.isLoading = false;
                draft.errors = action.payload;
                break;
            }
        }
    });

}
