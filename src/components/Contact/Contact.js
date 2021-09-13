import React from "react";
import Fade from "react-reveal/Fade";

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" || message === "") {
      alert(
        "You need to fill out every input in order to submit! Try again please."
      )
    } else {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(
          () =>
            alert(
              "Message has been sent! I'll get back to you as soon as possible."
            )
        )
        .catch((error) =>
          alert(
            error,
            "Something went wrong. Message hasn't been sent! Please, try again."
          )
        );
        window.location.href = "https://benjaminpeto.netlify.com";
    }
    e.target.reset();
  }
  return (
    <section
      id="contact"
      className="relative bg-gray-900 dark:bg-gray-200 pt-11 md:py-20 2xl:py-40 2xl:h-full"
    >
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap lg:w-5/6 xl:w-3/4 justify-center">
        <Fade top>
          <form
            onSubmit={handleSubmit}
            netlify
            name="contact"
            className="lg:w-1/3 md:w-1/2 flex flex-col md:mr-auto w-full md:py-8 mb-8 md:mb-0"
          >
            <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600 sm:text-4xl text-3xl mb-1 font-medium title-font">
              Hire Me
            </h1>
            <p className="leading-relaxed mb-5 text-gray-300 dark:text-gray-900">
              Have a question or proposal, or just want to say hello? Go ahead.
            </p>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-sm text-gray-400 dark:text-gray-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-gray-800 dark:bg-gray-400 rounded border border-gray-700 dark:border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-100 dark:text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-400 dark:text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-800 dark:bg-gray-400 rounded border border-gray-700 dark:border-gray-300  focus:border-green-500 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-100 dark:text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-400 dark:text-gray-800"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-800 dark:bg-gray-400 rounded border border-gray-700 dark:border-gray-300  focus:border-green-500 focus:ring-2 focus:ring-green-500 h-32 text-base outline-none text-gray-100 dark:text-gray-900 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center text-black dark:text-white dark:hover:text-gray-200 hover:text-gray-200 bg-gradient-to-r from-blue-500 to-green-400 hover:from-blue-700 hover:to-green-600 border-0 py-2 px-6 focus:outline-none rounded text-lg transform hover:scale-105 transition duration-300 ease-in-out"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </form>
        </Fade>
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 dark:bg-gray-200 rounded-lg overflow-hidden sm:ml-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56303.30396489948!2d-15.474636629643257!3d28.11735630155509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40950e91c097d1%3A0xab36b5ac5338ba65!2sLas%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1sen!2ses!4v1628424360437!5m2!1sen!2ses"
          />
          <div className="bg-gray-900 dark:bg-gray-200 relative flex flex-wrap py-4 rounded shadow-lg">
            <div className="lg:w-1/2 px-2 md:px-6">
              <h2 className="title-font font-semibold text-white dark:text-black tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-gray-400 dark:text-gray-600">
                Las Palmas de Gran Canaria <br />
                Spain, 35005
              </p>
            </div>
            <div className="lg:w-1/2 px-2 md:px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white dark:text-black tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                href="mailto:benjaminpeto23@gmail.com"
                className="text-blue-500 leading-relaxed"
              >
                benjaminpeto23@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
