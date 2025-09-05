import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    company: "",
    contact: "",
    service: "",
    email: "",
    website: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.contact.trim()) newErrors.contact = "Contact person is required";
    if (!formData.service.trim()) newErrors.service = "Service is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const templateParams = {
        company: formData.company,
        contact: formData.contact,
        service: formData.service,
        email: formData.email,
        website: formData.website,
        file: formData.file ? formData.file.name : "No file uploaded",
      };

      emailjs
        .send("service_t0tsnjb", "template_7uldamk", templateParams, "9DbgdUuq08ZURVimu")
        .then(() => {
          setSubmitted(true);
          setFormData({
            company: "",
            contact: "",
            service: "",
            email: "",
            website: "",
            file: null,
          });
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
            <div style={{ marginBottom: "10px" }}>
              <h2>Get In Touch</h2>
              <p> We'd love to hear from you! Fill out the form below and we'll get back to you.</p>
            </div>

            <label htmlFor="company">Name of Company</label>
            <input type="text" id="company" value={formData.company} onChange={handleChange} />
            {errors.company && <span className="error">{errors.company}</span>}

            <label htmlFor="contact">Contact Person</label>
            <input type="text" id="contact" value={formData.contact} onChange={handleChange} />
            {errors.contact && <span className="error">{errors.contact}</span>}

            <label htmlFor="service">What service you need from STR Sourcing?</label>
            <textarea
              id="service"
              rows="3"
              value={formData.service}
              onChange={handleChange}
              placeholder="e.g. Apparels, Home Textiles, Footwear, Leather product, Jute / crafts & others"
            ></textarea>
            {errors.service && <span className="error">{errors.service}</span>}

            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} />
            {errors.email && <span className="error">{errors.email}</span>}

            <label htmlFor="website">Website</label>
            <input type="text" id="website" value={formData.website} onChange={handleChange} />

            <label htmlFor="file">Choose File</label>
            <input type="file" id="file" onChange={handleChange} />

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
