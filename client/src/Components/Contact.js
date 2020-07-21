import React from "react";
import axios from "axios";

//Use a class based component to create state for the contact form
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  //Handles a submission. If the submission works it alerts you, if it does not, it alerts you it failed.
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }
  //Resets the form
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="app">
        <div id="contactContainer">
          <div id="leftHandContact">
            <p>
              Please contact us for more information, to get involved with our
              work, or become a client. We look forward to hearing from you and
              working towards a world where ALL women have access to quality
              doula care.
            </p>
            <form
              id="contactForm"
              onSubmit={this.handleSubmit.bind(this)}
              method="POST"
            >
              <div className="formGroup">
                <label htmlFor="name">Name</label>
                <br></br>
                <input
                  type="text"
                  className="formControl"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <br></br>
                <input
                  type="email"
                  className="formControl"
                  aria-describedby="emailHelp"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </div>
              <div className="formGroup">
                <label htmlFor="message">Message</label>
                <br></br>
                <textarea
                  className="formControl"
                  rows="5"
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                />
              </div>
              <button type="submit" className="submitButton">
                Submit
              </button>
            </form>
          </div>
          <div id="rightHandContact">
            <p>Name: Emily Reynolds</p>
            <p>Email: emilyreynoldsdsa@gmail.com</p>
            <p>Phone Number: 915-267-5166</p>
          </div>
        </div>
      </div>
    );
  }

  //When a name is added, it is set in state
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  //When an email is added, it is set in state
  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  //When a message is added, it is set in state
  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
