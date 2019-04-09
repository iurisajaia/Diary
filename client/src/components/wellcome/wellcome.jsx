import React, { Component } from 'react';
// import { Link } from '@reach/router'
import FacebookLogin from "react-facebook-login";
import { MyContext } from '../../state/State';
class Wellcome extends Component {
    static contextType = MyContext;



    render() {
        // console.log(this.context)
        var fbContent = (
            <FacebookLogin
                appId="652531571871133"
                cookie={true}
                xfbml={true}
                version='2.8'
                autoLoad={false}
                fields="name,email,friends,picture"
                scope="public_profile,email,user_friends"
                disableMobileRedirect={true}
                onClick={this.context.componentClicked}
                callback={this.context.responseFacebook}
            />
        );
        return (
            <>
                <div className="diary-wellcome-container">
                    <div className="wellcome-box"></div>
                    <div className="wellcome-box"></div>
                    <div className="wellcome-box_double"></div>
                    <div className="wellcome-box"></div>
                    <div className="wellcome-box"></div>
                    <div className="wellcome-box"></div>
                    <div className="wellcome-box"></div>
                    <div className="login-box">
                        {fbContent}
                    </div>
                </div>
            </>
        );
    }
}

export default Wellcome;