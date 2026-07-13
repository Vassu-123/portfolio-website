import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../components/Navbar";
import "./Contact.css";
import { portfolioData } from "../data/portfolioData";

function Contact() {

  const form = useRef();

  
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_fh40zxb",
      "template_l4crec4",
      form.current,
      "HZXiDg-LogeNyRHWJ"
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert(`Error: ${error.status} - ${error.text}`);
        console.log(error);
      }
    );
};

  return (
    <>
      <Navbar />

      <section className="contact">
        <div className="contact-container">

          <h1>Contact Me</h1>

          <p className="contact-intro">
            Feel free to contact me for opportunities,
            collaborations or any queries.
          </p>

          <div className="contact-card">

            <h2>Contact Information</h2>

            <p><strong>Email:</strong> {portfolioData.contact.email}</p>

            <p><strong>Phone:</strong> {portfolioData.contact.phone}</p>

            <p><strong>Location:</strong> {portfolioData.contact.location}</p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="contact-form"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>
    </>
  );
}

export default Contact;