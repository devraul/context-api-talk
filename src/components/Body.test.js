import React from 'react';
import { mount } from 'enzyme';

import Body from './Body';

const defaultProps = {};

const mountComponent = props => mount(<Body {...defaultProps} {...props} />);

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
