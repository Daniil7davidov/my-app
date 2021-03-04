import { render, screen, fireEvent } from '@testing-library/react';
import Component4 from '../components/component4';

test('test component 4', () => {
  render(<Component4 />);
  fireEvent.click(screen.getByTestId("plusone"))
  let Element = screen.getByTestId("result").innerHTML
  expect(Element).toEqual('1')
  fireEvent.click(screen.getByTestId("plusone"))
  Element = screen.getByTestId("result").innerHTML
  expect(Element).toEqual('2')
  fireEvent.click(screen.getByTestId("minusone"))
  Element = screen.getByTestId("result").innerHTML
  expect(Element).toEqual('1')
  fireEvent.click(screen.getByTestId("setzero"))
  Element = screen.getByTestId("result").innerHTML
  expect(Element).toEqual('0')
 
});
