import React from 'react';
import { mount } from 'enzyme';

import Body from './Body';

const defaultProps = {};

const mountComponent = props =>
  mount(<Body {...defaultProps} {...props} />);

describe('<Body />', () => {
  it('renders without error', () => {
    mountComponent();
  });
});
