import React, { useState } from 'react';

const Contact = () => {
const [formData, setFormData] = useState({ name: '', email: '', message: '' });

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

return (
    <section>
        <h2>Contact</h2>
        <form>
        <label>Name:</label>
        <input type="text" name="name" onBlur={() => !formData.name && alert('Name is required')} onChange={handleChange} />
        <label>Email:</label>
        <input type="email" name="email" onBlur={() => !validateEmail(formData.email) && alert('Invalid email')} onChange={handleChange} />
        <label>Message:</label>
        <textarea name="message" onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
        </form>
    </section>
    );
};

export default Contact;