import React, { useState } from "react";

const TicketForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket Submitted:", formData);
    alert("Ticket submitted successfully!");
    setFormData({ name: "", email: "", subject: "", description: "" });
  };

  return (
    <div className="ticket-container">
      <div className="ticket-card">
        <h2>🚀 Raise a Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Subject</label>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
          </div>

          <button className="submit-btn" type="submit">Submit Ticket</button>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
