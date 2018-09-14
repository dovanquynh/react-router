import React, { Component } from 'react';
import Data from './Data.json';
import NewsRelated from './NewsRelated';

class NewDetails extends Component {
    render() {
        var count = 0;
        return (
            
            <div>
                <header className="masthead text-center text-white d-flex">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase">
                                    <strong>Tin </strong>
                                </h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                </header>
                {
                    Data.map((value, key) => {
                        if (value.id == this.props.match.params.id) {
                            return (

                                <div className="jumbotron jumbotron-fluid text-center" key={key}>
                                    <div className="container">
                                        <img src={value.image} alt="" className="img-fluid" />
                                        <h2 className="lead">{value.title}</h2>
                                        <hr />
                                        {
                                            value.description
                                        }
                                    </div>
                                </div>

                            )
                        }
                    })
                }
                <div className="container">
                    <h4 className="card-title text-center">Tin lien quan</h4>
                    <div className="row">
                        <div className="card-deck">
                            {
                                
                                Data.map((value, key) => {
                                    if (value.id != this.props.match.params.id) {
                                        if (count <= 4) {
                                            count++;
                                            return (
                                                <NewsRelated
                                                    key={key}
                                                    NewId={value.id}
                                                    image={value.image}
                                                    title={value.title}
                                                    quote={value.quote}
                                                />
                                            )
                                        }
                                    }


                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewDetails;