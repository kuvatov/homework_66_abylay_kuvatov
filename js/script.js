// task1
console.log(document.getElementById("string-3").textContent);
console.log(document.getElementById("string-5").textContent);
console.log(document.getElementById("string-2").textContent);
console.log(document.getElementById("string-6").textContent);
console.log(document.getElementById("string-4").textContent);
console.log(document.getElementById("string-1").textContent);

// task2
const elements = document.getElementsByClassName("element");
for (let i = 0; i < elements.length; i++) {
    if (i < 3) {
    elements[i].style.color = "red";
    } else {
    elements[i].style.color = "green";
    }
}

// task3
const container = document.getElementById("container");
for (let i = 1; i <= 5; i++) {
    let div = document.createElement("div");
    div.className = "element";
    let color = '';
    if (i === 1) {
    color = "gray";
    } 
    else if (i === 2) {
    color = "red";
    } 
    else if (i === 3) {
    color = "blue";
    } 
    else if (i === 4) {
    color = "green";
    } 
    else if (i === 5) {
    color = "orange";
    }
    div.innerHTML = "Element <span style='color:" + color + "'>" + i + "</span>";
    container.appendChild(div);
}
