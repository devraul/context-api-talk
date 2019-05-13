import React, { Component } from 'react';

import Box from './Box';
import Page from './Page';

import { fetchCompany } from '../service';

import { ContainerProvider } from './ContainerContext';

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
      <ContainerProvider value={{ companyName: this.state.companyName }}>
        <Box color="#7efff5" padding="2rem" content="Container.js">
          <p>this.state.companyName = "{this.state.companyName}"</p>
          <Page />
          <button onClick={this.reloadCompanyName}>Reload</button>
        </Box>
      </ContainerProvider>
    );
  }
}
