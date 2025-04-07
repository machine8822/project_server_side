import './css/ContactMe.css';
import React from "react";
function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "3628413e-725e-4249-9193-75c1465dda18");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
      <div className="contact-section">
        <form onSubmit={onSubmit}>
          <h1>Contact Form</h1>
          <p>Name:</p>
          <input className="name-input" type="text" name="name" required/>
          <p>Email:</p>
          <input className="email-input" type="email" name="email" required/>
          <p>Message:</p>
          <textarea className="mess-input" name="message" required></textarea>
  
          <button className="sub" type="submit">Submit Form</button>
  
        </form>
        <span>{result}</span>
  
      </div>
    );
  };

export default Contact;