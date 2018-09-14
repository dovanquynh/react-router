import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <header className="masthead text-center text-white d-flex">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase">
                                    <strong>Your Favorite Source of Free Bootstrap Themes</strong>
                                </h1>
                                <hr />
                            </div>
                            <div className="col-lg-8 mx-auto">
                                <p className="text-faded mb-5">Start Bootstrap can help you build better websites using the Bootstrap CSS framework!
            Just download your template and start going, no strings attached!</p>
                                <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="bg-primary" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto text-center">
                                <h2 className="section-heading text-white">We've got what you need!</h2>
                                <hr className="light my-4" />
                                <p className="text-faded mb-4">Start Bootstrap has everything you need to get your new website up and running in no
                                  time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use.
            No strings attached!</p>
                                <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Get Started!</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        );
    }
}

export default Home;