import React from 'react';

function Footer() {
  const resourceArr = [
    { link: "https://www.isro.gov.in/", name: "ISRO" },
    { link: "https://isro.vercel.app/", name: "ISRO Vercel API source" },
    { link: "https://isrostats.in/home", name: "ISRO Statistics API source" },
    { link: "https://services.isrostats.in/api/launches", name: "Launches API" },
    { link: "https://services.isrostats.in/api/spacecraft", name: "Spacecrafts API" },
    { link: "https://isro.vercel.app/api/customer_satellites", name: "Customer Satellites API" },
    { link: "https://isro.vercel.app/api/centres", name: "Centers API" },
  ];

  return (
    <footer className="bg-[#fffff] text-white border-t border-green-400/50 backdrop-blur-md px-6 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-9">
        
        {/* Project Summary */}
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-l  text-green-400">ISRO INSIGHTS</h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            ISRO INSIGHTS is a portal showcasing India's space achievements using open APIs.
            All data is fetched live from public sources and presented with an intuitive, modern UI.
          </p>
        </div>

        {/* Resource Links */}
        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {resourceArr.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-indigo-400 transition underline underline-offset-4"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
      

      {/* copyright */}<div className="mt-2 text-center text-xs text-white-500 mt-1 border-gray-800 pt-4">
        © {new Date().getFullYear()} ISRO INSIGHTS. 
      </div>
     
    </footer>
  );
}

export default Footer;