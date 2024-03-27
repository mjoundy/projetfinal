import React from 'react'
import CardList from '../CardList'
import Habits from '../assets/mode/habits  morpho.jpg';
import Saison from '../assets/mode/saisons.jpg';
import Lin from '../assets/mode/vetements-en-lin.jpg';
import vetement from '../assets/mode/tendance-mode.jpg';
import lunettes from '../assets/mode/lunettes.jpg';
import baskets from '../assets/mode/baskets-blanches-tendance.jpg'
import budget from '../assets/mode/budget.webp'
import coiffure from '../assets/mode/coiffure.jpg'



function mode() {
  
    const data = [
      {
        titre: "Morphologie",
        description: "Comment connaître sa morphologie?",
        image: Habits,
      },
      {
        titre: "Saison",
        description: "Les secrets pour être à la mode chaque saison",
        image: Saison,
      },
      {
        titre: "Le lin",
        description:
          "Le lin, une matière tendance pour vos vêtements",
        image: Lin,
      },
      {
        titre: "Tendance",
        description:
          "Comment faire pour être toujours bien habillé?",
        image: vetement,
      },
      {
        titre: "Lunettes",
        description:
          "Comment choisir les lunettes en fonction de son visage?",
        image: lunettes,
      },
      {
        titre: "Baskets",
        description:
          "Basket blanche femme : les sneakers les plus tendances",
        image: baskets,
      },
      {
        titre: "Budget",
        description:
          "Comment s'habiller avec un petit budget? ",
        image: budget,
      },
      {
        titre: "Coupe de cheveux",
        description:
          "Quelle coupe de cheveux pour quelle forme de visage? ",
        image: coiffure,
      },

    ];

    return (
      
      <div >
        <CardList name="MODE" data={data}/>
      </div>
    )
  }
   

export default mode
