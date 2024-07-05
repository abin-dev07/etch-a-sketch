let size=0;
// Header
const header =document.createElement("div")
header.classList="header";
const body = document.getElementsByTagName("body")[0];

body.appendChild(header)

// Heading

const heading=document.createElement("h1")
heading.classList="heading";
heading.innerHTML="Etch-A-Sketch"
header.appendChild(heading)

// User Input for Size parameter
const userInput =document.createElement("div")
userInput.classList="userInput"

const customSizeInput =document.createElement("input");
customSizeInput.classList="customSizeInput";
customSizeInput.type="number";
customSizeInput.placeholder="Enter size for the canvas";

// EventListner for the Size
customSizeInput.addEventListener("change", (e) => {
    size = e.target.value;
  });
const submitButton = document.createElement("button");
submitButton.innerHTML = "create";
submitButton.type = "submit";
submitButton.classList="submitButton"
userInput.appendChild(customSizeInput)
userInput.appendChild(submitButton)
header.appendChild(userInput);

// Event listner for the button
const canvas = () => {
    container.innerHTML = "";
    sketch(size);
  };
submitButton.addEventListener("click", canvas);

// The canvas sketch section
const container =document.createElement("div");
container.classList="container";

const sketch=(size)=>{
    if(size>100){
        console.log("its hard to implement")
        return
    }
    for(let i=0;i<size;i++){
        const row =document.createElement("div");
        row.classList="row";
        container.appendChild(row);
        
        for(let i=0;i<size;i++){
            const pixel=document.createElement("div");
            pixel.classList="pixel";
            const paint=()=>{
                pixel.style.backgroundColor="grey";
            }
            pixel.addEventListener("mouseover",paint);
            row.appendChild(pixel)
        }
    };
}
body.appendChild(container)
sketch(16); /* By default it will print 16 */