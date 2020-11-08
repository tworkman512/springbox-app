import React from 'react';
import { Grid } from '@material-ui/core';

const Navigation = () => (
  <>
  <div>
    <nav>
      <Grid container spacing={1}>
        <Grid item sm={3} />
          <Grid item sm={6}>
            <ul>
              <a href="#" className="underline"><li>Solutions</li></a>
              <a href="#" className="underline"><li>Platform</li></a>
              <a href="#" className="underline"><li>Resources</li></a>
              <a href="#" className="underline"><li>About</li></a>
            </ul>
          </Grid>
        <Grid item sm={3}>
          <button>
            Request a demo
          </button>
        </Grid>
      </Grid>
    </nav>
  </div>
  </>
)

export default Navigation
