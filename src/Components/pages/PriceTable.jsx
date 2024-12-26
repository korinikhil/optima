import React from "react";

const PricingTable = () => {
    const plans = [
        {
            name: "Basic Plan",
            price: "₹ 799/-",
            features: ["1 Custom Website Design (up to 5 pages) ", "Responsive Design (Mobile, Tablet, Desktop) ", "Basic SEO Setup ", " Social Media Links Integration ","1 Domain Name ","Contact Form Integration ", "Custome Domain (499/-)","	1 Year of Basic Hosting (Shared) ","2 Revisions ","Basic Security (SSL) ","1 Month Free Support ","24/7 Support","Email Support"],
            buttonText: "Call Now",
            cta:()=>{
                window.location.href="tel:+9179990402535"
            }
        },
        {
            name: "Standard Plan",
            price: "₹ 4199/-",
            features: ["5-10 Pages Custom Website Design", "E-commerce Integration (Up to 50 Products)"," Advanced SEO Setup (Keyword Research & On-Page Optimization)"," Blog Integration","Google Analytics Setup","Google Map Integration","Social Media Integration (Up to 3 platforms)"," Custom Contact Forms with Multiple Fields"," 1 Domain Name (Free for 1 year)","1 Year of Hosting (Managed Hosting)"," 5 Revisions"," SSL Certificate","6 Months Free Support","24/7 Support", "Priority Email Support"],
            buttonText: "Call Now",
            isPopular: true, // Highlight this plan
            cta:()=>{
                window.location.href="tel:+9179990402535"
            }
        },
        {
            name: "Premium Plan",
            price: "₹ ???",
            features: ["Unlimited Projects", "Full E-commerce Store Setup (Up to 200 Products)","Advanced SEO (On-Page & Off-Page Optimization)","Content Management System (CMS) Setup (e.g., WordPress, Shopify)","Advanced Google Analytics and Marketing Tools Setup"," Custom Web Applications/Functionality (Bookings, Forums, etc.)","Blog, Social Media, and Newsletter Integration","Multi-Language Support (Localization)","1 Domain Name (Free for 1 year)"," 1 Year of Hosting (Cloud Hosting)","SSL, CDN, and Backup Integration"," 10+ Revisions","1 Year Free Support", "24/7 Support"],
            buttonText: "Call Now",
            cta:()=>{
                window.location.href="tel:+9179990402535"
            }
        },
    ];

    return (
        <div className="py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`border rounded-lg shadow-lg p-6 bg-white ${plan.isPopular ? "border-blue-500" : "border-gray-300"
                            }`}
                    >
                        {plan.isPopular && (
                            <div className=" top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                Popular
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-gray-700">{plan.name}</h3>
                        <p className="text-4xl font-extrabold text-gray-900 my-4">
                            {plan.price}
                        </p>
                        <ul className="space-y-2 text-left mb-6">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="text-gray-600 flex items-center">
                                    <svg
                                        className="w-5 h-5 text-green-500 mr-2"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button
                            className={`w-full  py-2 px-4 text-white rounded-lg ${plan.isPopular
                                    ? "bg-blue-500  hover:bg-blue-600"
                                    : "bg-gray-800 hover:bg-gray-900"
                                }`}
                                onClick={plan.cta}
                        >
                            {plan.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingTable;
