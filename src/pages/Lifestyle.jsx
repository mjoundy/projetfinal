import React from "react";
import CardList from "../CardList";
import lifestyleImage from "../assets/lifestyle/healthyliving.webp";

function Lifestyle() {
  const data = [
  ];

  return (
    <div className=" bg-cover bg-center" style={{backgroundImage: `url(${lifestyleImage})`, backgroundSize: "cover"}}>
      <div className="h-[full] py-[1px]">
        
        <CardList name="LIFESTYLE" data={data} />
        <div className="p-[2px]">
<div className="bg-[#eeb57c] w-fit rounded-[100%] h-[110px] p-4 translate-y-[50px] translate-x-[400px] backdrop-blur-sm bg-opacity-60"><p className="font-bold relative translate-y-[23px]">Astuces beauté</p></div>
<div className="bg-[#eeb57c] w-fit rounded-[100%] h-[110px] p-4 translate-y-[10px] translate-x-[500px] backdrop-blur-sm bg-opacity-60"><p className="font-bold relative translate-y-[23px]">Idées mode</p></div>
<div className="bg-[#eeb57c] w-fit rounded-[100%] h-[110px] p-4 translate-y-[-45px] translate-x-[600px] backdrop-blur-sm bg-opacity-60"><p className="font-bold relative translate-y-[23px]">Conseils santé</p></div>
<div className="bg-[#eeb57c] w-fit rounded-[100%] h-[110px] p-4 translate-y-[-250px] translate-x-[1100px] backdrop-blur-sm bg-opacity-60"><p className="font-bold relative translate-y-[23px]">Organisation maison</p></div>
<div className="bg-[#eeb57c] w-fit rounded-[100%] h-[110px] p-4 translate-y-[-300px] translate-x-[1000px] backdrop-blur-sm bg-opacity-60"><p className="font-bold relative translate-y-[23px]">Cuisine</p></div>

      </div>
      </div>
      
    </div>
  );
}

export default Lifestyle;