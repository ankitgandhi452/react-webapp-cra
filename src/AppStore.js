import { configureStore } from '@reduxjs/toolkit'
import reducers from './Reducers'

const AppStore = configureStore({
  reducer: reducers
})

export default AppStore
