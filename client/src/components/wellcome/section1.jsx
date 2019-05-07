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
                        <section className="hero bg-primary" id="home">
                            <div className="container">
                                <div className="inner align-middle wow fadeIn">
                                    {context.state.user ? (
                                        <>
                                            <h2 className="pt-5 text-white text-uppercase">გამარჯობა {context.state.user.firstname}
                                                <span role="img" aria-label="emoji">
                                                    👋
                                            </span>
                                            </h2>
                                        </>
                                    ) : (
                                            <>
                                                <h2 className="pt-5 text-white text-uppercase">გამარჯობა უცნობო
                                                <span role="img" aria-label="emoji">
                                                        👋
                                                 </span>
                                                </h2>
                                            </>
                                        )}
                                    <p className="lead mt-5">
                                        შექმენი საკუთარი მეგობრობის დღიური და შესავსებად გაუზიარო მეგობრებს.


                                    </p>
                                    <br />
                                    <p className="lead mt-1">
                                        <span role="img" aria-label="emoji">
                                            👉
                                    </span>
                                        გაიარე
                                        <a href="/login"> ავტორიზაცია</a>  ან <a href="/registration">დარეგისტრირდი</a>
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