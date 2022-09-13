import { configureStore } from '@reduxjs/toolkit'
import reducers from 'src/Reducers'

const AppStore = configureStore({
  reducer: reducers
})

export default AppStore
