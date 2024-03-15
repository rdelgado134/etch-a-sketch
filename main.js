//make initual 16x16 grid
const containerRef = document.getElementById("container");

for(let i = 0; i < 16; i++)
{
    for(let j = 0; j < 16; j++)
    {
        const newBox = document.createElement("div");
        newBox.id = "individual";
        newBox.classList.add("test");
        containerRef.appendChild(newBox);

    }
}

//Delete your current grid
function deleteGrid()
{
    //Need to check the container div for divs with
    //the id="individual"; KEEPS THE CONTAINER

    let individual = containerRef.querySelector("#individual");

    while (individual) {
        individual.remove();
        // Find the next individual element
        individual = containerRef.querySelector("#individual");
    }
}

/*Hover effect so that the grid divs change color when your
mouse passes over them.*/
containerRef.addEventListener("mouseover", changeBoxColor);
function changeBoxColor(event)
{
    //Below is the base line of code that makes the boxes red
    //event.target.style.backgroundColor = "red";

    var colors = ["red", "green", "blue", "yellow", "brown", "purple"];

    var grabRandomColor = colors[(Math.floor(Math.random() * colors.length))];

    event.target.style.backgroundColor = grabRandomColor;
}

/*After the new grid button is pressed
    -will need to delete the current grid
    -prompt user for their desired size
    -build a new container for our new grid
    -build the specified grid(max 100). Important to note
    that the new grid has to maintain all prexisting flex 
    and alignment rules.
    
    Change the flex width 
    */

function newGrid()
{
    const requestedSize = prompt("How many boxes do you want per side");
    let sizeNum = parseInt(requestedSize);
    const pixelWidth = 30;
    const newFlexWidth = pixelWidth * sizeNum;

    deleteGrid();

    for(let i = 0; i < sizeNum; i++)
    {
        for(let j = 0; j < sizeNum; j++)
            {
                const newBox = document.createElement("div");

                newBox.id = "individual";
                containerRef.appendChild(newBox);
            }
    }

    containerRef.style.flexBasis = newFlexWidth + "px"; 
}

/*This resets the grid color without deleting the grid

CAUSES SOME LAG, NEEDS ADJUSTMENT OR SCRAPPING*/

function clearGrid()
{
    //set the each grid box to default color through css
    const grabBox = document.querySelectorAll("#individual");
    const numOfBoxes = grabBox.length;
    //delete the old one but maintain the existing size

    let individual = containerRef.querySelector("#individual");
    while (individual) {
        individual.remove();
        // Find the next individual element
        individual = containerRef.querySelector("#individual");
    }

    //create the new grid
    for(let i = 0; i < numOfBoxes; i++)
    {
        for(let j = 0; j < numOfBoxes; j++)
            {
                const newBox = document.createElement("div");

                newBox.id = "individual";
                containerRef.appendChild(newBox);
            }
    }
}

//function randomColor
