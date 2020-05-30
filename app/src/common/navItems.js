// Import menu from JSON file
import menuItems from 'Static/json/menu-nav.json';

const navItems = () => {

  // Iterate over menu items and map to new list
  const items = [];
  for (let [key, val] of Object.entries(menuItems)) {
    const item = {
      icon: val.icon,
      label: val.label,
      name: key,
      path: val.path,
    };

    items.push(item);
  }

  return items;

}

export default navItems;
