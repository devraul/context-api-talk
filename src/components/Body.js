import React, { Component } from 'react';
import styled from 'styled-components';

import Info from './Info';
import Box from './Box';

const SpanName = styled.span`
  color: #f77f00;
`;

export default class Body extends Component {
  state = {
    message: ''
  };

  componentDidUpdate = oldProps => {
    if (oldProps.companyName !== this.props.companyName) {
      this.setState({ message: 'Greetings! :) (did update)' });
    }
  };
  render() {
    return (
      <Box color="#cd84f1" content="Body.js">
        {this.state.message && <h2>{this.state.message}</h2>}
        <h3>
          It's good to see you at <SpanName>{this.props.companyName}</SpanName>
        </h3>

        <p>Some extra information bellow:</p>
        <Info />
      </Box>
    );
  }
}
