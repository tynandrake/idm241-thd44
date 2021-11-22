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

imageClick1.addEventListener('click', () => {
    textShow1.classList.toggle('show'),
    gradient1.classList.toggle('show')
});
imageClick1.addEventListener('mouseleave', () => {
    textShow1.classList.remove('show'),
    gradient1.classList.remove('show')
})

imageClick2.addEventListener('click', () => {
    textShow2.classList.toggle('show'),
    gradient2.classList.toggle('show')
});
imageClick2.addEventListener('mouseleave', () => {
    textShow2.classList.remove('show'),
    gradient2.classList.remove('show')
});

imageClick3.addEventListener('click', () => {
    textShow3.classList.toggle('show'),
    gradient3.classList.toggle('show')
});
imageClick3.addEventListener('mouseleave', () => {
    textShow3.classList.remove('show'),
    gradient3.classList.remove('show')
});

imageClick4.addEventListener('click', () => {
    textShow4.classList.toggle('show'),
    gradient4.classList.toggle('show')
});
imageClick4.addEventListener('mouseleave', () => {
    textShow4.classList.remove('show'),
    gradient4.classList.remove('show')
});

