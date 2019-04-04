import React, { Component } from 'react';
import Header from './header/header'
import DiaryArea from './diaryarea';
class Wall extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="container mt-2 profile-container">
                    <Header />
                    <DiaryArea />
                </div>
            </>
        );
    }
}

export default Wall;