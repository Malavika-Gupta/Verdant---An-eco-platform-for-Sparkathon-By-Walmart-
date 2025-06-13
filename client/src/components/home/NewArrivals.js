"use client";

import React from "react";
import Container from "../shared/Container";

const NewArrivals = () => {
  return (
    <Container>
      <section className="flex flex-col gap-y-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Retailer Dashboard Features
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="p-6 bg-green-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-green-800">Eco Score</h2>
            <p className="text-gray-700">
              Monitor and boost your Eco Score — higher scores mean your products are promoted more often for their sustainability.
            </p>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">AI Route Optimization</h2>
            <p className="text-gray-700">
              Get AI-powered route suggestions to minimize carbon footprint and improve delivery efficiency.
            </p>
          </div>

          <div className="p-6 bg-yellow-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-yellow-800">Reusable Packaging & RFID</h2>
            <p className="text-gray-700">
              Enable reusable packaging tracked with RFID chips to reduce waste and engage eco-conscious customers.
            </p>
          </div>

          <div className="p-6 bg-purple-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-purple-800">Digital Twin</h2>
            <p className="text-gray-700">
              Visualize each product's sustainability journey with a digital twin — boost transparency and customer trust.
            </p>
          </div>

          <div className="p-6 bg-pink-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-pink-800">Overstock Redistribution</h2>
            <p className="text-gray-700">
              Receive AI-driven alerts to redistribute overstock, reducing waste and maximizing resource usage.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default NewArrivals;
