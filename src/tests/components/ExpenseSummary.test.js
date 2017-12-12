import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpenseSummary count={2} total={10001} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with one expense', () => {
  const wrapper = shallow(<ExpenseSummary count={1} total={7599} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with no expenses', () => {
  const wrapper = shallow(<ExpenseSummary count={0} total={0} />);
  expect(wrapper).toMatchSnapshot();
});
