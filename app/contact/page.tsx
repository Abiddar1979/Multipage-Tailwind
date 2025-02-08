import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <section className="contact-form bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg shadow-md max-w-full md:max-w-lg w-full mx-2 sm:mx-4 md:mx-8">
        <h2 className="text-center text-2xl sm:text-3xl text-gray-800 mb-4 font-semibold">Contact Us</h2>
        <form className="space-y-4 md:space-y-5">
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-blue-500" 
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-2 border border-gray-200 rounded focus:outline-none focus:ring-4 focus:ring-blue-500" 
            required 
          />
          <input 
            type="text" 
            placeholder="Phone Number" 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-blue-500" 
          />
          <textarea 
            placeholder="Your Message" 
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-4 focus:ring-blue-500" 
            rows={4} 
            required 
          ></textarea>
          <button 
            type="submit" 
            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
