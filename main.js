/*nested for loops create 96 div elements with the class "box"*/
const containerID = document.getElementById("container");

for(let i = 0; i < 16; i++)
{
    for(let j = 0; j < 16; j++)
    {
        const box = document.createElement("div");
        box.classList.add("box");
        containerID.appendChild(box);
    }
}