import React from 'react';

import { shallow } from 'enzyme';
import CardList from './CardList';


it('Expect to render Card component', () => {
  const mockRobots = [
    {
      id: 10,
      name: 'John Snow',
      username: 'JohnJohn',
      email: 'john@gmail.com',
    }
  ];

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
})