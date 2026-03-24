const helloWorldBtn = document.getElementById('hello-world-btn')

helloWorldBtn.addEventListener('click' , () => console.log('Hello World!'))


const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => console.log(button.textContent))
    button.addEventListener('mouseover', () => console.log(`Mouse over: ${button.textContent}`))
});

document.addEventListener('keydown', (e) => console.log(e.key));


// element
// . addEventListener
// (typen(hva skal den lytte etter), funksjonen (Hva skal den gjøre/kjøre))



// bli komfortabel med .forEach, .map, .reduce, .sort, .filter
//addEventListener()