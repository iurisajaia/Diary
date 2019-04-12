import React, { Component } from 'react';
import { MyContext } from '../../../state/State';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class PublicDiary extends Component {
    state = {}
    componentDidMount() {
        console.log(this.props.id)
    }
    render() {
        // var user = this.context.state.user;

        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        {context.state.user ? (
                            <>
                                <ul className="list-group">
                                    {context.state.user.questions.map(question => {
                                        return (

                                            <li key={question} className="list-group-item">

                                                {question}

                                            </li>

                                        )
                                    })}
                                </ul>
                            </>
                        ) : <p>some error</p>}
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default PublicDiary;