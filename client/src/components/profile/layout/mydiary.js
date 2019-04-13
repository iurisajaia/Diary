import React, { Component } from 'react';
import { MyContext } from '../../../state/State'


class MyDiary extends Component {
    static contextType = MyContext;
    state = {}

    copyLink = () => {
        var copyText = document.getElementById("shareLink");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }

    render() {

        return (
            <MyContext.Consumer>
                {context => (
                    <>


                        {context.state.user ? (
                            <>
                                {context.state.user.questions.length > 0 ? (
                                    <>
                                        {context.state.user.questions.map(q => {
                                            return (
                                                <li className={q}>{q}</li>
                                            )
                                        })}
                                    </>
                                ) : <p>დღიური ცარიელია</p>}
                                <div className="share-box">
                                    <p id="shareLink">{`http://localhost:3000/diary/${context.state.user._id}`}</p>
                                    <button onClick={this.copyLink}>Copy text</button>
                                </div>
                            </>
                        ) : null}
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default MyDiary;