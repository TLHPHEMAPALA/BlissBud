import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../NavBar/nav'; 
import sideImage from '../../Assests/Dashboard.png'; 
import './style.css';
import Content from '../Article/Article';
import ContentTwo from '../Article/ArticleTwo';



export default function Dashboard() {
  return (
    <div>
      <Navbar/>
      <Content/>
      <div className="flex items-center justify-center h-screen page ">
        <div className="flex flex-col items-center justify-center w-1/2 ">
          <h1 className="mb-8 text-5xl font-bold text-white  ">What do u want to try ?</h1>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center justify-center w-48 h-48 text-xl font-semibold text-white transition duration-300 bg-blue-400 rounded-lg shadow-md card hover:bg-blue-500">
            <Link to="/Questionarie" className="text-white hover:bg-gray-700 px-2 py-3 rounded-md text-xl font-medium">Lets' Say HI</Link>
            </div>
           
            <div className="p-5 flex items-center justify-center w-48 h-48 text-xl font-semibold text-white transition duration-300 bg-green-400 rounded-lg shadow-md card hover:bg-green-500">
            <Link to="/Music" className="text-white hover:bg-gray-700 px-2 py-3 rounded-md text-xl font-medium">Wanna hear nice music ?</Link>
              
            </div>
            <div className="p-5 flex items-center justify-center w-48 h-48 text-xl font-semibold text-white transition duration-300 bg-yellow-400 rounded-lg shadow-md card hover:bg-yellow-500">
            <Link to="/Meditation" className="text-white hover:bg-gray-700 px-2 py-3 rounded-md text-xl font-medium">Meditation</Link>
            </div>
            <div className="flex items-center justify-center w-48 h-48 text-xl font-semibold text-white transition duration-300 bg-red-400 rounded-lg shadow-md card hover:bg-red-500">
            <Link to="/" className="text-white hover:bg-gray-700 px-2 py-3 rounded-md text-xl font-medium">Call</Link>
            </div>
          </div>
        </div>

        <div className="w-1/2 ">
          <img src={sideImage} alt="Side Image" className="h-auto w-[1000px] " />
        </div>
      </div>
      <ContentTwo/>
    </div>
  );
}
