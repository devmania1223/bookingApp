import produce from "immer";
import {
    FONT_LOAD
} from "./actionTypes";
import {defaultState} from "../defaultState";

const fontReducer = (state = defaultState.font, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case FONT_LOAD: {
                    if(typeof action.payload === 'boolean') draft.isLoaded = action.payload;
            }
        }
    });
};
export default fontReducer;
