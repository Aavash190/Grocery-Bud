import { groceryItems } from "./data.js";
import { createItems } from "./items.js";

// App state
let items = groceryItems;

// Render the app UI
function render() {
  const app = document.getElementById("app");

  // Clear previous content
  app.innerHTML = "";

  // Create and display items
  const itemsElement = createItems(items);
  app.appendChild(itemsElement);
}

// Start the app
render();
