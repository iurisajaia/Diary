import React, { Component } from 'react';


class Unauthorized extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="unauthorized-box">
                    <div>
                        🙊
                        <p className="lead">შიგთავსის სანახავად საჭიროა
                        <a href="/login"> ავტორიზაცია </a></p>

                        <a className="reg-href" href="/registration">ჯერ არ დარეგისტრირებულხართ?  🤨</a>
                    </div>
                </div>
            </>

        );
    }
}

export default Unauthorized;