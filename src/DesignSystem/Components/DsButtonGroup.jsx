import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Stack from '@mui/system/Stack'

import dsSpacing from '../Theme/spacing'

export default class DsButtonGroup extends PureComponent {
  static propTypes = {
    primaryActionButton: PropTypes.element,
    secondaryActionButton: PropTypes.element,
    tertiaryActionComponennt: PropTypes.element,
    disablePadding: PropTypes.bool
  }

  static defaultProps = {
    primaryActionButton: null,
    secondaryActionButton: null,
    tertiaryActionComponennt: null,
    disablePadding: false
  }

  render () {
    const {
      primaryActionButton,
      secondaryActionButton,
      disablePadding,
      tertiaryActionComponennt
    } = this.props

    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Box
          sx={{
            color: 'dsColor.typoTertiary',
            textAlign: 'center',
            pb: (tertiaryActionComponennt && disablePadding) ? dsSpacing.bittercold : 0
          }}
        >
          {tertiaryActionComponennt}
        </Box>
        <Stack
          direction='row'
          spacing={dsSpacing.frostbite}
          sx={{
            flex: 1,
            '> button': {
              flex: 1
            },
            p: disablePadding ? 0 : dsSpacing.bittercold,
            bgcolor: {
              xs: 'dsColor.surfaceBackground',
              sm: 'dsColor.surfaceBackground',
              md: 'transparent'
            }
          }}
        >
          {secondaryActionButton}
          {primaryActionButton}
        </Stack>
      </Box>
    )
  }
}
