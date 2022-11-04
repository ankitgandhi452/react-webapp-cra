import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import ExamplesButtons from './ExamplesButtons'
import ExamplesTextField from './ExamplesTextField'
import ExamplesAvatars from './ExamplesAvatars'
import Grid from '@mui/material/Grid'
import ExamplesDialog from './ExamplesDialog'

export default class Examples extends PureComponent {
  render () {
    return (
      <Grid container spacing={2}>
        <Grid item>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Dialog</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ExamplesDialog />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Avatars</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ExamplesAvatars />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>TextFields</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ExamplesTextField />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Buttons</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ExamplesButtons />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    )
  }
}
