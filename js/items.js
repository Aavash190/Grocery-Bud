import { createSingleItem } from "./single-item.js";

// Create the container that holds all items
export function createItems(itemsArray) {
  const container = document.createElement("div");
  container.className = "items";

  itemsArray.forEach((item) => {
    const singleItem = createSingleItem(item);
    container.appendChild(singleItem);
  });

  return container;
}
