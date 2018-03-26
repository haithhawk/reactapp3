import React, { Component } from 'react';
import Data from '../data';

class ShowJson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }
  componentDidMount() {
    fetch('./Data')
      .then(results => {
        return results.json();
      })
      .then(data => {
        let people = data.results.map(person => {
          return (
            <ul key={person.results}>
              <li>{person.first_name}</li>
            </ul>
          );
        });
        this.setState({ people: people });
        console.log('state', this.state.people);
      });
  }

  render() {
    return (
      <div>
        <div>{this.state.people}</div>
      </div>
    );
  }
}

export default ShowJson;
