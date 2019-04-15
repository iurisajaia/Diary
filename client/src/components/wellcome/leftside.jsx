import React, { Component } from 'react';
import { MyContext } from '../../state/State';

class LeftSide extends Component {
    static contextType = MyContext;
    state = {}



    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <div class="col-sm-3 bg-primary-dark py-5 col-fixed text-center">
                            <div class="mb-5 text-center">
                                <div className="user-image-box">

                                    {context.state.user ? (
                                        <>
                                            <div class="main-heading">
                                                <img src={`${context.state.user.image}`} alt="" className="user-img" />
                                            </div>
                                            <br /><br />
                                            <a href={`/profile/${context.state.user._id}`}>ჩემი დღიური</a>
                                        </>
                                    ) : <img src='http://subhagamirealestate.com/wp-content/u1.png' alt="" className="user-img" />}


                                </div>



                            </div>
                            <ul class="nav flex-column menu-left mt-5">
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#home">მთავარი</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#rules">წესები</a>
                                </li>

                            </ul>




                        </div>

                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default LeftSide;