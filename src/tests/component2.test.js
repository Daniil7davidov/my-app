import { render, screen } from '@testing-library/react';
import Component2 from '../components/component2';

test('test component 2', () => {
  render(<Component2 />);
  const Element = screen.getByTestId("test").innerHTML
  expect(Element).toEqual('0')
});
