import React, { Component } from 'react';
import { MyContext } from '../../state/State';

class Section1 extends Component {
    static contextType = MyContext;
    state = {}
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <section className="hero bg-style1" id="rules">
                            <div className="container">
                                <div className="inner align-middle wow fadeIn">

                                    <p className="lead mt-1">
                                        ინსტრუქცია  : ავტორიზაციის შემდეგ მოხვდებით პირად კაბინეტში. <br /><br /> მარცხენა მხარეს შეგიძლიათ შეცვალოთ პროფილის ფოტო.
                                        <br /><br />
                                        მარჯვენა მხარეს მეორე სექციაში შეგიძლიათ დაამატოთ კითხვები თქვენი დღიურისთვის
                                        <br /><br />
                                        მესამე სექციაში გამოჩნდება მეგობრები, რომლებმაც შეგივსეს დღიური
                                        <br /><br />
                                        მარცხენა მხარეს მენიუში დაინახავთ წარწერას "ჩემი დღიური", ეს არის თქვენი დღიურის ლინკი, რომელიც უნდა გაუგზავნოთ მეგობრებს (გაზიარების ფუნქციები დაემატება)
                                    </p>
                                    <p className="alert alert-warning">ფბ ავტორიზაცია ჯერ არ მუშაობს</p>


                                </div>
                            </div>
                        </section>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Section1;