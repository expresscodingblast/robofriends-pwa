import React from 'react';
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme';
import Card from './Card';


it('Expect to render Card component', () => {
  const wrapper = shallow(<Card />);
  expect(wrapper.length).toEqual(1);
  expect(wrapper).toMatchSnapshot();
})
