import React from 'react'
import CardList from '../CardList'
import poids from "../assets/sante/poids.jpg";
import footing from "../assets/sante/footing.jpg";
import muscles from "../assets/sante/jambe1.jpeg";
import dents from "../assets/sante/dents.jpeg";


function Sante() {
  const data = [
    {
      titre: "Régime diet",
      description: "Une perte de poids sans reprendre de Kg c'est possible?",
      image: poids,
    },
    {
      titre: "Footing ",
      description: "Le footing est-t'il bon pour la santé?",
      image: footing,
    },
    {
      titre: "Muscles",
      description:
        "3 excercices pour muscler ces jambes",
      image: muscles,
    },
    {
      titre: "Dents",
      description:
        "Comment avoir des dents blanches naturellement?",
      image: dents,
    },
    
  ];

  return (
    
    <div >
      <CardList name="SANTE" data={data}/>
    </div>
  )
}

export default Sante

