import { Menulist } from "../helpers/MenuList";
import { MenuItem } from "../components/MenuItem";

import "../styles/menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {Menulist.map((item) => (
          <MenuItem
            key={item.id}
            image={item.image}
            price={item.price}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};
