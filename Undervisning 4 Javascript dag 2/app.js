//DOM
//Document Model Object

// const headline = document.getElementById("headline");
// const headline = document.querySelector("#headline")



// TEXTCONTENT = DOM - tekst - leser alt

//InnerText = leser kun synlig tekst

// headline.textContent = "Hei fra Javascript!";




//innerHTML

//Kan brukes swom en nyttig ting, men kan også være lett mottakelig for "Script injection" <script>ond kode</script>

// const user = "Geir";
// document.body.innerHTML = `<h2> Hallo fra innerHTML ${user}</h2>`;

const inputNum = document.querySelector("#input-num");
const circleContainer = document.querySelector("#circle-container")

const makeCircles = () => {

    //ReplaceChildren
    circleContainer.replaceChildren();

    if (!inputNum.value || inputNum.value > 1000 || inputNum.value <= 0){
        window.alert("you ROYALLY fucked up, jk please insert a number between 1 and 1000")
        return;
    }
    for(let i = 0; i < inputNum.value; i++){
        const circle = document.createElement("div")
        //off by one error, bruke +1 til å velge hvor indexen skal starte
        circle.textContent = i + 1

        // !background-color
        circle.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
        circle.classList.add("circle")
        circleContainer.append(circle)
    }

}





