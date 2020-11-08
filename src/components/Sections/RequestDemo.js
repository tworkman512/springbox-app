import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Slide from 'react-reveal/Slide';

const RequestDemo = () => (
  <>
    <div>
    <Slide bottom>
      <Grid container spacing={1} className="request-demo">
        <Grid item sm={2} />
        <Grid item sm={8}>
          <div className="copy-wrapper">
            <h2>Request a demo, trail or consultation to discover how our conversational AI can make a difference.</h2>
            <h2 className="get-in-touch">Get in touch <ArrowForward /></h2>
          </div>
        </Grid>
        <Grid item sm={2} />
      </Grid>
    </Slide>
    </div>
  </>
)

export default RequestDemo
