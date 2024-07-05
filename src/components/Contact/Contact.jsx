import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "709d0475-b5c4-4fcb-a39e-fc5e0f8482b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
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
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi,
          voluptas repudiandae tempore ab dolorum veniam voluptates error culpa,
          animi earum doloremque quaerat eligendi sapiente mollitia nisi
          quisquam amet laudantium deserunt.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            sotheane@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +(855) 78-316-457
          </li>
          <li>
            <img src={location_icon} alt="" />
            50A,St 289, Beoung Kak II, Toul Kok,
            <br /> Phnom Penh, Cambodia
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name </label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            id=""
            placeholder="Enter your phone number"
            required
          />
          <label>Your Message here </label>
          <textarea
            name="message"
            id=""
            rows="10"
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-dark">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
