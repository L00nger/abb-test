

import {
    SET_PART_DATA
} from "./actionTypes"

function reducer(
    store = { 
        part: []
    }, action) {
    switch (action.type) {

        case SET_PART_DATA:
            return {
               ...store, part: action.part
            }
            
        default:
            return store
    }
}

export default reducer