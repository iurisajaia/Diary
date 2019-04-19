import React, { Component } from 'react';


class Unvisible extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="unauthorized-box">
                    <div>
                        <span role="img" aria-label="emoji"> 😱 </span>
                        <p className="lead">შიგთავსის მიუწვდომელია </p>

                        <a className="reg-href" href="/">მთავარი გვერდი</a>
                    </div>
                </div>
            </>

        );
    }
}

export default Unvisible;