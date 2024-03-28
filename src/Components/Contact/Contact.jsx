import React from 'react';
import Navbar from '../NavBar/nav';
import Footer from '../Footer/Footer';

// ProfessionalCard component
const ProfessionalCard = ({ name, profession, photo }) => (
  <div className="p-4 bg-white rounded-lg shadow-md">
    <img src={photo} alt={name} className="mx-auto mb-4 rounded-full" style={{ width: '100px', height: '100px' }} />
    <h3 className="mb-2 text-xl font-semibold text-gray-800">{name}</h3>
    <p className="text-gray-600">{profession}</p>
  </div>
);

export default function Contact() {
  return (
    <>
    <Navbar/>
    <div className="max-w-4xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <h2 className="mb-8 text-3xl font-bold text-center text-gray-900">Contact Professionals</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <ProfessionalCard
          name="John Doe"
          profession="Therapist"
          photo="https://via.placeholder.com/150"
        />
        <ProfessionalCard
          name="Jane Smith"
          profession="Psychologist"
          photo="https://via.placeholder.com/150"
        />
        <ProfessionalCard
          name="Michael Johnson"
          profession="Counselor"
          photo="https://via.placeholder.com/150"
        />
        <ProfessionalCard
          name="Emily Brown"
          profession="Life Coach"
          photo="https://via.placeholder.com/150"
        />
      </div>
      
      <h2 className="my-8 text-3xl font-bold text-center text-gray-900">Call Home</h2>
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">Call Home</h3>
        <p className="text-gray-600">Click here to call home.</p>
      </div>
    </div>
    <div>
        <Footer/>
    </div>
    </>
  );
}
