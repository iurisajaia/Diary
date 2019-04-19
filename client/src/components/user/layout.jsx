import React, { Component } from 'react';
import User from './leftside/user';
import Content from './rightside/content';
import { MyContext } from '../../state/State';
import Unauthorized from './unauthorized/unauthorized';
import Unvisible from './unauthorized/unvisible'

class UserLayout extends Component {
    static contextType = MyContext;

    state = {}

    componentDidMount() {
        fetch(`/profile/${this.props.id}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }
        })
            .then(res => res.json())
            .then(res => {
                if (res.diary) {

                    this.setState({ diary: res.diary })
                }
            })
            .catch(error => {
                console.error(error);
            });
    }



    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        {context.state.user ? (
                            <>
                                {this.props.id === context.state.user._id ? (
                                    <section className="bg-alt hero p-0">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <User />
                                                <Content diary={this.state.diary} />
                                            </div>
                                        </div>
                                    </section>
                                ) : <Unvisible />}
                            </>
                        ) : <Unauthorized />}
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default UserLayout;