"use client";

import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import { FaLeaf, FaRecycle, FaSeedling } from "react-icons/fa";

const motivationCards = [
  {
    icon: <FaLeaf className="text-green-600" size={30} />,
    title: "Choose to Reuse",
    description:
      "Every purchase you make is a vote for the world you want. Pick products that respect nature, people, and tomorrow.",
  },
  {
    icon: <FaRecycle className="text-green-600" size={30} />,
    title: "Recycle. Rethink.",
    description:
      "Recycling is good. Rethinking is better. Opt for durable, ethical, and circular products that keep waste away.",
  },
  {
    icon: <FaSeedling className="text-green-600" size={30} />,
    title: "Grow Greener Habits",
    description:
      "Your daily choices matter more than grand gestures. Start small, stay consistent — inspire others by example.",
  },
];

const GreenMotivation = () => {
  return (
    <Container>
      <section className="flex flex-col gap-y-10 text-center">
        <h1 className="text-4xl font-bold">
          🌱 Empower Your Green Journey
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Sustainability isn’t a trend — it’s our shared future.
          Let’s make mindful choices, uplift conscious brands, and build a world where eco-friendly is the norm, not the niche.
        </p>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8">
          {motivationCards.map((card, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{card.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default GreenMotivation;
