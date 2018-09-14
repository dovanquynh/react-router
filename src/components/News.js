import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Data from './Data.json';

class News extends Component {
   constructor(props) {
       super(props);
   }
   
    render() {
        return (
            <div>
                <header className="masthead text-center text-white d-flex">
                    <div className="container my-auto">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <h1 className="text-uppercase">
                                    <strong>Danh sách tin</strong>
                                </h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                </header>
                {/* Main */}
                <div className="container">
                    <div className="row mt-3">
                        {
                            Data.map((value, key) => {
                                return (
                                    <NewsItem
                                        key={key}
                                        NewId={value.id}
                                        image={value.image}
                                        title={value.title}
                                        quote={value.quote}
                                    >  </NewsItem>
                                )
                            })
                        }
                    </div>
                </div>
                {/* End Main */}
            </div>

        );
    }
}

export default News;