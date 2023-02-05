const container = document.querySelector(".container");

function createDivs(num){
    for (let i = 0; i < num; i++){
        const div = document.createElement("div");
        container.appendChild(div);
    }
}
createDivs(256);

const slider = document.querySelector("#slider");
const output = document.querySelector("#output");

output.textContent = slider.value;

slider.oninput = function() {
  output.textContent = this.value;
}

