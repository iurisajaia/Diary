import React, { Component } from 'react';
import { MyContext } from '../../state/State';
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

                    this.setState({ questions: res.data.questions.questions, user: res.data.questions })
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
        if (this.state.user) {
            var user = this.state.user;
        }

        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        {context.state.user ? (
                            <>
                                <section class="bg-alt hero p-0">
                                    <div class="container-fluid">
                                        <div class="row">
                                            <>
                                                <div class="col-sm-3 bg-primary-dark py-5 col-fixed text-center">
                                                    <div class="mb-5 text-center">
                                                        <div className="user-image-box">
                                                            <div class="main-heading">
                                                                <img src={`${context.state.user.image}`} alt="" className="user-img" />
                                                            </div>

                                                        </div>



                                                    </div>
                                                    <ul class="nav flex-column menu-left mt-5">
                                                        <li class="nav-item">
                                                            <a class="nav-link page-scroll" href={`/profile/${context.state.user._id}`}>მთავარი</a>
                                                        </li>

                                                    </ul>

                                                    <p class="small">&copy; ი.ს </p>
                                                </div>
                                            </>
                                            <>
                                                <div class="col-sm-9 offset-sm-3 px-0 relative">

                                                    {questions && questions.length > 0 ? (
                                                        <>
                                                            <div className="public-diary-container">
                                                                {user ? (

                                                                    <h3>{user.firstname}</h3>
                                                                ) : null}
                                                                <form className="" onSubmit={context.handlePublicDiary}>
                                                                    {questions.map(question => {
                                                                        return (
                                                                            <div key={question} className="mb-2">
                                                                                <li value={question}>
                                                                                    <span>🧐</span>
                                                                                    {question}
                                                                                </li>
                                                                                <input required type="text"
                                                                                    placeholder="პასუხი : "
                                                                                    className="publicInput" data-pubquestion={question} data-toid={this.props.id} />
                                                                            </div>
                                                                        )
                                                                    })}
                                                                    <button className="btn btn-success">შევსება</button>
                                                                </form>
                                                            </div>
                                                        </>
                                                    ) : <p>დღიური ცარიელია</p>}
                                                </div>
                                            </>
                                        </div>
                                    </div>
                                </section>


                            </>
                        ) : <p>დღიურის სანახავად აუცილებელია ავტორიზაცია</p>}
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default PublicDiary;