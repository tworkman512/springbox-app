import React from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import ArrowForward from '@material-ui/icons/ArrowForward';

const StyledText = styled.span`
  text-decoration: underline
`

const Banner = () => (
  <>
    <div className="black-banner">
      <Grid container spacing={1}>
          <Grid item sm={12}>
            <p>Powering the Healthcare Digital Front Door and Reducing Clinician Burden with Conversational AI. <StyledText> Read the white paper</StyledText> <ArrowForward/> </p>
          </Grid>
      </Grid>
    </div>
  </>
)

export default Banner
