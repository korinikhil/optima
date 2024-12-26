import React from "react";
import image1 from '../../assets/image.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image32.png'
import image4 from '../../assets/img42.png'
import PricingTable from "./PriceTable";


const CataloguePage = () => {
  // Array of projects to showcase
  const projects = [
    {
      id: 1,
      title: "Landing Page",
      description: "A responsive Landing Page with a sleek design.",
      image: image2, // Replace with your project image URL
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A creative portfolio website to showcase your work.",
      image: image3, // Replace with your project image URL
    },
    {
      id: 3,
      title: "Login Authentication",
      description: "A powerful CRM solution for managing leads and clients.",
      image: image4, // Replace with your project image URL
    },
    {
      id: 4,
      title: "Optima Web Designs",
      description: "Our company website showcasing our services and expertise.",
      image: image1, // Replace with your project image URL
    },
  ];

  return (
    <>
      <div className="min-h-screen  py-10 px-5">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Project Catalogue
        </h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  {project.title}
                </h2>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PricingTable/>
    </>
  );
};

export default CataloguePage;
