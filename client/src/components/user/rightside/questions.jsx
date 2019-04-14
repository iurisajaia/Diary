import React, { Component } from 'react';
import { MyContext } from '../../../state/State';


class Questions extends Component {
    static contextType = MyContext;

    state = {}
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <section class="bg-style1" id="work">
                            <div class="container">
                                <div class="inner">
                                    <div class="row">
                                        <div class="col-xs-12 wow fadeIn">
                                            <h2 class="text-white text-uppercase">კითხვები 🧐</h2>

                                        </div>
                                    </div>
                                    <div class="row mt-4">
                                    </div>
                                    <div>

                                        {context.state.questions.length > 0 ? (
                                            <>
                                                <ul class="home-list">
                                                    {context.state.questions.map(question => {
                                                        return (
                                                            <li key={question} >

                                                                {question}
                                                                <span
                                                                    title="წაშლა" className="remove-icon" onClick={context.removeQuestion} data-question={question} >
                                                                    🗑
                                                    </span>
                                                            </li>

                                                        )
                                                    })}
                                                </ul>
                                            </>
                                        ) : <> <p className="custom-alert_danger">შეკითხვები არ არის</p> </>}


                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Questions;