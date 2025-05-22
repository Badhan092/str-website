import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "your_service_id",   // Replace with your EmailJS service ID
          "your_template_id",  // Replace with your EmailJS template ID
          formData,
          "your_public_key"    // Replace with your EmailJS public key
        )
        .then(() => {
          setSubmitted(true);
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
          console.error("Email sending failed:", err);
        });
    }
  };

  return (
    <div className="container">
      <div className="contact-form-details">
        <div className="contact-form-image">
          <img src="/img/banner/contact-us.jpg" />
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you! Fill out the form below and we'll get back to you.</p>

              <label htmlFor="name" className="label">Name</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} className="input" />
              {errors.name && <span className="error">{errors.name}</span>}

              <label htmlFor="email" className="label">Email</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} className="input" />
              {errors.email && <span className="error">{errors.email}</span>}

              <label htmlFor="message" className="label">Message</label>
              <textarea id="message" rows="4" value={formData.message} onChange={handleChange} className="textarea"></textarea>
              {errors.message && <span className="error">{errors.message}</span>}

              <button type="submit" className="button">Submit</button>
              {submitted && <p className="success">Thank you! Your message was sent.</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
