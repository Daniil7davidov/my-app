import { render, screen } from '@testing-library/react';
import Component5 from '../components/component5';

test('test component 5', () => {
  render(<Component5 />);
  const Elements = screen.getAllByRole("listitem")
  for (let i = 0; i < 6; i++){
      expect(parseInt(Elements[i].innerHTML)).toEqual(i)
  }   
});
