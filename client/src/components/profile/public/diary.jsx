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
                }

            })
            .catch(err => {
                console.log(err);
            });

    }
    render() {

        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        {context.state.user ? (
                            <>
                                {this.state.questions.length > 0 ? (
                                    <>
                                        <ul className="list-group">
                                            {this.state.questions.map(question => {
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