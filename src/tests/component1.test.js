import { render, screen } from '@testing-library/react';
import Component1 from '../components/component1';

test('test component 1', () => {
  render(<Component1 />);
  const Element = screen.getByTestId("test").innerHTML
  expect(Element).toEqual("HelloWorld")
});
