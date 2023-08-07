import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


describe("Header page test cases", () => {
  it("Should render header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    
    const loginButton  = screen.getByRole("button");

    expect(loginButton).toBeInTheDocument();



  });
});
