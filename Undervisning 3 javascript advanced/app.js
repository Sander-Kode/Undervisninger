const soundContainer = document.getElementById('sound-container');

const soundMap = {
    q: 'work_it',
    w: 'make_it',
    e: 'do_it',
    r: 'makes_us',
    t: 'harder',
    y: 'better',
    u: 'faster',
    i: 'stronger',
    o: 'more_than',
    p: 'hour',
    a: 'our',
    s: 'never',
    d: 'ever',
    f: 'after',
    g: 'work_is',
    h: 'over'
};

for (let key in soundMap) {
    const soundElement = document.createElement('div');
    soundElement.classList.add('sound-button');
    soundContainer.append(soundElement);

    const textElement = document.createElement('p');
    textElement.textContent = `${key}: ${soundMap[key]}`;
    soundElement.append(textElement);

    soundElement.addEventListener('click', () => playSound(soundMap[key]));
}


const playSound = (sound) => {
    const audio = new Audio (`./sounds2/${sound}.wav`);
    audio.play()
}

document.addEventListener('keydown', (e) => {
    const key = e.key;
    const sound = soundMap[key];

    if (sound){

        playSound(sound);

    }

    
});