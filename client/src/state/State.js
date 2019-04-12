import React, { Component } from "react";
import axios from 'axios';
import jwt_decode from "jwt-decode";
export const MyContext = React.createContext();


class MyProvider extends Component {
  state = {
    questions: []
  };

  componentDidMount() {
    const token = localStorage.getItem("user");
    if (token) {
      axios
        .get("/profile/:id", {
          headers: {
            "x-auth-token": token
          }
        })
        .then(res => {
          var user = res.data.user
          this.setState({ user, questions: user.questions })
          console.log(this.state)
        })
        .catch(err => {
          console.log(err);
        });


    }
  }

  addQuestionToDiary = (e) => {
    e.preventDefault()

    var data = {
      id: this.state.user._id,
      question: e.target.question.value
    };


    fetch('/add-question', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.user) {
          this.setState({ user: res.user, questions: res.user.questions })
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  removeQuestion = e => {
    e.preventDefault();
    var li = e.target.parentElement.parentElement.parentElement;
    var question = e.target.parentElement.dataset.question;


    var data = {
      id: this.state.user._id,
      question: question
    };


    fetch('/remove-question', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(res => {
        if (res.user) {
          li.remove();
        }
      })
      .catch(error => {
        console.error(error);
      });
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
        if (res.token) {
          localStorage.setItem("user", res.token);
          var decoded = jwt_decode(res.token);
          this.setState({ user: decoded })
          window.location = `/profile/${decoded._id}`;
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