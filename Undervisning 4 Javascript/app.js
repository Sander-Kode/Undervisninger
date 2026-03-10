const myButton = document.getElementById("myButton");
const fruitText = document.querySelectorAll
const fruits = [
    {
        name: "Apple",
        color: "green",
        calories: 52
    },

    {
        name: "Orange",
        color: "orange",
        calories: 47 
    }


]

const container = document.createElement("section");
container.classList.add("fruit-list");
document.body.appendChild(container);

 
function renderFruits() {
    for(let fruit of fruits) {
        
        const title = document.createElement("h3");
        title.classList.add("name-title");

        title.textContent = fruit.name;
        
        
        document.body.appendChild(title);
        

        
    }
}


function greeting() {
    myText.textContent = "Hello!";
    
}

myButton.addEventListener("click", greeting);



