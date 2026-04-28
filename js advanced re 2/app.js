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


// Hva er en klasse, hvordan lager man en klasse?
// Klasser bruker PascalCase, ikke camelCase.

//Klasser bruker Constructor for å fortelle hva objektet er, navn, breed, alder etc

class Cat {
    constructor (name, breed, age, speak, hiss) {
        this.name = name;
        this.breed = breed;
        this.age = age;
        
    }
    speak() {
        console.log('MEEEOW')
    }

    hiss () {
        console.log('HIIIISSSS')

    }
};

const villemo = new Cat('Villemo', 'norsk skogskatt', 5);
const findus = new Cat('Findus', 'blandingsrase', 10);

console.log(villemo, findus)

console.log('Both cats aged one year')
villemo.age += 1;
findus.age += 1;

console.log('Villemos new age is', villemo.age)
console.log('Findus new age is', findus.age)

findus.name = "Ludo";

console.log('Finus has gotten a new name, the name is', findus.name);


class Entity {
    constructor(name, hps, atk){
        this.name = name;
        this.hps = hps;
        this.atk = atk;

    }

    fight (entity) {
        console.log(`${this.name} hits ${entity.name} for ${this.atk}`);
        entity.hps -= this.atk;
        console.log(`${entity.name} now has ${entity.hps} health left`);
    }

}

const hero = new Entity('Sander', 10, 5);
const enemy = new Entity('Bob', 5, 3);

hero.fight(enemy)
hero.fight(hero)





