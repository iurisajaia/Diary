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
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value
    }


    fetch('/registration', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.msg) {
          this.setState({ errors: res.msg })
          console.log(this.state.errors)
        } else {
          this.setState({ success: 'თქვენ წარმტებით გაიარეთ რეგისტრაცია', errors: null })
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  hadleLogin = e => {
    e.preventDefault();

    const data = {
      email: e.target.loginEmail.value,
      password: e.target.loginPassword.value
    }

    fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        if (res.user) {
          console.log(res.user)
        }
      })
      .catch(error => {
        console.error(error);
      });
  }




  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
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