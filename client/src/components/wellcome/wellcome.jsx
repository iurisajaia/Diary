import React, { Component } from 'react';
import { Link } from '@reach/router'
import FacebookLogin from "react-facebook-login";

class Wellcome extends Component {
    state = {
        isLoggedIn: false,
        userID: "",
        name: "",
        email: "",
        picture: ""
    };

    responseFacebook = response => {
        console.log(response);

        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
        });
    };

    componentClicked = () => console.log("clicked");
    render() {

        let fbContent;

        if (this.state.isLoggedIn) {
            fbContent = (

                <div
                    style={{
                        width: "400px",
                        margin: "auto",
                        background: "#f4f4f4",
                        padding: "20px"
                    }}
                >
                    <img src={this.state.picture} alt={this.state.name} />
                    <h2>Welcome {this.state.name}</h2>
                    Email: {this.state.email}
                </div>
            );
        } else {
            fbContent = (
                <FacebookLogin
                    appId="652531571871133"
                    cookie={true}
                    xfbml={true}
                    version='2.8'
                    autoLoad={false}
                    fields="name,email,friends,picture"
                    scope="public_profile,email,user_friends"
                    disableMobileRedirect={true}
                    onClick={this.componentClicked}
                    callback={this.responseFacebook}
                />
            );
        }

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
                        {/* <Link to='/profile' className="fb-login">Continue As Dexter</Link> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Wellcome;