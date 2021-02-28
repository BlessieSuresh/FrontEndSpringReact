import App from '../App';
import React from 'react';
import ReactDOM from 'react-dom';

import { render } from '@testing-library/react';

describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
});

test('renders the link of the nav bar', () => {
  //render(<BrowserRouter><AppNavbar/></BrowserRouter>);
  // const element = screen.getByText("Github for back");
  //expect(element).toBeInTheDocument();

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

});

test('renders the link of the nav bar2', () => {
  //render(<BrowserRouter><AppNavbar/></BrowserRouter>);
  // const element = screen.getByText("Github for back");
  //expect(element).toBeInTheDocument();

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

});
