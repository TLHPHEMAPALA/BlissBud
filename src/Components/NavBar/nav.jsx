import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800  ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
         
          <div className="flex-shrink-0 flex items-center mr-40">
            <Link to="/">
              <h1 className='mb-3 text-2xl font-semibold'>BlissBud</h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-10">
              <Link to="/music" className="text-white hover:bg-gray-700 px-2 py-3 rounded-md text-xl font-medium">Music</Link>
              <Link to="/meditation" className="text-white hover:bg-gray-700 px-2 py-3 rounded-md text-xl font-medium">Meditation</Link>
              <Link to="/videos" className="text-white hover:bg-gray-700 px-2 py-3 rounded-md text-xl font-medium">Videos</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
