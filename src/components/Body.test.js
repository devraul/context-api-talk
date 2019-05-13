import React from 'react';
import { mount } from 'enzyme';

import { ContainerProvider } from './ContainerContext';

import Body from './Body';

const defaultValue = {};

const mountComponent = value =>
  mount(
    <ContainerProvider value={{ ...defaultValue, ...value }}>
      <Body />
    </ContainerProvider>
  );

describe('<Body />', () => {
  it('renders without error', () => {
    mountComponent();
  });

  it('renders companyName passed as props', () => {
    const companyName = 'YoungCapital';
    const $wrapper = mountComponent({ companyName });

    expect($wrapper.text()).toMatch(companyName);
  });
});
