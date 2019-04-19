import React, { Component } from 'react';


class Unauthorized extends Component {
    state = {}
    render() {
        return (
            <>
                <div className="unauthorized-box">
                    <div>
                        <span role="img" aria-label="emoji" >🙊 </span>
                        <p className="lead">შიგთავსის სანახავად საჭიროა
                        <a href="/login"> ავტორიზაცია </a></p>

                        <a className="reg-href" href="/registration">ჯერ არ დარეგისტრირებულხართ? <span role="img" aria-label="emoji"> 🤨  </span></a>
                    </div>
                </div>
            </>

        );
    }
}

export default Unauthorized;