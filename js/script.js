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