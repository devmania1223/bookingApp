import {call, put, takeLatest} from "redux-saga/effects";
import Api from '../../services/Api';
import {FETCH_PROPERTY, FETCH_PROPERTY_ERROR, FETCH_PROPERTY_SUCCESS} from "./actionTypes";

function* fetchProperty({payload}) {
    try {
        const response = yield call(Api.sendRequest, `/properties/${payload}`, `get`);
        yield put({type: FETCH_PROPERTY_SUCCESS, payload: response.data});
    } catch (e) {
        yield put({type: FETCH_PROPERTY_ERROR, payload: e});
    }
}
export default function* propertySaga() {
    yield takeLatest(FETCH_PROPERTY, fetchProperty);
}
