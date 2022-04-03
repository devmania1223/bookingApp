import { put, all, takeLatest, call } from "redux-saga/effects";

import * as actionTypes from "./actionTypes";

function* loadFont(action) {
    console.log('saga', action);
        yield put({
            type: actionTypes.FONT_LOAD,
            payload: action.payload
        });
}

export default function* fontSaga() {
    yield all([takeLatest(actionTypes.FONT_LOAD, loadFont)]);
}
