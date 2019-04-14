import React, { Component } from 'react';
import { MyContext } from '../../../state/State';

class User extends Component {
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
                                    <div class="main-heading">
                                        <img src={`${context.state.user.image}`} alt="" className="user-img" />
                                    </div>
                                    <form onSubmit={context.updateUserImage} className="mt-2 imageForm">

                                        <div className="file-div">
                                            <div class="form-group file-area">

                                                <input type="file" name="image" id="image" required="required" multiple="multiple" />
                                                <div class="file-dummy">
                                                    <div class="default">📷</div>
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
                            <ul class="nav flex-column menu-left mt-5">
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#welcome">მთავარი</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#work">კითხვები</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" href="#about">მეგობრები</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link page-scroll" target="_blank" href={`/diary/${context.state.user._id}`}>ჩემი დღიური <i class="fas fa-external-link-alt"></i></a>
                                </li>
                            </ul>
                            <p class="mt-4 social-icon">
                                <a href="https://twitter.com/" target="_blank"><em class="ion-social-twitter text-twitter-alt icon-sm mr-3"></em></a>
                                <a href="https://github.com/" target="_blank"><em class="ion-social-github text-github-alt icon-sm mr-3"></em></a>
                                <a href="https://www.linkedin.com/" target="_blank"><em class="ion-social-linkedin text-linkedin-alt icon-sm mr-3"></em></a>
                            </p>
                            <p class="small">&copy; ი.ს </p>
                        </div>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default User;