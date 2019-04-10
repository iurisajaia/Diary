import React, { Component } from "react";

export const MyContext = React.createContext();


class MyProvider extends Component {
  state = {
    questions: []
  };

  addQuestionToDiary = (e) => {
    e.preventDefault()
    var questions = this.state.questions;
    var question = e.target.question.value;
    questions.push(question);
    this.setState({ questions })
    console.log(this.state)
  }

  removeQuestion = e => {
    e.preventDefault();
    var ul = e.target.parentElement.parentElement.parentElement.parentElement;
    var li = e.target.parentElement.parentElement.parentElement;
    li.remove();
  }

  handleRegistration = e => {
    e.preventDefault();

    const data = {
      name: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    console.log(data)
  }

  hadleLogin = e => {
    e.preventDefault();

    const data = {
      email: e.target.loginEmail.value,
      password: e.target.loginPassword.value
    }
    console.log(data)
  }


  componentClicked = () => console.log("clicked");

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

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          responseFacebook: this.responseFacebook,
          componentClicked: this.componentClicked,
          addQuestionToDiary: this.addQuestionToDiary,
          removeQuestion: this.removeQuestion,
          handleRegistration: this.handleRegistration,
          hadleLogin: this.hadleLogin
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;