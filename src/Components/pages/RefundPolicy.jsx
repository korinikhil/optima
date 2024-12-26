import React from 'react';

const RefundPolicy = () => {
  return (
    <div className=" min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Refund Policy</h1>
        <p className="text-gray-600 mb-6">
          At OptimaWebDesigns, we strive to provide the best services to our clients. This refund policy outlines the terms under which refunds are issued for our services.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Eligibility for Refunds</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Refunds are applicable only if requested within 14 days of payment.</li>
            <li>If the service has not commenced or no work has been delivered, a full refund may be issued.</li>
            <li>For partially completed work, refunds will be calculated based on the portion of work completed.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Non-Refundable Cases</h2>
          <p className="text-gray-600">
            Refunds are not applicable under the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Services have been fully delivered and accepted by the client.</li>
            <li>Failure to provide required inputs or materials within the agreed timeline.</li>
            <li>Changes in the client’s requirements after the project has commenced.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Process for Requesting a Refund</h2>
          <p className="text-gray-600">
            To request a refund, please contact us at <span className="font-medium">support@optimawebdesigns.shop</span> with the following details:
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Your name and contact information.</li>
            <li>Details of the service purchased.</li>
            <li>Reason for the refund request.</li>
          </ul>
          <p className="text-gray-600 mt-2">
            Our team will review your request and respond within 7 business days.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions or need assistance, please reach out to us at <span className="font-medium">support@optimawebdesigns.shop</span>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default RefundPolicy;
