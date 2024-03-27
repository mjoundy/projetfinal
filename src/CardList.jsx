import React, { useState } from "react";

const CardList = ({ titre, description, image }) => (
  <div className="card bg-stone-700 backdrop-blur-sm bg-opacity-25 h-[370px] w-[310px] shadow-2xl rounded-xl p-[15px] m-[20px]  ">
    <img
      src={image}
      alt={titre}
      className="mx-auto h-[200px] w-[110px] sm:w-[280px] float-top max-w-xs transition duration-300 ease-in-out hover:scale-110 rounded-xl"
    />
    <div className="w-[150px] sm:w-[300px] mx-auto">
      <span className="text-2xl font-abe font-bold m-[10px] p-[40px]text-left">
        {titre}
      </span>
      <p className="text-xl p-[10px] font-abc ">{description}</p>
    </div>
  </div>
);

const Cardlist = ({ data, name }) => {
  return (
    <div className=" mt-[-70px]">
      <div className="text-center m-10 p-4 font-family:Kalnia ">
        <div className="font-bold text-3xl text-gray-600 mt-[70px] mb-[-20px] bg-slate-300 p-[20px] backdrop-blur-sm bg-opacity-30 shadow-2xl rounded-xl m-[20px] w-[1250px]">
          <p className=" mb-[-30px] ml-[40px]mt-[60px] "> {name} </p>
          <div className="flex items-center justify-center mt-8"></div>
        </div>
      </div>

      <section className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
        {data.map((item, index) => (
          <CardList
            key={index}
            titre={item.titre}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>
    </div>
  );
};

export default Cardlist;

