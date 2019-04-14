import React, { Component } from 'react';


class User extends Component {
    state = {}
    render() {
        return (
            <div class="col-sm-3 bg-primary-dark py-5 col-fixed text-center">
                <div class="mb-5 text-center">
                    <h1 class="main-heading">Face</h1>
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
                        <a class="nav-link page-scroll" target="_blank" href="/about">ჩემი დღიური</a>
                    </li>
                </ul>
                <p class="mt-4 social-icon">
                    <a href="https://twitter.com/" target="_blank"><em class="ion-social-twitter text-twitter-alt icon-sm mr-3"></em></a>
                    <a href="https://github.com/" target="_blank"><em class="ion-social-github text-github-alt icon-sm mr-3"></em></a>
                    <a href="https://www.linkedin.com/" target="_blank"><em class="ion-social-linkedin text-linkedin-alt icon-sm mr-3"></em></a>
                </p>
                <p class="small">&copy; ი.ს </p>
            </div>
        );
    }
}

export default User;