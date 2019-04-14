import React, { Component } from 'react';
import { MyContext } from '../../../state/State';

class Friends extends Component {
    static contextType = MyContext;
    state = {}
    singleFriend = user => {

        this.setState({ user })

    }

    render() {
        const friends = this.props.diary;
        const user = this.state.user;

        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <section class="bg-style3" id="about">
                            <div class="container">
                                <div class="inner">
                                    <div class="row">
                                        <div class="col-xs-12">
                                            <h2 class="text-white text-uppercase">მეგობრები 👩‍🦱👨‍🦱</h2>
                                            <p class="pt-4">
                                                ლორემ იპსუმ გცემე მომხდარიყო დაეკოცნა დაჰკარ შვილიშვილები შეცვლით ენაზედაც კეთილდღეობისა
                                            </p>
                                        </div>
                                    </div>
                                    <div class="row d-md-flex mt-4 text-center">

                                        {friends ? (
                                            <>
                                                {friends.map(friend => {
                                                    return (

                                                        <div class="col-sm-3 mt-2 wow fadeIn" key={friend._id} onClick={() => this.singleFriend(friend)}>
                                                            <img src="/img/team-1.jpg" alt="Male" class="img-team img-fluid rounded-circle" />
                                                            <h5 class="card-title pt-4">{friend.from.firstname + ' ' + friend.from.lastname}</h5>
                                                        </div>


                                                    )
                                                })}
                                            </>
                                        ) : <p>თქვენი დღიური ცარიელია</p>}




                                    </div>

                                    <div className="mt-4 mb-4">
                                        {user ? (
                                            <>
                                                <h2>{user.from.firstname} {user.from.lastname}</h2>
                                                <div className="diary-single">
                                                    <ul className="friends-questions answers-list">

                                                        {user.question.map(q => {
                                                            return (
                                                                <>
                                                                    <li className="questions-li" key={q}>{q}</li>
                                                                </>
                                                            )
                                                        })}

                                                        <div className="friends-answers">

                                                            {user.answer.map(a => {
                                                                return (
                                                                    <>
                                                                        <li key={a}>{a}</li>
                                                                    </>
                                                                )
                                                            })}
                                                        </div>

                                                    </ul>

                                                </div>
                                            </>
                                        ) : null}
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

export default Friends;