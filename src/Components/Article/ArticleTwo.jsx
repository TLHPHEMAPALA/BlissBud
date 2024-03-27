import React from 'react';

// Card component
const Card = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function Content() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-4">
        HERE ARE SOME PROVEN WAYS TO LOOK AFTER YOUR MENTAL HEALTH
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card
          title="NUTRITION"
          description="Eat a well balanced diet"
        />
        <Card
          title="EXERCISE"
          description="Stay active. Exercise regularly"
        />
        <Card
          title="TALK"
          description="Talk freely to someone"
        />
        <Card
          title="STAY HAPPY"
          description="Do something that makes you happy"
        />
      </div>
    </div>
  );
}
