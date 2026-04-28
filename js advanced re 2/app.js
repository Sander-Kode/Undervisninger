const helloWorldBtn = document.getElementById('hello-world-btn');

helloWorldBtn.addEventListener('click', (e) => {
    console.log(e)
})


// button 1, 2 og 3

const allMyButtons = document.querySelectorAll('.btn');

allMyButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button.textContent)
    });
    button.addEventListener('mouseover', () => {
        console.log(`Mouse over: ${button.textContent}`)

    });

});

const onKeyBtns = document.querySelectorAll('.onKeyBtn');
onKeyBtns.forEach(button => {
    button.addEventListener('keydown', (e) => {
        console.log(e.key);
    })
})

/* 
Hvordan setter vi opp en event listener?

- Vi må ha/innhente elementet
- Legge til eventlister - "variabelnavn.addEventListener()"
- Hva skal den lytte etter? event-typen, click, keydown etc
- hva skal den kjøre () => {kodeblokk for hva den skal gjøre}

*/