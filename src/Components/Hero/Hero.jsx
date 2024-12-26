import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import laptop from '../../assets/rb_51045-1536x697.png'
import TimeLine from '../pages/TimeLine';
import info from '../../assets/DrawKit Vector Illustration Project Manager (1).png'
import affordVideo from '../../assets/Your Vision, Our Design Expertise.mp4'
import PricingTable from '../pages/PriceTable';


const Hero = () => {
  const handleDone = () => {
    console.log('Typing completed one cycle!');
  };

  const handleType = () => {
    console.log('Typing in progress...');
  };

  return (
    <section className="bg-gradient-to-r mt-[1rem]  from-[#bfd8f6] to-[#ffffff] flex flex-col items-center justify-center text-center py-20 px-6">
      <h2 className="text-6xl font-bold text-[#000000] mb-4">From Vision to Reality — We</h2>

      <p className="text-3xl text-[#6ea0bb] mb-6">
        <span style={{ color: '#4a4a4a', fontWeight: 'bold' }}>
          {/* Infinite Typewriter Effect */}
          <Typewriter
            words={['Empowering Your Vision', 'Crafting Experiences That Inspire']}
            loop={Infinity} // Infinite looping
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone} // Optional
            onType={handleType} // Optional
          />
        </span>
      </p>

      {/* laptop image */}

      <div className="image mt-12">
        <img src={laptop} alt="" srcSet="" />
      </div>
      {/* btn */}

      <button className='border border-slate-600 bg-white px-2 rounded-md py-1 hover:bg-[#6ea0bb] hover:border-white hover:shadow-lg'onClick={()=>window.location.href="tel:+917990402535"}> "Get a Free Quote "</button>

      {/* video */}
      <div className='mt-16 md:mx-12 rounded-lg'>
      <video src={affordVideo} controls autoPlay loop muted className="w-full h-auto"/>
      </div>

      {/* paragraph */}

      <div className="div md:flex items-center">
        <div className="img">
          <img src={info} alt="" />
        </div>
        <div className="description text-justify m-5">
          <p>We are a professional web design agency dedicated to crafting visually stunning, highly functional, and user-friendly websites that elevate your brand’s online presence. Specializing in responsive design, e-commerce solutions, SEO optimization, and custom development, we combine creativity with technical expertise to deliver results-driven websites tailored to your unique business goals. With a commitment to quality, innovation, and client satisfaction, we transform ideas into impactful digital experiences. Let us help your business thrive in the digital world!</p>
        </div>
      </div>
      {/* price table */}
      <PricingTable/>

      {/* time line components */}
      <TimeLine />
      {/* why choose */}
      
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
    </section>
  );
};

export default Hero;
