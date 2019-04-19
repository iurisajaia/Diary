import React, { Component } from 'react';
import { MyContext } from '../../../state/State';

class User extends Component {
    static contextType = MyContext;
    state = {}

    handleLogout = () => {
        localStorage.clear()
        window.location = '/'
    }

    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <div className="col-sm-3 bg-primary-dark py-5 col-fixed text-center">
                            <div className="mb-5 text-center">
                                <div className="user-image-box">
                                    <div className="main-heading">
                                        <img src={`${context.state.user.image}`} alt="" className="user-img" />
                                    </div>
                                    <form onSubmit={context.updateUserImage} className="mt-2 imageForm">

                                        <div className="file-div">
                                            <div className="form-group file-area">

                                                <input type="file" name="image" id="image" required="required" multiple="multiple" />
                                                <div className="file-dummy">
                                                    <div className="default">
                                                    <span role="img" aria-label="emoji">
                                                    📷
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <input
                                                type="hidden"
                                                id="user"
                                                name="user"
                                                value={context.state.user._id}
                                            />
                                        </div>
                                        <div>
                                            <button className="btn btn-success ">განახლება</button>
                                        </div>
                                    </form>
                                </div>



                            </div>
                            <ul className="nav flex-column menu-left mt-5">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#welcome" rel="noopener">მთავარი</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#work" rel="noopener">კითხვები</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#about" rel="noopener">მეგობრები</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" target="_blank" href={`/diary/${context.state.user._id}`} rel="noopener">ჩემი დღიური <i className="fas fa-external-link-alt"></i></a>
                                </li>
                            </ul>

                            <button onClick={this.handleLogout} className="btn btn-warning">გასვლა</button>
                            {/* <p className="mt-4 social-icon">
                                <a href="https://twitter.com/" target="_blank"><em className="ion-social-twitter text-twitter-alt icon-sm mr-3"></em></a>
                                <a href="https://github.com/" target="_blank"><em className="ion-social-github text-github-alt icon-sm mr-3"></em></a>
                                <a href="https://www.linkedin.com/" target="_blank"><em className="ion-social-linkedin text-linkedin-alt icon-sm mr-3"></em></a>
                            </p> */}
                            <p className="small">&copy; ი.ს </p>
                        </div>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default User;