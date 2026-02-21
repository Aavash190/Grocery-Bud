// Import single item component
import createSingleItem from "./single-item.js";

// Create Items List Component
export function createItems(items) {
  // Main container
  const container = document.createElement("div");
  container.classList.add("grocery-container");

  // List wrapper
  const list = document.createElement("div");
  list.classList.add("grocery-list");

  // Create each item and add to list
  items.forEach((item) => {
    const element = createSingleItem(item);
    list.appendChild(element);
  });

  container.appendChild(list);

  return container;
}


