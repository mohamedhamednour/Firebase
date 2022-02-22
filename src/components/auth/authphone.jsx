import React from "react";
import firebase from "../../firebase";

class Phone extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "EG",
      }
    );
  };
  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+2" + this.state.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log("SMS not sent");
      });
  };
  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert("User is verified");
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  render() {
    return (
      <div>
        <form className="center" onSubmit={this.onSignInSubmit}>
        <h2>Login Form</h2>

          <div id="sign-in-button"></div>
          <input
            class="form-control"
            type="number"
            name="mobile"
            placeholder="Mobile number"
            required
            onChange={this.handleChange}
          />
          <br></br>
          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </form>

        <form className="center" onSubmit={this.onSubmitOTP}>
        <h2>Enter OTP</h2>

          <input
            class="form-control"
            type="number"
            name="otp"
            placeholder="OTP Number"
            required
            onChange={this.handleChange}
          />          <br></br>

          <button className="btn btn-danger" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Phone;
