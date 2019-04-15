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
                        <section class="hero bg-style1" id="rules">
                            <div class="container">
                                <div class="inner align-middle wow fadeIn">

                                    <p class="lead mt-1">
                                        აქ იქნება საიტის მუშაობის პრინციპი და ზოგადი წესები
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