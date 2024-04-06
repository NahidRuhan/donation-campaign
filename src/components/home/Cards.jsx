import { useEffect, useState } from 'react';
import Card from './Card'
import { useLoaderData } from "react-router-dom";

const Cards = ({ search }) => {
    const cards = useLoaderData();
  
    const [filteredCards, setFilteredCards] = useState(cards);
  
    useEffect(() => {
      if (search) {
        const filteredCards = cards.filter((card) =>
          card.Category.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredCards(filteredCards);
      } else {
        setFilteredCards(cards);
      }
    }, [search, cards]);
  
    return (
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-10 pb-10">
          {filteredCards.length ? (
            filteredCards.map((card) => (
              <Card key={card.id} card={card} />
            ))
          ) : (
            <div className="col-span-4 text-center space-y-3">
              <p className=" text-center font-bold text-2xl">
                Doesn&apos;t match with category
              </p>
              <button onClick={() => window.location.reload()} className="btn btn-primary">
                Refresh
              </button>
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default Cards;