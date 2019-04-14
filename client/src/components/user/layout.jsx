import React, { Component } from 'react';
import User from './leftside/user';
import Content from './rightside/content';
class UserLayout extends Component {
    state = {}
    render() {
        return (
            <>
                <section class="bg-alt hero p-0">
                    <div class="container-fluid">
                        <div class="row">
                            <User />
                            <Content />
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default UserLayout;