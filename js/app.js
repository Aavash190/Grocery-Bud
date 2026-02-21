// Import components
import { createForm } from "./form.js";
import { createItems } from "./items.js";

// Application state (our data)
let items = [
  { id: "1", name: "milk", completed: false },
  { id: "2", name: "bread", completed: true },
];

// Stores which item is currently being edited
let editId = null;

// =========================
// Render Application
// =========================
function render() {
  // Select main container
  const app = document.getElementById("app");

  // Clear old UI
  app.innerHTML = "";

  // Create form (pass edit info if editing)
  const formElement = createForm(
    editId,
    editId ? items.find((item) => item.id === editId) : null
  );

  // Create items list
  const itemsElement = createItems(items);

  // Add form and list to page
  app.appendChild(formElement);
  app.appendChild(itemsElement);
}

// =========================
// Generate Unique ID
// =========================
function generateId() {
  // Create unique ID using time + random string
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// =========================
// Add New Item
// =========================
export function addItem(itemName) {
  // Create new item object
  const newItem = {
    name: itemName,
    completed: false,
    id: generateId(),
  };

  // Add new item to array
  items = [...items, newItem];

  // Re-render UI
  render();

  // Show success message
  setTimeout(() => alert("Item Added Successfully!"), 0);
}

// =========================
// Update Item Name
// =========================
export function updateItemName(newName) {
  // Replace the edited item's name
  items = items.map((item) => {
    if (item.id === editId) {
      return { ...item, name: newName };
    }
    return item;
  });

  // Reset edit mode
  editId = null;

  // Re-render UI
  render();

  // Show success message
  setTimeout(() => alert("Item Updated Successfully!"), 0);
}

// =========================
// Set Edit Mode
// =========================
export function setEditId(itemId) {
  // Store the ID of item being edited
  editId = itemId;

  // Re-render so form updates
  render();

  // Focus input after render
  setTimeout(() => {
    const input = document.querySelector(".form-input");
    if (input) input.focus();
  }, 0);
}

// =========================
// Toggle Completed
// =========================
export function editCompleted(itemId) {
  // Toggle completed value
  items = items.map((item) => {
    if (item.id === itemId) {
      return { ...item, completed: !item.completed };
    }
    return item;
  });

  render();
}

// =========================
// Remove Item
// =========================
export function removeItem(itemId) {
  // Remove item from array
  items = items.filter((item) => item.id !== itemId);

  render();
}

// Run app first time
render();
