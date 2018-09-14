import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import News from '../components/News';
import NewDetails from '../components/NewDetails';
import Contact from '../components/Contact';


class DieuHuong extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/news" component={News} />
                <Route path="/new/:slug.:id.html" component={NewDetails} />
                <Route path="/contact" component={Contact} />
            </div>
        );
    }
}

export default DieuHuong;