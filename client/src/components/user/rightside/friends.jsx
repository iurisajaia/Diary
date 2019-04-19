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
                        <section className="bg-style3" id="about">
                            <div className="container">
                                <div className="inner">
                                    <div className="row">
                                        <div className="col-xs-12">
                                            <h2 className="text-white text-uppercase">მეგობრები
                                            <span role="img" aria-label="emoji">
                                                    👩‍🦱👨‍🦱
                                            </span>
                                            </h2>

                                        </div>
                                    </div>
                                    <div className="row d-md-flex mt-4 text-center">

                                        {friends && friends.length > 0 ? (
                                            <>
                                                {friends.map(friend => {
                                                    return (

                                                        <div className="col-sm-3 mt-2 wow fadeIn friends-item" title={friend.from.firstname} key={friend._id} onClick={() => this.singleFriend(friend)}>
                                                            <img src={`${friend.from.image}`} alt={friend.from.firstname} className="img-team img-fluid rounded-circle" />
                                                            <h5 className="card-title pt-4">{friend.from.firstname + ' ' + friend.from.lastname}</h5>
                                                        </div>


                                                    )
                                                })}
                                            </>
                                        ) : <p className="custom-alert_danger">მეგობრების სია ცარიელია</p>}




                                    </div>

                                    <div className="mt-4 mb-4">
                                        {user ? (
                                            <>
                                                <div className="text-center">

                                                    <h2>{user.from.firstname} {user.from.lastname}</h2>
                                                </div>
                                                <div className="diary-single">
                                                    <ul className="friends-questions answers-list">

                                                        {user.combined.map(q => {
                                                            return (
                                                                <>

                                                                    <li className="questions-li" key={q}>{q}</li>



                                                                </>
                                                            )
                                                        })}



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