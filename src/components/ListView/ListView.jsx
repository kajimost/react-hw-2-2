import { ShopItem } from "../ShopItem/ShopItem";

export const ListView = ({ items }) => {
  return (
    <div className="list-items">
        {items.map((item, i) => (
            <div key={i} className="list-item item">
                <ShopItem item={item} />
            </div>
        ))}
    </div>
  );
};