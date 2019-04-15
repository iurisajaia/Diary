import React, { Component } from 'react';


class NotFound extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="unauthorized-box">
                    <div>
                        👻
                        <p className="lead">გვერდი ვერ მოიძებნა </p>

                        <a className="reg-href" href="/">მთავარი გვერდი</a>
                    </div>
                </div>
            </>

        );
    }
}

export default NotFound;