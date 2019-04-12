import React, { Component } from 'react';
import { MyContext } from '../../../state/State';
import axios from 'axios';

class PublicDiary extends Component {
    state = {}
    componentDidMount() {

        const data = {
            id: this.props.id
        }

        axios
            .get(`/diary/${this.props.id}`, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => {
                if (res.data.questions) {

                    this.setState({ questions: res.data.questions })
                    console.log(this.state)
                }

            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {
        if (this.state.questions) {

            var questions = this.state.questions;
        }
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        {context.state.user ? (
                            <>

                                {questions && questions.length > 0 ? (
                                    <>
                                        <ul className="list-group">
                                            {questions.map(question => {
                                                return (

                                                    <li key={question} className="list-group-item">

                                                        {question}

                                                    </li>

                                                )
                                            })}
                                        </ul>
                                    </>
                                ) : <p>დღიური ცარიელია</p>}

                            </>
                        ) : <p>დღიურის სანახავად აუცილებელია ავტორიზაცია</p>}
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default PublicDiary;