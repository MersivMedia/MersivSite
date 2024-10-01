import React, { useState } from 'react';
import axios from 'axios';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/send-email', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 text-left">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          required
        />
      </div>
      <div className="mb-4 text-left">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          required
        />
      </div>
      <div className="mb-4 text-left">
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">Send Message</button>
      {submitStatus === 'success' && <p className="text-green-500 mt-2">Message sent successfully!</p>}
      {submitStatus === 'error' && <p className="text-red-500 mt-2">Error sending message. Please try again.</p>}
    </form>
  );
}

export default ContactForm;