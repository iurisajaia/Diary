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
        console.log(this.props.id)
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        {context.state.user ? (
                            <>

                                {questions && questions.length > 0 ? (
                                    <>
                                        <form className="list-group" onSubmit={context.handlePublicDiary}>
                                            {questions.map(question => {
                                                return (
                                                    <div key={question} className="list-group-item mb-1">
                                                        <li value={question}>

                                                            {question}

                                                        </li>
                                                        <input type="text" className="publicInput" data-pubquestion={question} data-toid={this.props.id} />
                                                    </div>

                                                )
                                            })}
                                            <button className="btn btn-success">შევსება</button>
                                        </form>
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