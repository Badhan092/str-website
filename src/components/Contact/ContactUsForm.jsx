import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const ContactUsForm = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = (formData) => {
    const newErrors = {};
    if (!formData.get("company").trim()) newErrors.company = "Company name is required";
    if (!formData.get("contact").trim()) newErrors.contact = "Contact person is required";
    if (!formData.get("service").trim()) newErrors.service = "Service is required";
    if (!formData.get("email").trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.get("email"))) {
      newErrors.email = "Invalid email format";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_t0tsnjb", // your service ID
          "template_7uldamk", // your template ID
          formRef.current,
          "9DbgdUuq08ZURVimu" // your public key
        )
        .then(() => {
          setSubmitted(true);
          formRef.current.reset(); // clear form
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
          <img src="/img/banner/contact-us.jpg" alt="Contact" />
        </div>
        <div className="contact-form">
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: "10px" }}>
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you! Fill out the form below and we'll get back to you.</p>
            </div>

            <label htmlFor="company">Name of Company</label>
            <input type="text" id="company" name="company" />
            {errors.company && <span className="error">{errors.company}</span>}

            <label htmlFor="contact">Contact Person</label>
            <input type="text" id="contact" name="contact" />
            {errors.contact && <span className="error">{errors.contact}</span>}

            <label htmlFor="service">What service you need from STR Sourcing?</label>
            <textarea
              id="service"
              name="service"
              rows="3"
              placeholder="e.g. Apparels, Home Textiles, Footwear, Leather product, Jute / crafts & others"
            ></textarea>
            {errors.service && <span className="error">{errors.service}</span>}

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="website">Website</label>
            <input type="text" id="website" name="website" />

            <label htmlFor="file">Choose File</label>
            <input type="file" id="file" name="my_file" />

            <button className="button" type="submit">
              Send
            </button>
            {submitted && <p className="success">Thank you! Your information was sent.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
