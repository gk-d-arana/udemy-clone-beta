import authReducer from "./auth/authReducers";
import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';


export default createStore(
  combineReducers({
    auth: authReducer
  }),
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk
    )
  )
)
