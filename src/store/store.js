import authReducer from "./auth/authReducers";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import mainDataReducer from './mainData/mainDataReducers'

export default createStore(
  combineReducers({
    auth: authReducer,
    mainData : mainDataReducer
  }),
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk
    )
  )
)
