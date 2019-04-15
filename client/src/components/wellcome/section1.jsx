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
                        <section class="hero bg-primary" id="home">
                            <div class="container">
                                <div class="inner align-middle wow fadeIn">
                                    {context.state.user ? (
                                        <>
                                            <h2 class="pt-5 text-white text-uppercase">გამარჯობა {context.state.user.firstname} 👋</h2>
                                        </>
                                    ) : (
                                            <>
                                                <h2 class="pt-5 text-white text-uppercase">გამარჯობა უცნობო 👋</h2>
                                            </>
                                        )}
                                    <p class="lead mt-5">
                                        შენ მოხვდი მეგობრობის დღიურში, საიდანაც შეგიძლია შექმნა საკუთარი დღიური და შესავსებად გაუზიარო მეგობრებს.


                                    </p>
                                    <br />
                                    <p class="lead mt-1">
                                        👉  გაიარე
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