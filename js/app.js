// Import the function that creates a single item element
import createSingleItem from "./single-item.js";

// Our grocery items array (each item has id, name, completed status)
let items = [
  { id: 1, name: "milk", completed: true },
  { id: 2, name: "bread", completed: true },
  { id: 3, name: "eggs", completed: false },
  { id: 4, name: "butter", completed: false },
];

// Select the main container where items will be displayed
const list = document.querySelector(".grocery-list");

// =========================
// Render Function
// =========================

// This function displays all items on the screen
export function render() {
  list.innerHTML = "";

  items.forEach((item) => {
    const element = createSingleItem(item);
    list.appendChild(element);
  });
}

// =========================
// Edit Completed Function
// =========================

// This function toggles the completed status of an item
export function editCompleted(itemId) {
  // Update the items array using map()
  items = items.map((item) => {
    // If current item's id matches clicked item id
    if (item.id === itemId) {
      // Return new object with opposite completed value
      return { ...item, completed: !item.completed };
    }

    // Otherwise return item unchanged
    return item;
  });

  // After updating data, re-render UI
  render();
}

// Call render() once when page loads
render();
