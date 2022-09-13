import authReducer, { SLICE_NAME as authSliceName } from './Auth'

const reducers = {
  [authSliceName]: authReducer
}

export default reducers
