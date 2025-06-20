// src/components/ClientsMarquee.tsx

import React from "react";

const clients = [
  "National Highway Authority of India (NHAI)",
  "Delhi Metro Rail Corporation (DMRC)",
  "Mumbai Metro Regional Development Authority",
  "Larsen & Toubro",
  "Afcons Infrastructure",
  "Gammon India",
];

const ClientsMarquee = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Clients & Partners</h2>
          <p className="text-xl text-gray-600">
            Trusted by leading infrastructure companies and government organizations
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex space-x-6 animate-marquee whitespace-nowrap">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="bg-white min-w-[280px] p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary text-2xl">🤝</div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{client}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsMarquee;
