import React, { useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import HomeLayout from './HomeLayout'
import { REQUEST_INIT_PART } from '../store/actionTypes'

function Home() {

    //SELECTORS
    const part = useSelector(store => store.part)

    //DISPATCHERS
    const dispatch = useDispatch()
    const requestInitPart = useCallback(
        () => dispatch({ type: REQUEST_INIT_PART }),
        [dispatch]
    )

    //EFECTS
    useEffect(() => {
        requestInitPart()
    }, [requestInitPart])


    return (
        <HomeLayout part={part} />
    )
}

export default Home