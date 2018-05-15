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
          Continuous Delivery concepts.
          <figure className="figure">
            <img
              src="./images/cdep_overview.png"
              className="figure-img img-fluid"
              alt="CDEP System's flow"
            />
            <figcaption class="figure-caption text-center">
              Overview of how the CDEP system works.
            </figcaption>
          </figure>
          <br />
          The tools consist of an automated Continuous Delivery Pipeline (CDEP)
          which is designed to be easy and customizable for instructors to setup
          and use. Our CDEP tool uses the open source continuous integration
          tool <a href="https://jenkins.io/">Jenkins</a> to orchestrate testing
          students's software. It supports two project types: PHP and Java
          Desktop applications. It uses static analysis, unit, and integration
          testing tools like PHPUnit and JUnit for performing Continuous
          Integration. The CDEP tool is automated using Docker Compose for
          creating immutable containers that handle all the configuration
          needed. It requires a config.json file to be placed in the root folder
          of a project. This config file contains information about the type of
          project is being tested and what types of tests to perform. The basic
          flow of instructions can be seen in the above figure. The system is
          kicked off from a notification from the version control system that a
          change has been made to the project. This tells Jenkins to start
          testing by using Docker to create the necessary containers based off
          of the config.json file. If all the tests pass, the version control
          system's main branch is updated with the new changes made and the
          staging environment is also updated so QA testing can be done. If one
          of the test fails, the entire process is terminated and the developer
          is notified.
          <figure className="figure">
            <img
              src="./images/vcdep_overview.png"
              className="figure-img img-fluid"
              alt="VCDEP System's flow"
            />
            <figcaption class="figure-caption text-center">
              Overview of how the VCDEP system works.
            </figcaption>
          </figure>
          <br />
          Pilot Study:{' '}
          <a href="https://ieeexplore.ieee.org/document/8166682/">
            here
          </a> CDEP:{' '}
          <a href="https://dl.acm.org/citation.cfm?id=3077301">here</a>
        </p>
      </div>
    );
  }
}
