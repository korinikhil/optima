import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className=" min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms and Conditions</h1>
        <p className="text-gray-600 mb-6">
          Welcome to OptimaWebDesigns! These terms and conditions outline the rules and regulations for using our website and services.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Acceptance of Terms</h2>
          <p className="text-gray-600">
            By accessing or using our services, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, you must not use our website or services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Use of Services</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>You must not use our services for any unlawful or prohibited purposes.</li>
            <li>You agree to provide accurate and up-to-date information when required.</li>
            <li>Any breach of these terms may result in termination of your access to our services.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Intellectual Property</h2>
          <p className="text-gray-600">
            All content, designs, and trademarks on this website are the property of OptimaWebDesigns. Unauthorized use, reproduction, or distribution of this material is strictly prohibited.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Limitation of Liability</h2>
          <p className="text-gray-600">
            OptimaWebDesigns is not liable for any damages resulting from the use or inability to use our services. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Governing Law</h2>
          <p className="text-gray-600">
            These terms are governed by and construed in accordance with the laws of your jurisdiction. Any disputes will be resolved exclusively in the competent courts of that jurisdiction.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
