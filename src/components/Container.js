import React, { Component } from 'react';
import styled from 'styled-components';

import { fetchCompany } from '../service';
import Page from './Page';

const StateStyled = styled.p``;

const ContainerStyled = styled.div`
  border: 1px dashed #7efff5;
  position: relative;
  padding: 2rem;
  &:before {
    content: 'CompanyTitle.js';
    color: #7efff5;
    font-weight: normal;
    position: absolute;
    font-size: 12px;
    top: 6px;
    left: 6px;
  }
`;

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
      <ContainerStyled>
        <StateStyled>
          this.state.companyName = "{this.state.companyName}"
        </StateStyled>
        <Page companyName={this.state.companyName} />
        <button onClick={this.reloadCompanyName}>Reload</button>
      </ContainerStyled>
    );
  }
}
