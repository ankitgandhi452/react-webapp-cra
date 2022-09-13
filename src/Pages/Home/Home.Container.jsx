import React, { PureComponent } from 'react'
import HomeWrapper from './Home.Wrapper'

export default class HomeContainer extends PureComponent {
  render () {
    console.log(this.props)
    return (
      <HomeWrapper />
    )
  }
}
