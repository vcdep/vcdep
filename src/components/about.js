import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <h1 className="text-center">
          About <p className="h1 text-muted">VCDEP</p>
        </h1>
        <p className="lead text-justified">
          The Visual Continuous Delivery Educational Pipeline (VCDEP) is a set
          of tools for instructors to use to facilitate teaching students
          Continuous Delivery concepts. The tools consist of an automated
          Continuous Delivery Pipeline (CDEP) which is designed to be easy and
          customizable for instructors to setup and use. Our CDEP tool uses the
          open source continuous integration tool{' '}
          <a href="https://jenkins.io/">Jenkins</a> to orchestrate testing
          students's software. It supports two project types: PHP and Java
          Desktop applications. It uses static analysis, unit, and integration
          testing tools like PHPUnit and JUnit for performing Continuous
          Integration. The CDEP tool is automated using Docker Compose for
          creating immutable containers that handle all the configuration
          needed. Pilot Study:{' '}
          <a href="https://ieeexplore.ieee.org/document/8166682/">here</a> CDEP:{' '}
          <a href="https://dl.acm.org/citation.cfm?id=3077301">here</a>
        </p>
      </div>
    );
  }
}
