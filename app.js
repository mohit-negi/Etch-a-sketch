let container = document.querySelector('.grid-container');
function createGrid(rows,columns)
{
    for(let j = columns;j < (rows * columns);j++)
        {
            let grid = document.createElement('div');
            grid.style.backgroundColor = 'white';
            grid.style.border = '1px solid black';
            container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
            container.appendChild(grid);
            grid.classList.add('grid');
        }
}
const body = document.querySelector('body');

createGrid(32,32);

// Adding different button and adding mouseover functionality
// to change the color when hovered over the grids

const navbar = document.querySelector('.navbar');

const redButton = document.createElement('button');
const blueButton = document.createElement('button');
const greenButton = document.createElement('button');
const rgbButton = document.createElement('button');
const resetButton = document.createElement('button');

function defaultColor()
{
    const grids = document.querySelectorAll('.grid');
        grids.forEach(grid => {
            grid.addEventListener('mouseover',() => {
                grid.style.backgroundColor = 'black';
                grid.style.border = '1px solid black';
            });
        });
}
defaultColor();
function redColor()
{
    const grids = document.querySelectorAll('.grid');
    redButton.textContent = 'Red';
    redButton.style.border = '1px solid red';
    redButton.classList.add('red');

    redButton.addEventListener('click',() => {
        redButton.classList.toggle('click');
        grids.forEach(grid => {
            grid.addEventListener('mouseover',() => {
                grid.style.backgroundColor = 'red';
                grid.style.border = '1px solid red';
            });
        });
    });
    navbar.appendChild(redButton);
}
redColor();
function blueColor()
{
    const grids = document.querySelectorAll('.grid');
    blueButton.textContent = 'Blue';
    blueButton.style.border = '1px solid blue';
    blueButton.classList.add('blue');

    blueButton.addEventListener('click',() => {
        blueButton.classList.toggle('click');
        grids.forEach(grid => {
            grid.addEventListener('mouseover',() => {
                grid.style.backgroundColor = 'blue';
                grid.style.border = '1px solid blue';
            });
        });
    });
    navbar.appendChild(blueButton);
}
blueColor();
function greenColor()
{
    const grids = document.querySelectorAll('.grid');
    greenButton.textContent = 'Green';
    greenButton.style.border = '1px solid green';
    greenButton.classList.add('green');

    greenButton.addEventListener('click',() => {
    greenButton.classList.toggle('click');
        grids.forEach(grid => {
            grid.addEventListener('mouseover',() =>{ 
                grid.style.backgroundColor = 'green';
                grid.style.border = '1px solid green';
            });
        });
    });
    navbar.appendChild(greenButton);
}
greenColor();
function rgbColor()
{
    let grids = document.querySelectorAll('.grid');
    rgbButton.textContent = 'RGB';
    rgbButton.style.border = '1px solid black';
    rgbButton.classList.add('rgb');

    rgbButton.addEventListener('click',() => {
        rgbButton.classList.toggle('click');
        grids.forEach(grid => {
            grid.addEventListener('mouseover',() => {
                let rNumRed = Math.floor(Math.random() * 255);
                let rNumGreen = Math.floor(Math.random() * 255);
                let rNumBlue = Math.floor(Math.random() * 255);
                grid.style.backgroundColor = `rgb(${rNumRed},${rNumGreen},${rNumBlue})`;
            });
        });
    });
    navbar.appendChild(rgbButton);
}
rgbColor();
function colorReset()
{
    let grids = document.querySelectorAll('.grid');
    resetButton.textContent = 'Reset';
    resetButton.classList.add('reset');
    resetButton.style.border = '1px solid black';
    resetButton.style.borderRadius = '5px';

    resetButton.addEventListener('click',() => {
        resetButton.classList.toggle('click');
        grids.forEach(grid =>{
            grid.style.backgroundColor = 'white';
        });
    });
    navbar.appendChild(resetButton);
}
colorReset();
/*
function navBar()
{
    document.querySelector('.nav-button').addEventListener('click', function() {
    this.parentNode.parentNode.classList.toggle('closed'); })
};
*/