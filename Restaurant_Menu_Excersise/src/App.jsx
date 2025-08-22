import { MENU_ITEMS } from './data.js';
import MenuItem from './MenuItem.jsx';

export default function App() {
  return (
    <div>
      <h1>Restaurant Menu</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {MENU_ITEMS.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

// each item is its own component