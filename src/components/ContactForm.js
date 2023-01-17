import React, { useState } from 'react';

export default function() 
{
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let params = new URLSearchParams();
params.append("form-name", "contact");
Object.entries(formData).forEach(([key, value]) => params.append(key, value));
fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error));
     
    setFormData({ name: '', email: '', message: '' })
     
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <label htmlFor="name" className="inline-block mb-1 font-medium">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email" className="inline-block mb-1 font-medium">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <label htmlFor="complain" className="inline-block mb-1 font-medium">Message:</label>
      <textarea
        id="complain"
        name="message"
        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <input type="submit" value="Submit" className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none cursor-pointer"  />
                            
      <p className="text-xs text-gray-600 sm:text-sm">
                      Your privacy is respected
                      </p>
    </form>
  );
};

 
