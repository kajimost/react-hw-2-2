export const ShopCard = ({ card }) => {
  return (
    <>
    <div className="card-name">{card.name}</div>
    <div className="card-color">{card.color}</div>
    <div className="card-img">
      <img src={card.img} alt={card.name} />
    </div>
    <div className="card-price">${card.price}</div>
    <div className="card-btn add-btn">Add to Cart</div>
    </>
  );
};