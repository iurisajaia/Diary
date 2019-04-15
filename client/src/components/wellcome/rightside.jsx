import React, { Component } from 'react';
import { MyContext } from '../../state/State';
import Section1 from './section1';
import Section2 from './section2';

class RightSide extends Component {
    static contextType = MyContext;
    state = {}



    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <div class="col-sm-9 offset-sm-3 px-0 relative">
                            <Section1 />
                            <Section2 />
                        </div>

                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default RightSide;