let container = document.querySelector('.grid-container');


function createGrid(rows,columns)
{
    for(let j = columns;j < (rows * columns);j++)
        {
            let grid = document.createElement('div');
            grid.style.backgroundColor = 'white';
            grid.style.border = '1px solid black';
            grid.style.borderRadius = '2px';
            container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
            container.appendChild(grid);
            grid.classList.add('grid');
        }
}

createGrid(16,16);

