import React, { Component } from 'react';
import Stages from '../stages';

export default class Wiki extends Component {
  render() {
    const stage = Stages[this.props.match.params.stage];

    return (
      <div className="wiki text-center">
        <h1>{stage.name}</h1>
        <img src={`./images/${stage.image}`} alt={`${stage.name}'s flow.`} />
        <p className="lead">{stage.text}</p>
      </div>
    );
  }
}
