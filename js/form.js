// Import functions from app.js
import { addItem, updateItemName } from "./app.js";

// Create Form Component
export function createForm(editId, itemToEdit) {
  const form = document.createElement("form");

  // Create form HTML
  form.innerHTML = `
    <h2>grocery bud</h2>
    <div class="form-control">
      <input
        type="text"
        class="form-input"
        placeholder="e.g. eggs"
        value="${itemToEdit ? itemToEdit.name : ""}"
      />
      <button type="submit" class="btn">
        ${editId ? "edit item" : "add item"}
      </button>
    </div>
  `;

  // Handle form submit
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = form.querySelector(".form-input");
    const value = input.value.trim();

    // Prevent empty input
    if (!value) {
      alert("Please provide value");
      return;
    }

    // If editing → update
    if (editId) {
      updateItemName(value);
    }
    // Otherwise → add new item
    else {
      addItem(value);
    }

    // Clear input
    input.value = "";
  });

  return form;
}
