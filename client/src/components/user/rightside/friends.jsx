import React, { Component } from 'react';

class Friends extends Component {
    state = {}
    render() {
        return (
            <section class="bg-style3" id="about">
                <div class="container">
                    <div class="inner">
                        <div class="row">
                            <div class="col-xs-12">
                                <h2 class="text-white text-uppercase">მეგობრები 🙌</h2>
                                <p class="pt-4">
                                    ლორემ იპსუმ გცემე მომხდარიყო დაეკოცნა დაჰკარ შვილიშვილები შეცვლით ენაზედაც კეთილდღეობისა
                                            </p>
                            </div>
                        </div>
                        <div class="row d-md-flex mt-4 text-center">
                            <div class="col-sm-3 mt-2 wow fadeIn">
                                <img src="/img/team-1.jpg" alt="Male" class="img-team img-fluid rounded-circle" />
                                <h5 class="card-title pt-4">John Deo</h5>
                                <p class="card-text">Art Director</p>
                            </div>
                            <div class="col-sm-3 mt-2 wow fadeInUp">
                                <img src="img/team-2.jpg" alt="Male" class="img-team img-fluid rounded-circle" />
                                <h5 class="card-title pt-4">Brandon Lee</h5>
                                <p class="card-text">Graphics Designer</p>
                            </div>
                            <div class="col-sm-3 mt-2 wow fadeInRight">
                                <img src="img/team-3.jpg" alt="Male" class="img-team img-fluid rounded-circle" />
                                <h5 class="card-title pt-4">Inza Fererri</h5>
                                <p class="card-text">Product Designer</p>
                            </div>
                            <div class="col-sm-3 mt-2 wow fadeInRight">
                                <img src="img/team-3.jpg" alt="Male" class="img-team img-fluid rounded-circle" />
                                <h5 class="card-title pt-4">Inza Fererri</h5>
                                <p class="card-text">Product Designer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default Friends;