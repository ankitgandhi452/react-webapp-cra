import { combineReducers } from 'redux'
import authReducer, { SLICE_NAME as authSliceName } from 'src/Reducers/Auth'

const reducers = {
  [authSliceName]: authReducer
}

const whitelist = [
  authSliceName
]

export default combineReducers(reducers)

export { whitelist }
