import React, { Component } from 'react';
import Greeting from './greeting';
import Questions from './questions';
import Friends from './friends';

class Content extends Component {
    state = {}
    render() {
        return (
            <div class="col-sm-9 offset-sm-3 px-0">

                <Greeting />
                <Questions />
                <Friends />

            </div>
        );
    }
}

export default Content;