// components/WorkProcess.js
import React from 'react';

export default function WorkProcess() {
  const steps = [
    {
      number: '01',
      title: 'Identifying Problems',
      description:
        'Whatever the issue with your quartz stone, we at Evetis, stand ready to help with quartz restoration, quartz repair and quartz cleaning.',
    },
    {
      number: '02',
      title: 'Research Your Problem',
      description:
        'Revisiting the “Quartz Problem” in Evetis Studies: A Review and New, Open-access, Experimental Dataset',
    },
    {
      number: '03',
      title: 'Solutions Your Problem',
      description:
        'Adjust the pressing parameters (reduce vibration motor revolution speed and Time). Ensure that the paper (film) will not fracture under the condition that the slab pressing is finished.',
    },
    {
      number: '04',
      title: 'Consultation With Experts',
      description:
        'Our stone experts can help you find the perfect material for your project! Book an appointment for a free personal consultation.',
    },
  ];

  return (
    <section className="py-2 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Work Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="text-4xl font-bold text-blue-500 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
