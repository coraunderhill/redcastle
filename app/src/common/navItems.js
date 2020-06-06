// Import menu from JSON file
import menuItems from 'Static/json/menu-nav.json';

/**
 * Parses `menu-nav.json`
 * @returns {Array} Array of navigation item objects
 */
const navItems = () => {

  /**
   * Navigation items
   * @type {Array}
   */
  const items = [];

  // Iterate over menu items and map to new list
  for (let [key, val] of Object.entries(menuItems)) {
    /**
     * Navigation item from menu object
     * @type {Object}
     */
    const item = {
      icon: val.icon,
      label: val.label,
      name: key,
    };

    items.push(item);
  }

  return items;

}

export default navItems;
