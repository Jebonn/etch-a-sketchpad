function changeColor(e) {
    if (e.buttons === 1) {
        this.style.backgroundColor = colorPicker.value;
    }
}

// Create a grid based on parameters given.
function createGrid(density=50) {
    const size = 500 / density;     // Max grid size is 500x500 pixels
    sketchpad.textContent = '';     // Clears the grid

    for (let x = 0; x < density; x++) {
        const column = document.createElement("div");
        column.id = `column-${x}`;
        sketchpad.appendChild(column);

        for (let y = 0; y < density; y++) {
            const sector = document.createElement("div");
            sector.className = "sector";
            sector.style.minWidth = `${size}px`;
            sector.style.minHeight = `${size}px`;
            sector.addEventListener('mouseover', changeColor);
            sketchpad.lastChild.appendChild(sector);
        }
    }
}

function clearGrid() {
    density = sketchpad.childElementCount;
    createGrid(density);
}

// Prompts for new size, deletes old grid, then creates a new grid
function changeGridDensity() {
    let density = Number(prompt("Enter a new grid size (max 100): "));
    if (density == 0) {return};
    while (density < 0 || density > 100 || isNaN(density)) {
        density = Number(prompt("Please enter a valid size (1-100): "));
        if (density == 0) {return};
    }
    createGrid(density);
}

const sketchpad = document.querySelector("#sketchpad");
const densityButton = document.querySelector(".density-button");
const clearButton = document.querySelector(".clear-button");
densityButton.addEventListener('click', changeGridDensity);
clearButton.addEventListener('click', clearGrid);

const colorPicker = document.querySelector("#color-picker");
const pickerWrapper = document.querySelector("#picker-wrapper");
colorPicker.addEventListener('change', () => {
    pickerWrapper.style.backgroundColor = colorPicker.value;
})
pickerWrapper.style.backgroundColor = colorPicker.value;

createGrid();

/*
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!NOTES FOR VARIOUS addEventListner SYNTAX!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
-----EXAMPLE 1-----
[element].addEventListner('[event]', [function])
function [function]() {
    ~some code here~
    **using the 'this' keyword here will refer to the [element] object
    **can have a name in the parameter function's to refer to [event]
}

-----EXAMPLE 2-----
[element].addEventListner('[event]', function()) {
    ~some code here~
    **using the 'this' keyword here will refer to the [element] object
    **can have a name in function's parameter to refer to [event] object
})

-----EXAMPLE 3----- (using the arrow function)
[element].addEventListener('[event]', () => {
    ~some code here~
    **can't use 'this' keyword, must use [element]'s name
    **can have a name in function's parameter to refer to [event] object
})
*/