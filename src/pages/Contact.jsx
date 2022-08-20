import PizzaLeft from "../assets/pizzaLeft.jpg";

import "../styles/contact.css";

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{
          background: `url(${PizzaLeft})`,
          backgroundPosition: "center",
        }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input type="text" placeholder="Enter full name" />
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email" />
          <label htmlFor="message">Message</label>
          <textarea rows="6" placeholder="Enter message..." required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};
