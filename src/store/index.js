import { createStore, compose, combineReducers, applyMiddleware } from 'redux'

import thunkMiddlewere from 'redux-thunk'

const rootReducer = combineReducers({})

const middlewere = [thunkMiddlewere]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewere),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
)

export default store
