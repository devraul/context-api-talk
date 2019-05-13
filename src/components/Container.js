import React, { Component } from 'react';

import Box from './Box';
import Page from './Page';

import { fetchCompany } from '../service';

export default class Container extends Component {
  state = {
    companyName: ''
  };

  loadCompanyName = () => {
    fetchCompany().then(({ data }) => {
      this.setState({
        companyName: data.company.name
      });
    });
  };

  reloadCompanyName = () => {
    this.setState({ companyName: '' }, this.loadCompanyName);
  };

  componentDidMount = () => {
    this.loadCompanyName();
  };

  render() {
    return (
      <Box color="#7efff5" padding="2rem" content="Container.js">
        <p>this.state.companyName = "{this.state.companyName}"</p>
        <Page companyName={this.state.companyName} />
        <button onClick={this.reloadCompanyName}>Reload</button>
      </Box>
    );
  }
}
