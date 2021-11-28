const imageClick1 = document.querySelector('#image1'); 
const imageClick2 = document.querySelector('#image2'); 
const imageClick3 = document.querySelector('#image3'); 
const imageClick4 = document.querySelector('#image4'); 

const textShow1 = document.querySelector('#image-text-1'); 
const textShow2 = document.querySelector('#image-text-2'); 
const textShow3 = document.querySelector('#image-text-3'); 
const textShow4 = document.querySelector('#image-text-4'); 

const gradient1= document.querySelector('#gradient1');
const gradient2= document.querySelector('#gradient2');
const gradient3= document.querySelector('#gradient3');
const gradient4= document.querySelector('#gradient4');

const playGermany = document.getElementById('germany-snd');
const playFrance = document.getElementById('france-snd');
const playItaly = document.getElementById('italy-snd');
const playSwitzerland = document.getElementById('switzerland-snd');

imageClick1.addEventListener('click', () => {
    textShow1.classList.toggle('show'),
    gradient1.classList.toggle('show')
    playAudio('germany-snd');
});
imageClick1.addEventListener('mouseleave', () => {
    textShow1.classList.remove('show'),
    gradient1.classList.remove('show')
    pauseAudio();
})

imageClick2.addEventListener('click', () => {
    textShow2.classList.toggle('show'),
    gradient2.classList.toggle('show')
    playAudio('france-snd');
});
imageClick2.addEventListener('mouseleave', () => {
    textShow2.classList.remove('show'),
    gradient2.classList.remove('show')
    pauseAudio();
});

imageClick3.addEventListener('click', () => {
    textShow3.classList.toggle('show'),
    gradient3.classList.toggle('show')
    playAudio('italy-snd');
});
imageClick3.addEventListener('mouseleave', () => {
    textShow3.classList.remove('show'),
    gradient3.classList.remove('show')
    pauseAudio();
});

imageClick4.addEventListener('click', () => {
    textShow4.classList.toggle('show'),
    gradient4.classList.toggle('show')
    playAudio('switzerland-snd');
});
imageClick4.addEventListener('mouseleave', () => {
    textShow4.classList.remove('show'),
    gradient4.classList.remove('show')
    pauseAudio();
});

// Play audio
function playAudio(song) {
    switch (song) {
        case 'germany-snd':
            playGermany.play();
            break;
        case 'france-snd':
            playFrance.play();
            break;
        case 'italy-snd':
            playItaly.play();
            break;
        case 'switzerland-snd':
            playSwitzerland.play();
            break;
        default:
            return null;
    }
}

// Pause audio
function pauseAudio() {
    playGermany.pause();
    playGermany.currentTime = 0;

    playFrance.pause();
    playFrance.currentTime = 0;

    playItaly.pause();
    playItaly.currentTime = 0;

    playSwitzerland.pause();
    playSwitzerland.currentTime = 0;
}