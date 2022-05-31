import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import axios from "axios";


import Header from "./components/Header";
import Home from "./components/Home";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider
      store={createStore(
        reducers,
        {
          auth: {
            isAuthenticated: jwtToken ? true : false,
            token: jwtToken,
          },
        },
        applyMiddleware(reduxThunk)
      )}
    >
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact strict component={Home} />
          <div className="container">
            <Route
              path="/flights"
              exact
              strict
              component={adminGuard(Flights)}
            />

            <Route
              path="/bookings"
              exact
              strict
              component={adminGuard(Bookings)}
            />
            <Route
              path="/book"
              exact
              strict
              component={authGuard(BookFlight)}
            />
            <Route
              path="/payments"
              exact
              strict
              component={authGuard(Payments)}
            />
            <Route
              path="/successpage"
              exact
              strict
              component={authGuard(SuccessPage)}
            />
            <Route
              path="/cancelpage"
              exact
              strict
              component={authGuard(CancelPage)}
            />
            <Route path="/signup" exact strict component={SignUp} />
            <Route path="/signin" exact strict component={SignIn} />
            <Route
              path="/mybookings"
              exact
              strict
              component={authGuard(MyBookings)}
            />
          </div>
          {/* </Header> */}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
