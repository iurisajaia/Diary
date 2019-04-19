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
                        <div className="col-sm-3 bg-primary-dark py-5 col-fixed text-center">
                            <div className="mb-5 text-center">
                                <div className="user-image-box">

                                    {context.state.user ? (
                                        <>
                                            <div className="main-heading">
                                                <img src={`${context.state.user.image}`} alt="" className="user-img" />
                                            </div>
                                            <br /><br />
                                            <a href={`/user/${context.state.user._id}`}>ჩემი დღიური</a>
                                        </>
                                    ) : <img src='http://subhagamirealestate.com/wp-content/u1.png' alt="" className="user-img" />}


                                </div>



                            </div>
                            <ul className="nav flex-column menu-left mt-5">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#home">მთავარი</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#rules">წესები</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#contact">რამე გვერდი</a>
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