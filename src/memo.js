const onClickAdd = () => {
    const textEl = document.getElementById("add-text");
    

    
    const liEl = document.createElement("li");
    const divEl = document.createElement("div");
    const pEl = document.createElement("p");
    
    
    const el = pEl.appendChild(textEl.textContent)
    divEl.appendChild(el)
    liEl.appendChild(divEl);
    
    const ulEl = document.getElementById("ul");
    container.append(textEl.value);
};
document.getElementById("add-button").addEventListener("click", () => onClickAdd());
