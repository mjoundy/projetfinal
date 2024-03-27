import React from "react";
import CardList from "../CardList";
import temperatures from "../assets/maison/temperatures.jpg";
import vitres from "../assets/maison/baie vitre.webp";
import linge from "../assets/maison/linge-propre.jpg";
import bicarbonades from "../assets/maison/bicarbonades.jpg";

function Maison() {
  const data = [
    {
      titre: "Température",
      description: "Quelle est la température idéale dans une maison?",
      image: temperatures,
    },
    {
      titre: "Baie Vitrée",
      description:
        "Les baies vitrées apportent un charme indéniable à votre salon",
      image: vitres,
    },
    {
      titre: "Linge",
      description: "Des produits sains pour un linge propre et frais",
      image: linge,
    },
    {
      titre: "Bicarbonade",
      description: "Le bicarbonade de soude, une astuce menage qui brille !",
      image: bicarbonades,
    },
  ];

  return (
    <div>
      <CardList name="MAISON" data={data} />
    </div>
  );
}

export default Maison;
