import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from "./Button";

describe('Component <Button />', () => { 
   test('Should be showing title "Action"', () => {
      render(<Button title="Action" key="test" onClick={() => {}}/>)
      const button = screen.getByTestId('button');
      expect(button).toHaveTextContent('Action');
   });   

   test('Should be showing style "Primary"', () => {
      render(<Button styleName={"primary"} title="Action" key="test" onClick={() => {}}/>)      
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('btn btn-primary m-1');
   });

   test('Should be showing style "Link"', () => {
      render(<Button styleName={"link"} title="Action" key="test" onClick={() => {}}/>)      
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('btn btn-link m-1');
   });

   test('Should be showing style "Danger"', () => {
      render(<Button styleName={"danger"} title="Action" key="test" onClick={() => {}}/>)      
      const button = screen.getByTestId('button');
      expect(button).toHaveClass('btn btn-danger m-1');
   });

   test('Should be type "button"', () => {
      render(<Button type='button' styleName={"danger"} title="Action" key="test" onClick={() => {}}/>)      
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('type', 'button');
   });

   test('Should be type "reset"', () => {
      render(<Button type='reset' styleName={"danger"} title="Action" key="test" onClick={() => {}}/>)      
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('type', 'reset');
   });

   test('Should be type "submit"', () => {
      render(<Button type='submit' styleName={"danger"} title="Action" key="test" onClick={() => {}}/>)      
      const button = screen.getByTestId('button');
      expect(button).toHaveAttribute('type', 'submit');
   });

   
   test('Should be fire event "onClick"', () => {
      const mockedOnClick = jest.fn();
      render(<Button type='submit' styleName={"danger"} title="Action" key="test" onClick={mockedOnClick}/>)      
      const button = screen.getByTestId('button');
      userEvent.click(button);
      expect(mockedOnClick).toHaveBeenCalledTimes(1);
   });
});