import { createForm } from "./form.js";
import { createItems } from "./items.js";

let items = [
  { id: "1", name: "milk", completed: false },
  { id: "2", name: "bread", completed: true },
];

// =========================
// Render App
// =========================
function render() {
  const app = document.getElementById("app");
  app.innerHTML = "";

  const formElement = createForm();
  const itemsElement = createItems(items);

  app.appendChild(formElement);
  app.appendChild(itemsElement);
}

// =========================
// Generate Unique ID
// =========================
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// =========================
// Add Item
// =========================
export function addItem(itemName) {
  const newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
  };

  items = [...items, newItem];

  render();

  setTimeout(() => alert("Item Added Successfully!"), 0);
}

// Initial render
render();
