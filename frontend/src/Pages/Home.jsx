import React from "react";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 h-screen px-8 md:px-20 lg:px-40 xl:px-60 text-center bg-[url('./assets/bg.jpg')] bg-fixed bg-cover">
      <div className="text-white uppercase font-bold text-3xl md:texxt-5xl lg:text-6xl">
        IT company and Training Institute
      </div>
      <div className="text-white text:sm md:text-base lg:text-lg ">
        From web development to network solutions, our skilled IT officers offer
        comprehensive IT services. We keep your IT infrastructure up-to-date and
        resolve infrastructure-specific problems. We also provide IT training.
        Trust us for all your IT needs.
      </div>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="bg-blue-500 px-6 py-3 rounded-sm text-white hover:opacity-60 transition duration-300">
          Get Started
        </button>
        <button className="bg-blue-500 px-6 py-3 rounded-sm text-white hover:opacity-60 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
