import { all, fork, takeLatest, put, call, select, delay } from "redux-saga/effects"

import {
    REQUEST_INIT_PART,
    SET_PART_DATA,
    UPDATE_SAVED_DATA
} from "./actionTypes"

import { PART_SETTINGS, DELAY, NDEVOUT, STATUS_VALUES } from '../config'
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
    const newPartData = yield getPartData(PART_SETTINGS)

    const savedData = yield select(getSavedData)

    //Calculates de total deviation for each and statuses for both controls and features
    const part = newPartData.map(feature => {

        let featureStatus = 0

        const data = feature.data.map(control => {
            let prevTotDev = 0

            savedData.forEach(dataSet => {
                prevTotDev += dataSet
                    .find(setFeature => setFeature.id === feature.id)
                    .data
                    .find(setControl => setControl.id === control.id)
                    .dev
            })

            const totDev = +((prevTotDev + control.dev).toFixed(2))

            const controlStatus = totDev < STATUS_VALUES.WARN
                ? 0
                : totDev < STATUS_VALUES.ERROR
                    ? 1
                    : 2
            
            //Sets the feature status as the worst status of any control on that feature
            featureStatus = controlStatus > featureStatus ? controlStatus : featureStatus

            return { ...control, totDev, status: controlStatus }
        })

        return {...feature, status: featureStatus, data}
        }
    )

    //Removes the older saved dataSet when reaches max
    const slicedData =  savedData.length === NDEVOUT ? savedData.slice(1) : savedData
   
    yield put({ type: UPDATE_SAVED_DATA, data: [...slicedData, part] })
    yield put({ type: SET_PART_DATA, part })

    yield delay(DELAY)
    yield call(managePart)
}