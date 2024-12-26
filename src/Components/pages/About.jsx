import { Timeline } from "@material-tailwind/react";
import React from "react";
import { NavLink } from "react-router-dom";
// import TimeLine from '../pages/TimeLine'

const About = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-5 md:px-14 py-8">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-blue-900 ">
            About OptimaWebDesigns
          </h1>
          <p className="mt-4  text-lg text-justify m-5 text-black :text-gray-300">
            At OptimaWebDesigns, we specialize in creating visually stunning and
            user-friendly websites that help businesses grow and succeed. Our team
            of expert designers and developers are dedicated to providing top-notch
            web design services that are tailored to meet your unique needs.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-blue-900 ">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-800 text-justify m-5 ">
            Our mission is to empower businesses of all sizes by providing high-quality
            web solutions that drive success. We focus on creating websites that
            not only look great but are also functional, fast, and optimized for a
            seamless user experience.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-blue-900 ">
            Why Choose Us?
          </h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Tailored Solutions
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                We create custom solutions that fit your specific business needs
                and goals.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Experienced Team
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Our team of experts brings years of experience to deliver top-quality
                results for your website.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Affordable Pricing
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                We offer competitive pricing without compromising on the quality of
                our work.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-blue-900 ">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 ">
            Ready to take your business to the next level with a stunning website?
            Contact us today, and let's make it happen.
          </p>
          <button
            className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600"
          >
           <NavLink to='/contact'>Contact Us</NavLink> 
          </button>
        </section>
      </div>
      {/* <TimeLine/> */}
    </>
  );
};

export default About;
