import authReducer, { SLICE_NAME as authSliceName } from 'src/Reducers/Auth'

const reducers = {
  [authSliceName]: authReducer
}

export default reducers
