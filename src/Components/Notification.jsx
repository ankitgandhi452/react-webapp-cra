import React from 'react'
import PropTypes from 'prop-types'
import { withSnackbar } from 'notistack'
import { connect } from 'react-redux'

import { dequeue, getNotificationsSelector } from 'src/Reducers/Notification'
import { _differenceBy } from 'src/Utils/lodash'

export class Notification extends React.Component {
  static propTypes = {
    actions: PropTypes.shape({
      dequeue: PropTypes.func
    }),
    enqueueSnackbar: PropTypes.func,
    closeSnackbar: PropTypes.func,
    notifications: PropTypes.array
  }

  static defaultProps = {
    notifications: []
  }

  constructor (props) {
    super(props)

    this.handleEnqueue = this.handleEnqueue.bind(this)
    this.handleDequeue = this.handleDequeue.bind(this)
  }

  componentDidMount () {
    this.handleEnqueue()
    this.handleDequeue()
  }

  componentDidUpdate (previousProps = {}, previousState = {}) {
    this.handleEnqueue(previousProps)
    this.handleDequeue(previousProps)
  }

  handleEnqueue (previousProps = {}) {
    const { notifications: prevNotifications = [] } = previousProps
    const { notifications = [], actions } = this.props

    const enqueueNotifications = _differenceBy(notifications, prevNotifications, 'options.key')
    enqueueNotifications.forEach(notification => {
      const { message, options } = notification
      this.props.enqueueSnackbar(message, {
        ...options,
        onExited: (event, key) => {
          // remove this snackbar from redux store
          actions.dequeue(key)
        }
      })
    })
  }

  handleDequeue (previousProps = {}) {
    const { notifications: prevNotifications = [] } = previousProps
    const { notifications = [] } = this.props

    const dequeueNotifications = _differenceBy(prevNotifications, notifications, 'options.key')
    dequeueNotifications.forEach(notification => {
      const { options = {} } = notification
      const { key } = options
      if (key) {
        this.props.closeSnackbar(key)
      }
    })
  }

  render () {
    console.log('props', this.props)
    return null
  }
}

const mapStateToProps = (state) => ({
  notifications: getNotificationsSelector(state)
})

const mapDispatchToProps = (dispatch) => ({
  actions: {
    dequeue: (key) => dispatch(dequeue(key))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withSnackbar(Notification))
