import React from 'react'
import CardList from '../CardList'
import Bio from '../assets/cuisine/manger-bio.jpg';
import Liste from '../assets/cuisine/liste courses.webp';
import Electromenager from '../assets/cuisine/electromenager.jpg';
import cafe from '../assets/cuisine/cafe-italien.jpg';

function cuisine () {
  
    const data = [
      {
        titre: "Manger Bio",
        description: "Manger bio, qu'en pensez-vous?",
        image: Bio,
      },
      {
        titre: "Liste des courses",
        description: "Comment faire une liste de course?",
        image: Liste,
      },
      {
        titre: "Electromenagers : Les indispensables",
        description:
          "Les petits electroménagers pour vous faciliter la vie",
        image: Electromenager,
      },
      {
        titre: "Café italien",
        description:
          "Comment faire un bon café italien?",
        image: cafe,
      },
    ];

    return (
      
      <div >
        <CardList name="CUISINE" data={data}/>
      </div>
    )
  }
   

export default cuisine
