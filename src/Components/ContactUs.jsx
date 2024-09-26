
const ContactUs = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 p-2 w-full border rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

          <p className="mb-4">
            Have questions about our student management system? Feel free to reach out to us
            through the contact form or the information below.
          </p>

          <p className="mb-2">
            <strong>Address:</strong> 123 Education Street, Student City, SC 12345
          </p>

          <p className="mb-2">
            <strong>Email:</strong> contact@studentmanagement.com
          </p>

          <p className="mb-6">
            <strong>Phone:</strong> (123) 456-7890
          </p>

          {/* Optional Map */}
          <div className="mt-8">
            <iframe
              className="w-full h-64"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509314!2d144.9537363156395!3d-37.81627974202112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f1f54db3%3A0xa1dca773f8e96365!2sStudent%20City!5e0!3m2!1sen!2sus!4v1633030413030!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
