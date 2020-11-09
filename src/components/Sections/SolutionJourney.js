import React from 'react';
import { Grid } from '@material-ui/core';
import Slide from 'react-reveal/Slide';
import ArrowForward from '@material-ui/icons/ArrowForward';

const SolutionJourney = () => (
  <>
    <div>
    <Slide bottom>
      <Grid container spacing={1}>
        <Grid item sm={12} className="solution-journey">
          <h2>Uplevel care at every step with our solutions</h2>
          <img src="img/Solution_journey.png" alt="Solution Journey" />
        </Grid>
        <Grid item sm={4}>
          <div className="solution-journey-copy">
            <h3>The digital front door</h3>
            <p>Reach and engage patients through the technology they use every day with Lorem Ipsum a virtual concierge.</p>
            <a href="#" className="underline">Learn more <ArrowForward/></a>
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className="solution-journey-copy">
            <h3>The bedside assistant</h3>
            <p>Empower hands-free patient-provider communication through Lorem Ipsum AI-powered request prioritization and smart routing.</p>
            <a href="#" className="underline">Learn more <ArrowForward/></a>
          </div>
        </Grid>
        <Grid item sm={4}>
          <div className="solution-journey-copy">
            <h3>The connect patient</h3>
            <p>Prep, inform and empower patients through personalized education, guidance and support, pre- and post-visit with Lorem Ipsum.</p>
            <a href="#" className="underline">Learn more <ArrowForward/></a>
          </div>
        </Grid>
      </Grid>
      </Slide>
    </div>
  </>
)

export default SolutionJourney
