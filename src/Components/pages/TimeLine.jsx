import React from "react";

const timelineData = [
  {
    icon: "💻",
    title: "Web Design",
    description:
      "Web design services create attractive, responsive, and user-friendly websites that align with the client’s brand and enhance user experience.",
  },
  {
    icon: "📈",
    title: "SEO",
    description:
      "Boost your business with expert digital marketing strategy and optimization. This keeps it brief while focusing on key elements.",
  },
  {
    icon: "🛠️",
    title: "Development",
    description:
      "Building robust and scalable web applications tailored to client needs using modern frameworks and technologies.",
  },
  {
    icon: "🎧",
    title: "24/7 Support Team",
    description:"24/7 support ensures round-the-clock assistance for website issues, updates, and queries, providing uninterrupted service and peace of mind."
  },
];

const Timeline = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-12 text-center">Our Features</h1>
      <div className="relative le md:flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute w-1  bg-[#6ea0bb] h-full md:left-1/2 md:transform -translate-x-1/2"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`md:flex items-center md:w-full mb-12 ${
              index % 2 === 0 ? "md:justify-start" : "md:justify-end"
            }`}
          >
            {/* Content Box */}
            <div
              className={`bg-white ml-2 p-6 rounded-lg shadow-lg md:w-5/12 ${
                index % 2 === 0 ? "text-right" : "text-left"
              }`}
            >
              <h2 className="text-relative  font-bold text-red-600">{item.title}</h2>
              <p className="text-gray-600 mt-4">{item.description}</p>
            </div>

            {/* Icon */}
            <div className="absolute w-12 h-12 bg-white text-white rounded-full shadow-lg flex items-center justify-center md:left-1/2 transform -translate-x-1/2">
              <span className="text-2xl">{item.icon}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
