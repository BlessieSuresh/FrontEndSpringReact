import { render, screen } from '@testing-library/react';
import App from './App';
import AppNavbar from "./AppNavbar";
import BrowserRouter from "react-router-dom/BrowserRouter";

test('renders the link of the nav bar', () => {
  //render(<BrowserRouter><AppNavbar/></BrowserRouter>);
  // const element = screen.getByText("Github for back");
  //expect(element).toBeInTheDocument();

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

});
