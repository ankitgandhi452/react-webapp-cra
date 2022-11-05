import { createSlice, createSelector } from '@reduxjs/toolkit'

export const SLICE_NAME = 'notification'

export const getReducer = state => {
  return state[SLICE_NAME]
}

export const getNotificationsSelector = createSelector(
  getReducer,
  (notification) => notification.notifications
)

const INITIAL_STATE = {
  notifications: []
}

const slice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    enqueue: (state, { payload: notification = {} }) => {
      const key = (notification && notification.options?.key) || new Date().getTime() + Math.random()
      const notif = { ...notification, options: { ...notification.options, key } }
      state.notifications.push(notif)
    },
    dequeue: (state, { payload }) => {
      const { key } = payload
      const filteredNotifications = state.notifications.filter(notification => notification.options.key !== key)
      state.notifications = filteredNotifications
    },
    flush: (state) => {
      state.notifications = []
    }
  }
})

export const { enqueue, dequeue, flush } = slice.actions
export default slice.reducer
