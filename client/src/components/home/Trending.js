/**
 * Title: Impact Tracker Section
 * Author: [Your Name]
 * Inspired by: Hasibul Islam's clean section style
 * Description: Shows collective eco-impact to motivate users.
 */

"use client";

import React, { useState, useEffect } from "react";
import Container from "../shared/Container";

const ImpactTracker = () => {
  // Example impact stats - replace with real API call if available
  const [impact, setImpact] = useState({
    co2Saved: 0,
    plasticBottlesSaved: 0,
    treesPlanted: 0,
  });

  // Simulate fetching or counting up
  useEffect(() => {
    const target = {
      co2Saved: 12500, // kg CO₂
      plasticBottlesSaved: 8200,
      treesPlanted: 320,
    };

    const interval = setInterval(() => {
      setImpact((prev) => ({
        co2Saved: prev.co2Saved < target.co2Saved ? prev.co2Saved + 125 : target.co2Saved,
        plasticBottlesSaved: prev.plasticBottlesSaved < target.plasticBottlesSaved ? prev.plasticBottlesSaved + 82 : target.plasticBottlesSaved,
        treesPlanted: prev.treesPlanted < target.treesPlanted ? prev.treesPlanted + 2 : target.treesPlanted,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <section className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-1">
          <h1 className="text-4xl">
            Our <span className="text-green-600">Collective Impact</span>
          </h1>
          <p className="text-base">
            Together, our community is making the world greener every day.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 text-center">
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-green-700">
              {impact.co2Saved.toLocaleString()} kg
            </h2>
            <p className="text-base">CO₂ Emissions Saved</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-green-700">
              {impact.plasticBottlesSaved.toLocaleString()}
            </h2>
            <p className="text-base">Plastic Bottles Avoided</p>
          </div>
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-3xl font-bold text-green-700">
              {impact.treesPlanted.toLocaleString()}
            </h2>
            <p className="text-base">Trees Planted</p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ImpactTracker;
