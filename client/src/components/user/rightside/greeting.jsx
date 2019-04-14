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
                        <section class="hero bg-primary" id="welcome">
                            <div class="container">
                                <div class="inner align-middle wow fadeIn">
                                    {context.state.user ? (
                                        <>
                                            <h2 class="pt-5 text-white text-uppercase">გამარჯობა {context.state.user.firstname} 👋</h2>
                                        </>
                                    ) : null}
                                    <p class="lead mt-5">
                                        ლორემ იპსუმ გცემე მომხდარიყო დაეკოცნა დაჰკარ შვილიშვილები შეცვლით ენაზედაც კეთილდღეობისა <a href="https://wireddots.com">ვმსჯელობდით ხელობაა</a> ენაზედაც, პრობლემის ვიმედოვნებ <a href="https://wireddots.com/licenses">ფერადოვან, არაჩვეუებრვ, ექცა წაიყვანო ჯაყოსკენა</a>.
                                    </p>
                                    <br /><br />

                                    <p class="lead mt-2">
                                        ლორემ იპსუმ გცემე მომხდარიყო დაეკოცნა დაჰკარ შვილიშვილები შეცვლით ენაზედაც კეთილდღეობისა <a href="https://wireddots.com">ვმსჯელობდით ხელობაა</a> ენაზედაც, პრობლემის ვიმედოვნებ <a href="https://wireddots.com/licenses">ფერადოვან, არაჩვეუებრვ, ექცა წაიყვანო ჯაყოსკენა</a>.
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