import { combineReducers } from 'redux'
import authReducer, { SLICE_NAME as authSliceName } from 'src/Reducers/Auth'
import notificationReducer, { SLICE_NAME as notificationSliceName } from 'src/Reducers/Notification'

const reducers = {
  [authSliceName]: authReducer,
  [notificationSliceName]: notificationReducer
}

const whitelist = [
  authSliceName
]

export default combineReducers(reducers)

export { whitelist }
