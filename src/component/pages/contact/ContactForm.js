import React, { Component } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import "./contact-form.css";
import { ButtonSmall } from "../../button/Bottons";

// Email validation
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// Form validation
const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // Validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // Validate the form was filled out
  Object.values(rest).forEach((val) => {
    val === "" && (valid = false);
  });

  return valid;
};
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      formErrors: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }

  toastifySuccess() {
    toast.success("Form sent!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
    });
  }

  toastifyFail() {
    toast.error("Form failed to send!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback fail",
    });
  }
  handleChange = (e) => {
    e.preventDefault();
    let formErrors = { ...this.state.formErrors };
    const { name, value } = e.target;
    switch (name) {
      case "name":
        formErrors.name = value.length < 1 ? "Please enter your name." : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Please enter a valid email address.";
        break;
      case "subject":
        formErrors.subject = value.length < 1 ? "Please enter a subject." : "";
        break;
      case "message":
        formErrors.message = value.length < 1 ? "Please enter a message" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      emailjs.send(
        "service_rf3rkxx",
        "template_6s1vmqn",
        templateParams,
        "user_l15dG16IIuwQ1yPxpgG5I"
      );

      console.log(`
            --SUBMITTING--
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
          `);
      this.toastifySuccess();
      this.resetForm();
    } else {
      // Handle form validation failure
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      this.toastifyFail();
    }
  };
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  render() {
    const { formErrors } = this.state;
    return (
      <div className="ContactForm">
        <form id="contact-form" onSubmit={this.handleSubmit} noValidate>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                name="name"
                value={this.state.name}
                className={`form-control formInput ${
                  formErrors.name.length > 0 ? "error" : null
                }`}
                onChange={this.handleChange}
                placeholder="Name"
                noValidate
              ></input>
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )}
            </div>

            <div className="col-6">
              <input
                type="email"
                name="email"
                value={this.state.email}
                className={`form-control formInput ${
                  formErrors.email.length > 0 ? "error" : null
                }`}
                onChange={this.handleChange}
                placeholder="Email"
                noValidate
              ></input>
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <input
                type="subject"
                name="subject"
                value={this.state.subject}
                className={`form-control formInput ${
                  formErrors.subject.length > 0 ? "error" : null
                }`}
                onChange={this.handleChange}
                placeholder="Subject"
                noValidate
              ></input>
              {formErrors.subject.length > 0 && (
                <span className="errorMessage">{formErrors.subject}</span>
              )}
            </div>

            <div className="col-6">
              <textarea
                rows="5"
                name="message"
                value={this.state.message}
                className={`form-control formInput ${
                  formErrors.message.length > 0 ? "error" : null
                }`}
                onChange={this.handleChange}
                placeholder="Message"
                noValidate
              ></textarea>
              {formErrors.message.length > 0 && (
                <span className="errorMessage">{formErrors.message}</span>
              )}
            </div>
          </div>
          <div>
            {" "}
            <ButtonSmall>submit</ButtonSmall>
          </div>

          <ToastContainer />
        </form>
      </div>
    );
  }
}
