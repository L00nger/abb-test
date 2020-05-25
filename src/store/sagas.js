import { all, fork, takeLatest, put, call, select, delay } from "redux-saga/effects"

import {
    REQUEST_INIT_PART,
    SET_PART_DATA
} from "./actionTypes"

import { defaultSettings, DELAY, NDEVOUT } from '../config'
import getPartData from '../api/getPartData'

const getSavedData = store => store.savedData

export default function* rootSagas() {
    yield all([fork(watcher())])
}

const watcher = () => function* watch() {
    yield takeLatest(REQUEST_INIT_PART, runRequestInitPart)
}

function* runRequestInitPart() {
    yield call(managePart)
}



function* managePart() {
    const part = yield getPartData(defaultSettings)

    yield put({ type: SET_PART_DATA, part })

    yield delay(DELAY)
    yield call(managePart)
}