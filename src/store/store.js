import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware  from 'redux-saga'
import reducer from './reducer'
import rootSaga from './sagas'

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    )

    sagaMiddleware.run(rootSaga)
    return store
}