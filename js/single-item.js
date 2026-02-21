// Import functions from app.js
import { editCompleted, removeItem, setEditId } from "./app.js";

// Create Single Item Component
export default function createSingleItem(item) {
  const div = document.createElement("div");
  div.classList.add("single-item");

  // If completed, add completed style
  if (item.completed) {
    div.classList.add("completed");
  }

  // Create item structure
  div.innerHTML = `
    <input type="checkbox" ${item.completed ? "checked" : ""} />
    <p>${item.name}</p>
    <div class="btn-container">
      <button class="edit-btn">edit</button>
      <button class="delete-btn">delete</button>
    </div>
  `;

  // Select elements
  const checkbox = div.querySelector("input");
  const editBtn = div.querySelector(".edit-btn");
  const deleteBtn = div.querySelector(".delete-btn");

  // Toggle completed
  checkbox.addEventListener("change", () => editCompleted(item.id));

  // Edit name
  editBtn.addEventListener("click", () => setEditId(item.id));

  // Delete item
  deleteBtn.addEventListener("click", () => removeItem(item.id));

  return div;
}
