import { all, fork, takeLatest, put, call, select, delay } from "redux-saga/effects"

import {
    REQUEST_INIT_PART,
    SET_PART_DATA,
    UPDATE_SAVED_DATA
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
    const newPartData = yield getPartData(defaultSettings)

    const savedData = yield select(getSavedData)

    //Adds the total deviation for each control
    const part = newPartData.map(feature => ({
        ...feature,
        data: feature.data.map(control => {
            let prevTotDev = 0
            savedData.forEach(dataSet => {
                prevTotDev += dataSet
                    .find(setFeature => setFeature.id === feature.id)
                    .data
                    .find(setControl => setControl.id === control.id)
                    .dev
            })
            return {...control, totDev: +((prevTotDev + control.dev).toFixed(2))}
        })
        })
    )

    //Removes the older saved dataSet when reaches max
    const slicedData =  savedData.length === NDEVOUT ? savedData.slice(1) : savedData
   
    yield put({ type: UPDATE_SAVED_DATA, data: [...slicedData, part] })
    yield put({ type: SET_PART_DATA, part })

    yield delay(DELAY)
    yield call(managePart)
}