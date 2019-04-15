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
      var decoded = jwt_decode(token);
      console.log(decoded)
      this.setState({ user: decoded, questions: decoded.questions })
      console.log(this.state)
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
        if (res.token) {
          var decoded = jwt_decode(res.token);
          this.setState({ user: decoded, questions: decoded.questions })
          localStorage.setItem('user', res.token)
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  removeQuestion = e => {
    e.preventDefault();
    var li = e.target.parentElement.parentElement.parentElement;
    var question = e.target.dataset.question;


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
        if (res.token) {
          var decoded = jwt_decode(res.token);
          this.setState({ user: decoded, questions: decoded.questions })
          localStorage.setItem('user', res.token)
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

  handlePublicDiary = e => {
    e.preventDefault();
    var myForm = e.target;
    var data = {
      question: [],
      answer: [],
      from: this.state.user._id,
      to: ''
    }
    for (var i = 0; i < myForm.length - 1; i++) {
      data.question.push(myForm.elements[i].dataset.pubquestion);
      data.answer.push(myForm.elements[i].value);
      data.to = myForm.elements[i].dataset.toid;
    }
    fetch('/handle-diary', {
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
      })
      .catch(error => {
        console.error(error);
      });
  }

  // Update Users Image
  updateUserImage = e => {
    e.preventDefault();
    const data = new FormData();

    data.append("user", e.target.user.value);
    data.append("image", e.target.image.files[0]);

    axios({
      method: "POST",
      url: "/add-user-image",
      data: data,
      config: { headers: { "Content-Type": "multpart/form-data" } }
    })
      .then(res => {
        console.log(res)
        if (res.data.token) {
          localStorage.setItem("user", res.data.token);
          var decoded = jwt_decode(res.data.token);
          this.setState({ user: decoded })
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          addQuestionToDiary: this.addQuestionToDiary,
          removeQuestion: this.removeQuestion,
          handleRegistration: this.handleRegistration,
          hadleLogin: this.hadleLogin,
          handlePublicDiary: this.handlePublicDiary,
          updateUserImage: this.updateUserImage
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;