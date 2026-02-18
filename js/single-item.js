// Import the editCompleted function from app.js
import { editCompleted } from "./app.js";

// This function creates one grocery item element
export default function createSingleItem(item) {
  // Create container div
  const div = document.createElement("div");
  div.classList.add("single-item");

  // Add completed class if item is completed
  if (item.completed) {
    div.classList.add("completed");
  }

  // Insert structure
  div.innerHTML = `
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <p>${item.name}</p>
    <button class="edit-btn">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>
    <button class="remove-btn">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  `;

  // Checkbox toggle functionality
  const checkbox = div.querySelector('input[type="checkbox"]');

  checkbox.addEventListener("change", () => {
    editCompleted(item.id);
  });

  return div;
}
