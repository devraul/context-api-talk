import React, { Component } from 'react';
import styled from 'styled-components';

import Info from './Info';
import Box from './Box';

import { ContainerContext } from './ContainerContext';
const SpanName = styled.span`
  color: #f77f00;
`;

export default class Body extends Component {
  static contextType = ContainerContext;
  state = {
    message: '',
    companyName: ''
  };

  componentDidUpdate = () => {
    if (this.state.companyName !== this.context.companyName) {
      this.setState({
        companyName: this.context.companyName,
        message: 'Greetings! :) (did update)'
      });
    }
  };

  render() {
    return (
      <Box color="#cd84f1" content="Body.js">
        {this.state.message && <h2>{this.state.message}</h2>}
        <h2>
          It's good to see you at <SpanName>{this.state.companyName}</SpanName>
        </h2>

        <p>Some extra information bellow:</p>
        <Info />
      </Box>
    );
  }
}
