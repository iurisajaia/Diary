import React, { Component } from 'react';
import { MyContext } from '../../state/State';

class Section1 extends Component {
    static contextType = MyContext;
    state = {}
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <section className="hero bg-style3" id="contact">
                            <div className="container">
                                <div className="inner align-middle wow fadeIn">

                                    <p className="lead mt-1">
                                        აქ იქნება რამე...
                                    </p>


                                </div>
                            </div>
                        </section>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Section1;