import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRedirect: false
        }

    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({
            isRedirect: true
        });
    }
    render() {
        if (this.state.isRedirect === true) {
            <Redirect to="/" />;
        }

        return (
            <div>
                <header className="masthead text-center text-white d-flex">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase">
                                    <strong>Liên hệ</strong>
                                </h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main */}
                <div className="col-lg-8 col-md-10 mx-auto">
                    <form name="sentMessage" id="contactForm" noValidate>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Name</label>
                                <input type="text" className="form-control" placeholder="Name" id="name" required data-validation-required-message="Please enter your name." aria-invalid="false" />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Email Address</label>
                                <input type="email" className="form-control" placeholder="Email Address" id="email" required data-validation-required-message="Please enter your email address." />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group col-xs-12 floating-label-form-group controls">
                                <label>Phone Number</label>
                                <input type="tel" className="form-control" placeholder="Phone Number" id="phone" required data-validation-required-message="Please enter your phone number." />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <div className="control-group">
                            <div className="form-group floating-label-form-group controls">
                                <label>Message</label>
                                <textarea rows={5} className="form-control" placeholder="Message" id="message" required data-validation-required-message="Please enter a message." defaultValue={""} />
                                <p className="help-block text-danger" />
                            </div>
                        </div>
                        <br />
                        <div id="success" />
                        <div className="form-group">
                            <button type="button" className="btn btn-primary" id="sendMessageButton" onClick={(event) => this.submitForm(event)} >Send</button>
                        </div>
                    </form>
                </div>
            </div>

        );
    }
}

export default Contact;