import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Stack from '@mui/system/Stack'

import dsSpacing from '../Theme/spacing'

export default class DsChipGroup extends PureComponent {
  static propTypes = {}
  static defaultProps = {}
  render () {
    const { children } = this.props
    return (
      <Stack direction='row' spacing={dsSpacing.glacial}>{children}</Stack>
    )
  }
}
