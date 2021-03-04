import { fireEvent, render, screen } from '@testing-library/react';
import Component6 from '../components/component6';

test('test component 6', () => {
  render(<Component6 />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, {target: {value: 0}})
  fireEvent.click(screen.getByRole("button"))
  fireEvent.change(input, {target: {value: 1}})
  fireEvent.click(screen.getByRole("button"))

  const Elements = screen.getAllByRole("listitem")
  for (let i = 0; i < 2; i++){
      expect(parseInt(Elements[i].innerHTML)).toEqual(i)
  }   
});
