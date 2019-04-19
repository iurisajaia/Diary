import React, { Component } from 'react';
import { MyContext } from '../../state/State';
import LeftSide from './leftside';
import RightSide from './rightside';

class FrontPage extends Component {
    state = {}
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>


                        <section className="bg-alt hero p-0">
                            <div className="container-fluid">
                                <div className="row">
                                    <LeftSide />
                                    <RightSide />
                                </div>
                            </div>
                        </section>

                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default FrontPage;