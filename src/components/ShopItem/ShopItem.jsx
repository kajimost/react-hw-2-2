export const ShopItem = ({ item }) => {
  return (
    <>
    <div className="item-img">
      <img src={item.img} alt={item.name} />
    </div>
    <div className="item-name">{item.name}</div>
    <div className="item-color">{item.color}</div>
    <div className="item-price">${item.price}</div>
    <div className="item-btn add-btn">Add to Cart</div>
    </>
  );
};