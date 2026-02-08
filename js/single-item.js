// Create one list item element
export function createSingleItem(item) {
  const div = document.createElement("div");
  div.className = "single-item";

  const isCompleted = item.completed;

  div.innerHTML = `
    <input type="checkbox" ${isCompleted ? "checked" : ""} />

    <p style="text-decoration: ${isCompleted ? "line-through" : "none"}">
      ${item.name}
    </p>

    <button type="button" class="btn icon-btn edit-btn">
      <i class="fa-regular fa-pen-to-square"></i>
    </button>

    <button type="button" class="btn icon-btn remove-btn">
      <i class="fa-regular fa-trash-can"></i>
    </button>
  `;

  return div;
}
