// GitHubCard.test.js
import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import GitHubCard from './GitHubCard';

test('GitHubCard snapshot', () => {
  const { asFragment } = render(<GitHubCard />);
  expect(asFragment()).toMatchSnapshot();
});

// Optional: Uncomment the following lines if you want to use react-test-renderer directly
// test('GitHubCard snapshot using react-test-renderer', () => {
//   const tree = renderer.create(<GitHubCard />).toJSON();
//   expect(tree).toMatchSnapshot();
// });
