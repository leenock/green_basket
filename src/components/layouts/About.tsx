// tsrf
import React from 'react';
import Image from 'next/image';
import aboutImage from '@/assets/images/aboutus3.png'; // Adjust the path to your image

export default function About() {
  return (
    <section className="mx-auto flex max-w-full flex-col items-center gap-6 px-4 pb-12 transition-all md:flex-row md:gap-8 bg-white ">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 mt-12 ">
        <Image 
          src={aboutImage} 
          alt="About us" 
          className="w-full h-auto rounded-lg shadow-lg transform transition-transform duration-700 ease-in-out opacity-0 translate-y-10 animate-fade-in"
          placeholder="blur" 
        />
      </div>
    {/* Text Section */}
      <div className="w-full space-y-4 md:w-1/2 bg-white p-6 rounded-lg  border-gray-200 animate-fade-in">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-teal-400 drop-shadow-md">
          About Us
        </h1>
        <hr className="border-t-2 border-gray-100 w-16" />
        
        <p className="leading-relaxed text-gray-500 text-base">
          At <span className="font-semibold text-green-700">Farmers Collective</span>, discover the heart of Kenyan agriculture.
          Our platform is your gateway to a network of dedicated farmers, offering a diverse range of fresh, local produce.
          Whether you are a business seeking wholesale suppliers or an individual looking for the freshest ingredients, 
          you can connect directly with the farmers who grow your food. We believe in simplifying the sourcing process, 
          promoting transparency, and celebrating the hard work of Kenyan farmers.
        </p>
        <p className="leading-relaxed text-gray-700 text-base">
          The platform connects buyers and farmers directly, fostering communication and collaboration. 
          Explore our listings, find your perfect partners, and join us in supporting Kenyan agricultural future.
        </p>
        <p className="leading-relaxed text-gray-700 text-base italic">
          Curious about our impact? Discover how we are building a stronger agricultural ecosystem.
        </p>

        <button className="mt-4 rounded-md bg-green-600 px-6 py-3 text-white transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-green-700 shadow-lg">
          Find out more
        </button>
      </div>
    </section>
  );
}
