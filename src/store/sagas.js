import { all, fork, takeLatest, put } from "redux-saga/effects"

import {
    REQUEST_INIT_PART,
    SET_PART_DATA
} from "./actionTypes"

import { defaultSettings } from '../config'
import getPartData from '../api/getPartData'


export default function* rootSagas() {
    yield all([fork(watcher())])
}

const watcher = () => function* watch() {
    yield takeLatest(REQUEST_INIT_PART, runRequestInitPart)
}

function* runRequestInitPart() {
    const part = yield getPartData(defaultSettings)

    yield put({type: SET_PART_DATA, part})
}