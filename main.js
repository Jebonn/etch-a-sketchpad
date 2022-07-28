// Create a grid based on parameters given. Default grid size = 16x16.
function createGrid(width=16, height=16) {
    for (let x = 0; x < width; x++) {
        const column = document.createElement("div");
        column.id = `column-${x}`;
        container.appendChild(column);

        for (let y = 0; y < height; y++) {
            const row = document.createElement("div");
            row.id = `row-${y}`;
            container.lastChild.appendChild(row);
        }
    }
}

const container = document.querySelector("#container");
createGrid();