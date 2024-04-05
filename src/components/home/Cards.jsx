import Card from './Card'
import { useLoaderData } from "react-router-dom";

const Cards = () => {

    const cards = useLoaderData();

    return (
             <div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto gap-10 pb-10">
{
    cards.map(card=><Card key={card.id} card={card}></Card>)
}
</div>


</div>
        
    );
};

export default Cards;