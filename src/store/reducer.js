import {
    SET_PART_DATA,
    UPDATE_SAVED_DATA
} from "./actionTypes"

function reducer(
    store = { 
        part: [],
        savedData: []
    }, action) {
    switch (action.type) {

        case UPDATE_SAVED_DATA:
            return {
               ...store, savedData: action.data
            }

        case SET_PART_DATA:
            return {
               ...store, part: action.part
            }
            
        default:
            return store
    }
}

export default reducer