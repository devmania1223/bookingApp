import {call, put, takeLatest, apply, all, delay} from "redux-saga/effects";
import Api from '../../services/Api';
import {FETCH_PROPERTIES, FETCH_PROPERTIES_ERROR, FETCH_PROPERTIES_SUCCESS} from "./actionTypes";

function* fetchProperties(){
    try {
        const response = yield call(Api.sendRequest, `/properties`, `get`);
        yield put({type: FETCH_PROPERTIES_SUCCESS, payload: response.data});
    } catch (e) {
        yield put({type:FETCH_PROPERTIES_ERROR, payload: e});
    }
}
export default function* propertiesSaga() {
    yield takeLatest(FETCH_PROPERTIES, fetchProperties);
}
