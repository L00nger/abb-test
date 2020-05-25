import { all, fork } from "redux-saga/effects"

import {

} from "./actionTypes"


export default function* rootSagas() {
    yield all([fork(watcher())])
}

const watcher = () => function* watch() {
    
}