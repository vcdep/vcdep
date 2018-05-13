import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home text-center">
        <h1>
          Welcome to <p class="h1 text-muted">VCDEP</p>
        </h1>
        <p className="lead">
          VCDEP is a visualized application for the continuous delivery
          educational pipeline. Our goal is to help students learn the concepts
          that are extremely prevalent in todays world, namely continuous
          integration and continuous delivery. With VCDEP, students are able to
          connect to a continuous delivery system and watch animations that
          represent the internal workings and communcations happening during
          each part of the continuous delivery cycle. The main stages of the
          continuous delivery process are modeled in our application which
          includes Static Analysis, Unit Testing, Integration Testing, and
          Deployment. There is also a stage for building when the software
          system being developed requires such a stage.
        </p>
      </div>
    );
  }
}
