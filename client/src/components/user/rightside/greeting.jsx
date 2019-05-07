import React, { Component } from 'react';
import { MyContext } from '../../../state/State';

class Greeting extends Component {
    static contextType = MyContext;

    state = {}
    render() {
        return (
            <MyContext.Consumer>
                {context => (
                    <>
                        <section className="hero bg-primary" id="welcome">
                            <div className="container">
                                <div className="inner align-middle wow fadeIn">
                                    {context.state.user ? (
                                        <>
                                            <h2 className="pt-5 text-white text-uppercase">გამარჯობა {context.state.user.firstname} 👋</h2>
                                        </>
                                    ) : null}
                                    <p className="lead mt-5">
                                        ლორემ იპსუმ გცემე მომხდარიყო დაეკოცნა დაჰკარ შვილიშვილები შეცვლით ენაზედაც კეთილდღეობისა <a href="#">ვმსჯელობდით ხელობაა</a> ენაზედაც, პრობლემის ვიმედოვნებ <a href="#">ფერადოვან, არაჩვეუებრვ, ექცა წაიყვანო ჯაყოსკენა</a>.
                                    </p>
                                    <br /><br />

                                    <p className="lead mt-2">
                                        ლორემ იპსუმ გცემე მომხდარიყო დაეკოცნა დაჰკარ შვილიშვილები შეცვლით ენაზედაც კეთილდღეობისა <a href="#">ვმსჯელობდით ხელობაა</a> ენაზედაც, პრობლემის ვიმედოვნებ <a href="#">ფერადოვან, არაჩვეუებრვ, ექცა წაიყვანო ჯაყოსკენა</a>.
                                    </p>


                                </div>
                            </div>
                        </section>
                    </>
                )}
            </MyContext.Consumer>
        );
    }
}

export default Greeting;