import React from 'react';
import { Grid } from '@material-ui/core';
import Slide from 'react-reveal/Slide';

const HeroTwo = () => (
  <>
    <div>
    <Slide bottom>
      <Grid container spacing={1}>
        <Grid item sm={1} />
          <Grid item sm={4} className="hero-copy">
            <div className="copy-wrapper">
              <h2>We believe in automation with empathy</h2>
              <p>That means <strong>creating technology that provides a human touch between you and your patients.</strong> It's what drives us to build conversational AI that's intuitive to use, manage and scale, empowering you to offer care that goes beyond expectations.</p>
            </div>
          </Grid>
        <Grid item sm={7}>
        <img src="img/Scene_Old-lady.png" alt="Scene Old Lady" />
        </Grid>
      </Grid>
    </Slide>
    </div>
  </>
)

export default HeroTwo
