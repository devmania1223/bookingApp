import {call, put, takeLatest, all} from "redux-saga/effects";
import Api from '../../services/Api';
import {
    FETCH_COMMENTS,
    FETCH_COMMENTS_ERROR,
    FETCH_COMMENTS_SUCCESS,
    ADD_COMMENT,
    ADD_COMMENT_ERROR,
    ADD_COMMENT_SUCCESS
} from "./actionTypes";

function* fetchPropertyComments({payload}){
    try{
        const comments = yield call(Api.sendRequest, `/properties/${payload}/comments`, `get`);
        yield put({type: FETCH_COMMENTS_SUCCESS, payload: comments.data});
    }
    catch (e) {
        yield put({type:FETCH_COMMENTS_ERROR, payload: e});
    }
}
function* addPropertyComment({payload}){
    try{
        const {token, id, text} = payload;
        const comment = yield call(Api.sendRequest,
            `/properties/${id}/comments`,
            `post`,
            {text},
            {"Authorization" : `Bearer ${token}`});
        yield put({type: ADD_COMMENT_SUCCESS, payload: comment.data});
    }
    catch (e) {
        if(e.response && e.response.status === 401){
            yield put({type:ADD_COMMENT_ERROR,
                payload: {status: e.response.status, message: 'Only registered users can post comments'}});
        }
        else yield put({type:ADD_COMMENT_ERROR, payload: e});
    }
}
export default function* commentsSaga() {
    yield all([takeLatest(FETCH_COMMENTS, fetchPropertyComments), takeLatest(ADD_COMMENT, addPropertyComment)]);
}
