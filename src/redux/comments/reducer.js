import {defaultState} from "../defaultState";
import {
    ADD_COMMENT, ADD_COMMENT_ERROR, ADD_COMMENT_SUCCESS,
    FETCH_COMMENTS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_SUCCESS,
    FETCH_PROPERTY,
    FETCH_PROPERTY_ERROR,
    FETCH_PROPERTY_SUCCESS, HIDE_COMMENT_ERROR
} from "./actionTypes";
import produce from "immer";

export default function commentsReducer(state = defaultState.comments, action) {
    return produce(state, draft => {
        switch (action.type) {
            case FETCH_COMMENTS: {
                draft.errors = null;
                draft.isLoading = true;
                break;
            }
            case FETCH_COMMENTS_SUCCESS: {
                draft.isLoading = false;
                draft.items = action.payload;
                draft.errors = null;
                break;
            }
            case FETCH_COMMENTS_ERROR: {
                draft.isLoading = false;
                draft.errors = action.payload;
                break;
            }
            case ADD_COMMENT: {
                draft.errors = null;
                draft.isAdding = true;
                break;
            }
            case ADD_COMMENT_SUCCESS:{
                draft.isAdding = false;
                draft.items.push(action.payload);
                draft.errors = null;
                break;
            }
            case ADD_COMMENT_ERROR:{
                draft.isAdding = false;
                draft.errors = action.payload;
                break;
            }
            case HIDE_COMMENT_ERROR: {
                console.log('deleting errors');
                draft.errors = null;
                break;
            }
        }
    });

}
