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
          students's software. It supports two project types:{' '}
          <a href="http://php.net/">PHP</a> and{' '}
          <a href="https://java.com/en/download/">Java</a> Desktop applications.
          It uses static analysis, unit, and integration testing tools like{' '}
          <a href="https://phpunit.de/">PHPUnit</a> and{' '}
          <a href="https://junit.org/junit5/">JUnit</a> for performing
          Continuous Integration. The CDEP tool is automated using{' '}
          <a href="https://docs.docker.com/compose/">Docker Compose</a> for
          creating immutable containers that handle all the configuration
          needed. It requires a config.json file to be placed in the root folder
          of a project. This config file contains information about the type of
          project is being tested and what types of tests to perform. The basic
          flow of instructions can be seen in the above figure. The system is
          kicked off from a notification from the version control system that a
          change has been made to the project. This tells Jenkins to start
          testing by using <a href="https://www.docker.com/">Docker</a> to
          create the necessary containers based off of the config.json file. If
          all the tests pass, the version control system's main branch is
          updated with the new changes made and the staging environment is also
          updated so QA testing can be done. If one of the test fails, the
          entire process is terminated and the developer is notified.
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
          The above figure shows the flow of data for the VCDEP system. With the
          VCDEP system, a student first launches the VCDEP application and
          inputs all of the information about their project. Once all of the
          information is entered, the application starts polling the VCDEP
          server, which stores the most recent build of the CDEP system for
          their project. The student then makes a change to their project and
          commits it to their version control server, in our case it is GitHub.
          The CDEP system detects the change and follows the first figure's flow
          of events as discussed previously. The VCDEP server is notfied once
          the CDEP system finishes the build and VCDEP server collects that
          build's logfile. With the logfile collected, the next time the
          student's application polls the VCDEP server it will be given the new
          logfile that contains all of the information the student needs. The
          information is parsed on the student's application and then animations
          and scripts are displayed to the student to help them understand what
          took place.
          <br />
          <br />
          <b>
            You can read more about our tools and the studies we performed in
            our pilot study paper located{' '}
            <a href="https://ieeexplore.ieee.org/document/8166682/">here</a> and
            our second study paper{' '}
            <a href="https://dl.acm.org/citation.cfm?id=3077301">here</a>.
          </b>
        </p>
      </div>
    );
  }
}
