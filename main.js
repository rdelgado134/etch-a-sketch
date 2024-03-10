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
containerRef.addEventListener("mouseover", changeBoxColor);
function changeBoxColor(event)
{
    event.target.style.backgroundColor = "red";
}

/*After the new grid button is pressed
    -will need to delete the current grid
    -build a new container for our new grid
    -build the specified grid(max 100). Important to note
    that the new grid has to maintain all prexisting flex 
    and alignment rules.*/
