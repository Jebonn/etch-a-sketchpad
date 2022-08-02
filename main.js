// Create a grid based on parameters given.
function createGrid(width=50, height=50, size=10) {
    for (let x = 0; x < width; x++) {
        const column = document.createElement("div");
        column.id = `column-${x}`;
        sketchpad.appendChild(column);

        for (let y = 0; y < height; y++) {
            const sector = document.createElement("div");
            sector.className = "sector";
            sector.style.minWidth = `${size}px`;
            sector.style.minHeight = `${size}px`;
            sketchpad.lastChild.appendChild(sector);
        }
    }
}

function deleteGrid() {
    sketchpad.textContent = '';
}

// Prompts for new size, deletes old grid, then creates a new grid
// Modifies sector sizes so that sketchpad stays 500x500
function changeGridDensity() {
    const newDensity = Number(prompt("Enter a new grid size #: "));
    deleteGrid();
    createGrid(newDensity, newDensity, 500 / newDensity);
}

const sketchpad = document.querySelector("#sketchpad");
const densityButton = document.querySelector(".density-button");

densityButton.addEventListener('click', changeGridDensity);

createGrid();