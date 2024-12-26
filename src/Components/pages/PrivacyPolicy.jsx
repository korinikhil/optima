import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className=" min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-6">
          Welcome to OptimaWebDesigns! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Who We Are</h2>
          <p className="text-gray-600">
            OptimaWebDesigns is a professional web design agency with over 3 years of experience. Our website address is <a href="https://optimawebdesigns.shop" className="text-blue-500 hover:underline">optimawebdesigns.shop</a>.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Personal Information: Name, email, phone number, etc.</li>
            <li>Usage Data: IP address, browser type, pages visited.</li>
            <li>Cookies for website functionality and user experience.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Your Data Protection Rights</h2>
          <p className="text-gray-600">
            You have the right to access, update, or delete your data. For any requests, email us at <span className="font-medium">support@optimawebdesigns.shop</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
