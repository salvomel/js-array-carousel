// ARRAYS
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
]

// INSERISCO IMMAGINI

const bigImageContainer = document.querySelector('.big-image-container');
const thumbs = document.querySelector('.thumbs');

// POPOLO CONTAINER PER OGNI ELEMENTO DELL'ARRAY
for(let i=0; i<items.length; i++) {
    const thisPath = items[i];
    const thisTitle = title[i];
    const thisText = text[i];

    const newImage = `
    <div class="single-image">
        <img src="${thisPath}" alt="Img ${i}">

        <div class="single-image-text">
            <h3>${thisTitle}</h3>
            <p>${thisText}</p>
        </div>    
    </div>    
    `;

    bigImageContainer.innerHTML += newImage;

    const newThumb = `
    <div class="single-thumb">
        <img src="${thisPath}" alt="Img ${i}">
    </div>
    `;

    thumbs.innerHTML += newThumb;
}

// CLASSE ACTIVE
let activeImage = 0;
const allImages = document.getElementsByClassName('single-image');
const allThumbs = document.getElementsByClassName('single-thumb')
allImages[activeImage].classList.add('active');
allThumbs[activeImage].classList.add('active');

// CLICK PREV E NEXT
const nextArrow = document.querySelector('.next');
nextArrow.addEventListener('click', function() {
    // Rimuovo active
    allImages[activeImage].classList.remove('active');
    allThumbs[activeImage].classList.remove('active');

    // Incremento di 1 
    if(activeImage<items.length - 1) {
        activeImage++;
    } else {
        activeImage = 0;
    }

    // Assegno classe active a nuove immagini
    allImages[activeImage].classList.add('active');
    allThumbs[activeImage].classList.add('active');

});

const prevArrow = document.querySelector('.prev');
prevArrow.addEventListener('click', function() {
    // Rimuovo active
    allImages[activeImage].classList.remove('active');
    allThumbs[activeImage].classList.remove('active');

    // Decremento di 1 
    if(activeImage>0) {
        activeImage--;
    } else {
        activeImage = items.length - 1;
    }

    // Assegno classe active a nuove immagini
    allImages[activeImage].classList.add('active');
    allThumbs[activeImage].classList.add('active');

});