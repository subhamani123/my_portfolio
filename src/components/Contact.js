import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'; // Importing FontAwesome icons

export default function Contact() {
  const config = {
    email: 'sivarajmani2006@gmail.com',
    address: 'Tirunelveli, Tamil Nadu-627006.',
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const form = event.target;
    const fullName = form.fullName.value;
    const email = form.email.value;
    const message = form.message.value;

    // Construct the Gmail URL
    const mailtoLink = `https://mail.google.com/mail/u/0/?fs=1&to=${config.email}&su=Message from ${encodeURIComponent(
      fullName
    )}&body=${encodeURIComponent(message)}&tf=cm`;

    // Open the Gmail compose window
    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="flex flex-col py-10 px-5 justify-center bg-secondary text-white">
      {/* Section Header */}
      <div className="flex flex-col px-10 py-5">
        <h1 className="text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold">Contact</h1>
      </div>

      {/* Content Container */}
      <div className="flex flex-col md:flex-row px-10 gap-10">
        {/* Left Column: Contact Information */}
        <div className="md:w-1/2">
          <div className="flex items-center py-4">
            <FaMapMarkerAlt className="text-primary mr-3" />
            <span>{config.address}</span>
          </div>
          <div className="flex items-center py-2">
            <FaEnvelope className="text-primary mr-3" />
            <span>{config.email}</span>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="md:w-1/2">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <label htmlFor="full-name" className="text-lg">Full name</label>
            <input
              type="text"
              id="full-name"
              name="fullName"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary hover:border-white text-black"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email" className="text-lg">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary hover:border-white text-black"
              placeholder="yourmail@example.com"
              required
            />

            <label htmlFor="message" className="text-lg">Message</label>
            <textarea
              id="message"
              name="message"
              className="p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary hover:border-white text-black"
              placeholder="Write your message here..."
              rows="5"
              required
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white py-2 px-6 font-bold rounded-md hover:border-2 border-white"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
