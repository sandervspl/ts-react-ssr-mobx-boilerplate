import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Page } from '@common';

class RouteTest extends Component {
  render() {
    return (
      <Page>
        Route Tested!
        <p><Link to="/">Back to home</Link></p>
      </Page>
    );
  }
}

export default RouteTest;
