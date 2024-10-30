import React from "react";

const DevelopmentModelPage = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Development Model Overview</h2>
          <p className="mb-6 text-lg">Explore our innovative development approach, tools, and methodologies.</p>
          <a
            href="#details"
            className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Key Features */}
      <section id="details" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Agile Methodology</h3>
              <p>We utilize Agile principles for flexibility and responsiveness in development.</p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">Modern Technologies</h3>
              <p>Leverage the latest frameworks and libraries to build efficient applications.</p>
            </div>
            {/* Feature 3 */}
            <div className="p-6 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-2">User-Centered Design</h3>
              <p>Focusing on user needs to ensure an intuitive and engaging experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Overview */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Development Workflow</h2>
          <img
            src="/path-to-your-workflow-image.png"
            alt="Development Workflow"
            className="mx-auto mb-6 border border-gray-700 rounded-lg"
          />
          <p className="max-w-xl mx-auto">
            Our systematic approach ensures quality and timely delivery, tailored to your needs.
          </p>
        </div>
      </section>


      {/* Contact Information */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border border-gray-700 bg-gray-900 text-white rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default DevelopmentModelPage;
