import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import Grid from '@mui/material/Grid'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import ExamplesButtons from './ExamplesButtons'
import ExamplesTextField from './ExamplesTextField'
import ExamplesAvatars from './ExamplesAvatars'
import ExamplesDialog from './ExamplesDialog'
import ExamplesChips from './ExamplesChips'
import ExamplesAlerts from './ExamplesAlerts'
import ExamplesNotification from './ExamplesNotification'
import ExamplesAppBar from './ExamplesAppBar'

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
              <Typography>AppBar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ExamplesAppBar />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Notifications</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ExamplesNotification />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Alerts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ExamplesAlerts />
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Chips</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ExamplesChips />
            </AccordionDetails>
          </Accordion>
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
