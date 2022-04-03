import { all, fork } from "redux-saga/effects";

import propertiesSaga from "./properties/saga";
import propertySaga from "./property/saga";
import commentsSaga from "./comments/saga";
import userSaga from "./user/saga";

export default function* rootSaga() {
    yield all([fork(propertiesSaga), fork(propertySaga), fork(commentsSaga), fork(userSaga)]);
}
