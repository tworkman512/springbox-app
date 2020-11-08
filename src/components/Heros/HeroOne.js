import React from 'react';
import { Grid } from '@material-ui/core';

const HeroOne = () => (
  <>
    <div>
      <Grid container spacing={1}>
        <Grid item sm={1} />
          <Grid item sm={4} className="hero-copy">
            <div className="copy-wrapper">
              <h2>Conversational AI that redefines the patient journey</h2>
              <p>Our HIPAA-compliant virtual assistants mirror human behavior to effectively serve patients - from appointments to outcomes. This increases efficiency and reduces cost, allowing you to <span style={{fontWeight: 'bold'}}>enable real change across your organization.</span></p>
            </div>
          </Grid>
        <Grid item sm={7}>
        <img src="img/Scene-Bedroom.png" alt="Scene Bedroom" />
        </Grid>
      </Grid>
    </div>
  </>
)

export default HeroOne
