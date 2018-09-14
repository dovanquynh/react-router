import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import DieuHuong from '../router/DieuHuong';




class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <DieuHuong />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
