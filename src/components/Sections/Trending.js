import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Card } from '@material-ui/core';
import Slide from 'react-reveal/Slide';

const Trending = () => (
  <>
  <div>
    <Slide bottom>
  <Carousel showThumbs={false}>
    <div className="slider-content">
      <Card className="slider-card">
        <img src="img/Resources1.png" alt="Resources 1" />
        <div className="copy-wrapper">
          <p className="gray-copy">Webinar</p>
          <h4>Reframing the return-to-work problem to create a more adaptive organization</h4>
          <p>Read more</p>
        </div>
      </Card>

      <Card className="slider-card">
        <img src="img/Resources2.png" alt="Resources 2" />
        <div className="copy-wrapper">
          <p className="gray-copy">Blog</p>
          <h4>ALEXA with Healthcare: Amazon takes a next step with HIPAA</h4>
          <p>Read more</p>
        </div>
      </Card>

      <Card className="slider-card">
        <img src="img/Resources3.png" alt="Resources 3" />
        <div className="copy-wrapper">
          <p className="gray-copy">White paper</p>
          <h4>Guide: Employee Health Return-to-Work Strategies</h4>
          <p>Read more</p>
        </div>
      </Card>
    </div>
    <div className="slider-content">
      <Card className="slider-card">
        <img src="img/Resources1.png" alt="Resources 1" />
        <div className="copy-wrapper">
          <p className="gray-copy">Webinar</p>
          <h4>Reframing the return-to-work problem to create a more adaptive organization</h4>
          <p>Read more</p>
        </div>
      </Card>

      <Card className="slider-card">
        <img src="img/Resources2.png" alt="Resources 2" />
        <div className="copy-wrapper">
          <p className="gray-copy">Blog</p>
          <h4>ALEXA with Healthcare: Amazon takes a next step with HIPAA</h4>
          <p>Read more</p>
        </div>
      </Card>

      <Card className="slider-card">
        <img src="img/Resources3.png" alt="Resources 3" />
        <div className="copy-wrapper">
          <p className="gray-copy">White paper</p>
          <h4>Guide: Employee Health Return-to-Work Strategies</h4>
          <p>Read more</p>
        </div>
      </Card>
    </div>
    <div className="slider-content">
      <Card className="slider-card">
        <img src="img/Resources1.png" alt="Resources 1" />
        <div className="copy-wrapper">
          <p className="gray-copy">Webinar</p>
          <h4>Reframing the return-to-work problem to create a more adaptive organization</h4>
          <p>Read more</p>
        </div>
      </Card>

      <Card className="slider-card">
        <img src="img/Resources2.png" alt="Resources 2" />
        <div className="copy-wrapper">
          <p className="gray-copy">Blog</p>
          <h4>ALEXA with Healthcare: Amazon takes a next step with HIPAA</h4>
          <p>Read more</p>
        </div>
      </Card>

      <Card className="slider-card">
        <img src="img/Resources3.png" alt="Resources 3" />
        <div className="copy-wrapper">
          <p className="gray-copy">White paper</p>
          <h4>Guide: Employee Health Return-to-Work Strategies</h4>
          <p>Read more</p>
        </div>
      </Card>
    </div>
  </Carousel>
  </Slide>
  </div>
  </>
)

export default Trending
