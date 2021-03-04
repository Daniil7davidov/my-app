import { render, screen, fireEvent } from '@testing-library/react';
import Component3 from '../components/component3';

test('test component 3', () => {
  render(<Component3 />);
  fireEvent.click(screen.getByTestId("button"))
  let Element = screen.getByTestId("result").innerHTML
  expect(Element).toEqual('1')
  fireEvent.click(screen.getByTestId("button"))
  Element = screen.getByTestId("result").innerHTML
  expect(Element).toEqual('2')
});
