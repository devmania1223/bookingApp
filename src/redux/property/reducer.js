import {defaultState} from "../defaultState";
import {
    FETCH_COMMENTS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_SUCCESS,
    FETCH_PROPERTY,
    FETCH_PROPERTY_ERROR,
    FETCH_PROPERTY_SUCCESS
} from "./actionTypes";
import produce from "immer";

export default function propertyReducer(state = defaultState.property, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_PROPERTY: {
                draft.isLoading = true;
                break;
            }
            case FETCH_PROPERTY_SUCCESS: {
                draft.isLoading = false;
                draft.item = action.payload;
                draft.errors = null;
                break;
            }
            case FETCH_PROPERTY_ERROR: {
                draft.isLoading = false;
                draft.errors = action.payload;
                break;
            }
            case FETCH_COMMENTS: {
                draft.comments.isLoading = true;
                break;
            }
            case FETCH_COMMENTS_SUCCESS:{
                draft.comments.isLoading = false;
                draft.comments.items = action.payload;
                draft.comments.errors = null;
                break;
            }
            case FETCH_COMMENTS_ERROR:{
                draft.comments.isLoading = false;
                draft.comments.errors = action.payload;
                break;
            }
        }
    });

}
