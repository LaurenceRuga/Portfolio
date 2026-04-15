import React from "react";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "../constants/social";

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact-wrap">
        <div className="section-head reveal">
          <h2>Contact</h2>
          <p>Let's talk about your next project.</p>
        </div>

        <form className="contact-form reveal">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" placeholder="Enter your name" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="mvlruga@tip.edu.ph" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" placeholder="Write your message" />

          <button type="submit" className="btn btn-green">
            Send Message
          </button>
        </form>

        <div className="contact-social social-links reveal">
          {/* TODO: Replace with real Facebook URL */}
          <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook />
          </a>
          {/* TODO: Replace with real GitHub username */}
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href={SOCIAL_LINKS.email} target="_blank" rel="noopener noreferrer" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
