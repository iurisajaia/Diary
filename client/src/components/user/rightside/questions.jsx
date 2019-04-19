import React, { Component } from 'react';
import { MyContext } from '../../../state/State';
import Modal from './modal';

class Questions extends Component {
    static contextType = MyContext;

    state = {}
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <section className="bg-style1 relative" id="work">
                            <div className="container">
                                <div className="inner">
                                    <div className="row">
                                        <div className="col-xs-12 wow fadeIn">
                                            <h2 className="text-white text-uppercase">კითხვები
                                            <span role="img" aria-label="emoji"> 🧐 </span></h2>

                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                    </div>
                                    <div>

                                        {context.state.questions.length > 0 ? (
                                            <>
                                                <ul className="home-list">
                                                    {context.state.questions.map(question => {
                                                        return (
                                                            <li key={question} >

                                                                {question}
                                                                <span
                                                                    title="წაშლა" className="remove-icon" onClick={context.removeQuestion} data-question={question} >
                                                                    <span role="img" aria-label="emoji">
                                                                        🗑
                                                                    </span>
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
                            <Modal />
                        </section>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Questions;