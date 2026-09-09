import { ShopCard } from "../ShopCard/ShopCard";

export const CardsView = ({ cards }) => {
  return (
    <div className="cards">
        {cards.map((card, i) => (
            <div key={i} className="cards-item card">
                <ShopCard card={card} />
            </div>
        ))}
    </div>
  );
};