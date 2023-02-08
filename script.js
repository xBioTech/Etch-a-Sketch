const container = document.querySelector(".container");

function createGrid(numOfRows, numOfColumns){

  
      container.style.gridTemplateColumns = `repeat(${numOfColumns}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfRows}, 1fr)`;
    

    container.textContent = "";


    for (let i = 0; i < numOfRows * numOfColumns; i++){
        const div = document.createElement("div");
        container.appendChild(div);

        div.addEventListener("mouseover", () => {
          div.style.backgroundColor = "black";
        });
    }
    

}
createGrid(16, 16);

const restartButton = document.querySelector(".btn");
restartButton.addEventListener("click", () => {
  const numOfRows = slider.value;
  const numOfColumns = slider.value;
  createGrid(numOfRows, numOfColumns);
});



const slider = document.querySelector("#slider");

slider.addEventListener("input", function() {
  const numOfRows = slider.value;
  const numOfColumns = slider.value;
  createGrid(numOfRows, numOfColumns);
  });


const output = document.querySelector("#output");

output.textContent = slider.value;

slider.oninput = function() {
  output.textContent = this.value;
}





