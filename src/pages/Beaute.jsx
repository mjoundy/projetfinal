import React from 'react'
import CardList from '../CardList'
import cheveux from "../assets/beaute/cheveux.jpg";
import ongles from "../assets/beaute/ongles.webp";
import peau from "../assets/beaute/peau.png";
import rides from "../assets/beaute/rides.png";
import yeux from "../assets/beaute/yeux.jpg";
import levres from "../assets/beaute/Lèvres.jpg";
import beaute from "../assets/beaute/ressortir beaute.png";
import parfum from "../assets/beaute/parfum.webp";

function Beaute() {
  const data = [
    {
      titre: "Cheveux",
      description: "Comment avoir de beaux cheveux naturellement ?",
      image: cheveux,
    },
    {
      titre: "Ongles ",
      description: "3 astuces de grands-mères pour fortifier les ongles",
      image: ongles,
    },
    {
      titre: " Peaux",
      description:
        "Comment rajeunir la peau qui veillit?",
      image: peau,
    },
    {
      titre: "Rides",
      description:
        "Comment éviter les rides du visage?",
      image: rides,
    },
    {
      titre: "Yeux",
      description:
        "Comment mettre en valeur ses yeux?",
      image: yeux,
    },
    {
        titre: "Lévres",
        description:
          "Baume à lèvre bio fait maison",
        image: levres,
      },
      {
        titre: "Beauté",
        description:
          "Comment faire ressortir sa beauté ?",
        image: beaute,
      },
      {
        titre: "Parfum",
        description:
          "Comment choisir son parfum ?",
        image: parfum,
      },
  ];

  return (
    
    <div >
      
      <CardList name="BEAUTE" data={data}/>
    </div>
  )
}

export default Beaute
