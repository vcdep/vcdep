import React, { Component } from 'react';
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
  Row,
} from 'reactstrap';

export default class Download extends Component {
  render() {
    return (
      <div className="download">
        <Row>
          <Card className="mt-3">
            <CardHeader tag="h3">
              Visual Continuous Delivery Educational Pipeline (VCDEP) Setup
            </CardHeader>
            <CardBody>
              <CardTitle>What is it?</CardTitle>
              <CardText>
                This application generates a complete continuous delivery
                pipeline that instructors may use in a course to teach students
                about continuous delivery. Currently allows for both PHP and
                Java applications to be used on the system. Already created and
                setup PHP and Java projects that can be used with the CDEP
                system can be found{' '}
                <a href="https://github.com/vcdep/php_activity">here</a> for PHP
                and <a href="https://github.com/vcdep/java_activity">here</a>{' '}
                for Java. The full documentation on how to use this application
                can be found at its GitHub Repo{' '}
                <a href="https://github.com/vcdep/vcdep_setup">here</a>.
              </CardText>
              <Button color="primary" href="./files/vcdep_setup.zip" download>
                Download
              </Button>
            </CardBody>
            <CardFooter className="text-muted">
              Authors: <a href="https://github.com/ncoop57">Nathan Cooper</a>{' '}
              and <a href="https://github.com/BhavyanshM">Bhavyansh Mishra</a>.
            </CardFooter>
          </Card>
          <Card className="mt-3">
            <CardHeader tag="h3">VCDEP Application</CardHeader>
            <CardBody>
              <CardTitle>What is it?</CardTitle>
              <CardText>
                This application visualizes the Jenkins pipeline builds. It uses
                JavaFX and SceneBuilder to accomplish this. The full
                documentation on how to use this application can be found at its
                GitHub Repo{' '}
                <a href="https://github.com/vcdep/vcdep_application">here</a>.
              </CardText>
              <Button
                color="primary"
                href="./files/vcdep_application.zip"
                download
              >
                Download
              </Button>
            </CardBody>
            <CardFooter className="text-muted">
              Authors: <a href="https://github.com/agl11">Anthony Loicano</a>,{' '}
              <a href="https://github.com/ncoop57">Nathan Cooper</a>,{' '}
              <a href="https://github.com/Banmatt320">Matthew Baning</a>,{' '}
              <a href="https://github.com/Howtoon">William Tennis</a>, and{' '}
              <a href="https://github.com/rnp11">Robbyn Pocock</a>.
            </CardFooter>
          </Card>
          <Card className="mt-3">
            <CardHeader tag="h3">Student Repository Creator (SRC)</CardHeader>
            <CardBody>
              <CardTitle>What is it?</CardTitle>
              <CardText>
                This application helps instructors quickly and efficiently
                create multiple repositories under one GitHub Organization. It
                also take cares of setting up all the webhooks required for
                linking the repositories to Jenkins and preloading the
                repositories with a given activity. The full documentation on
                how to use this application can be found at its GitHub Repo{' '}
                <a href="https://github.com/vcdep/student_repository_creator">
                  here
                </a>.
              </CardText>
              <Button
                color="primary"
                href="./files/student_repository_creator.zip"
                download
              >
                Download
              </Button>
            </CardBody>
            <CardFooter className="text-muted">
              Authors: <a href="https://github.com/ncoop57">Nathan Cooper</a>.
            </CardFooter>
          </Card>
        </Row>
      </div>
    );
  }
}
