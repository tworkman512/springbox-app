import React from 'react';
import { Grid } from '@material-ui/core';
import Background from '../../assets/img/Scene_COVID.png';
import Slide from 'react-reveal/Slide';

const SceneCovidStyle = {
  width: "100%",
  height: "850px",
  backgroundImage: "url(" + Background + ")",
  backgroundPosition: "left",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat"
};

const Covid = () => (
  <>
    <div>
      <Slide bottom>
      <Grid container spacing={1}>
        <div style={ SceneCovidStyle }>
          <div className="col-wrapper">
            <div className="left-col" />
            <div className="right-col">
              <h2>Our COVID-19 Solutions</h2>
              <p>Support patients and keep employees healthy during the COVID-19 pandemic. Our chatbox and voicebot solutions reduce contact center burden and protect frontline staff.</p>
              <button>Learn more</button>
            </div>
          </div>
        </div>
      </Grid>
      </Slide>
    </div>
  </>
)

export default Covid
