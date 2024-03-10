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
    while(individual)
    {
        containerRef.remove(individual);
    }
}

/*Hover effect so that the grid divs change color when your
mouse passes over them.*/

//const newGridButton = document.getElementById("newGrid");//reference the new grid button

containerRef.addEventListener("mouseover", changeBoxColor);

function changeBoxColor(event)
{
    event.target.style.backgroundColor = "red";
}