// Import the editCompleted function from app.js
import { editCompleted } from "./app.js";

// This function creates one grocery item element
export default function createSingleItem(item) {
  // Create a new div element
  const div = document.createElement("div");

  // Add class for styling
  div.classList.add("single-item");

  // If item is completed, add completed class
  if (item.completed) {
    div.classList.add("completed");
  }

  // Insert HTML structure inside div
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

  // Select the checkbox inside this div
  const checkbox = div.querySelector('input[type="checkbox"]');

  // Add event listener to checkbox
  checkbox.addEventListener("change", () => {
    // When checkbox is changed, call editCompleted function
    editCompleted(item.id);
  });

  // Return the completed div element
  return div;
}
