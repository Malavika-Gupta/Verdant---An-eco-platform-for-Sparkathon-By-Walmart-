"use client";

import React from "react";
import Container from "../shared/Container";

const ExpertChoice = ({ className }) => {
  return (
    <Container className={className ? className : ""}>
      <section className="flex flex-col gap-y-10">
        <h1 className="text-4xl font-bold text-gray-800">
          Shopper Dashboard Features
        </h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <div className="p-6 bg-green-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-green-800">Eco-Rated Products</h2>
            <p className="text-gray-700">
              Discover and compare products based on transparent eco ratings to make greener shopping choices.
            </p>
          </div>

          <div className="p-6 bg-blue-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">Eco Cart Nudger</h2>
            <p className="text-gray-700">
              Get friendly nudges to swap for more sustainable alternatives — earn loyalty points as you shop responsibly.
            </p>
          </div>

          <div className="p-6 bg-yellow-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-yellow-800">Reusable Packaging</h2>
            <p className="text-gray-700">
              Opt to combine orders and choose reusable packaging to cut down on waste and packaging costs.
            </p>
          </div>

          <div className="p-6 bg-purple-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-purple-800">Sustainability Feedback</h2>
            <p className="text-gray-700">
              Rate and review products for their eco friendliness — help guide brands and other shoppers.
            </p>
          </div>

          <div className="p-6 bg-pink-100 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2 text-pink-800">Micro-Refurbishment Kiosks</h2>
            <p className="text-gray-700">
              Access store kiosks to refurbish, refill, or recycle — keeping products in use for longer.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ExpertChoice;
