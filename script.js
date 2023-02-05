const container = document.querySelector(".container");

function createDivs(num){
    for (let i = 0; i < num; i++){
        const div = document.createElement("div");
        container.appendChild(div);
    }
}
createDivs(256);