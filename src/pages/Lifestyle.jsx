import React from "react";
import CardList from "../CardList";
import lifestyleImage from "../assets/lifestyle/healthyliving.webp";

function Lifestyle() {
  const data = [
  ];

  return (
    <div className="h-screen bg-cover bg-center" style={{backgroundImage: `url(${lifestyleImage})`, backgroundSize: "cover"}}>
      <div className="h-full">
        
        <CardList name="LIFESTYLE" data={data} />
        <div className="p-[70px]">
<p className="font-bold">Astuces beauté</p>
<p className="font-bold">Idées mode</p>
<p className="font-bold">Conseils santé</p>
<p className="font-bold">Organisation maison</p>
<p className="font-bold">Cuisine</p>

      </div>
      </div>
      
    </div>
  );
}

export default Lifestyle;