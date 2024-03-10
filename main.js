/*nested for loops create 96 div elements with the class "box"*/
const containerID = document.getElementById("container");

for(let i = 0; i < 16; i++)
{
    for(let j = 0; j < 16; j++)
    {
        const box = document.createElement("div");
        box.id = "test"
        box.classList.add("box");
        containerID.appendChild(box);
    }
}

/*eventlistener that will change the color of the div when mouse hovers over*/
function changeColor(event)
{
    event.target.style.backgroundColor = "purple";
}

containerID.addEventListener("mouseover", changeColor);

/*Triggers a prompt asking the user for a number which will be the amount of boxes per side,
then does the worky work."*/
function newGrid()
{
    const userAnswer = prompt("How many boxes per side?");
    const requestedNum = parseInt(userAnswer);

    //delete grid before adding a new one
    deleteGrid();

    
    for(let i = 0; i < requestedNum; i++)
    {
        for(let j = 0; j < requestedNum; j++)
        {
            const box = document.createElement("div");
            box.classList.add("box");
            containerID.appendChild(box);
        }
    }
}

/*Deletes the grid*/
function deleteGrid()
{
    const testDivs = document.querySelectorAll('#test');

testDivs.forEach(div => {
    div.parentNode.removeChild(div);
});
}