const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// variables: Selection banniere / Fleches / Index banniere
const divSlide = document.querySelector(".banner");
const divDots = document.querySelector(".dots");
const arrowSlide = document.querySelectorAll(".arrow");
let indexSlide = 0;

// Reset de la banniere
function resetDivSlide() {
	divSlide.innerHTML = "";
}


// Init du slider
function initSlide() {
	resetDivSlide();

	// Génération de l"image
	const img = document.createElement("img");
	img.src = slides[0].image;
	img.classList.add("banner-img");
	divSlide.appendChild(img);

	// Génération du texte
	const description = document.createElement("p");
	description.innerHTML = slides[0].tagLine;
	divSlide.appendChild(description);
	console.log("DEBUG: Init slider");
}

// slider gauche
function slideLeft() {
	resetDivSlide();

	const img = document.createElement("img");
	img.src = slides[indexSlide - 1].image;
	img.classList.add("banner-img");
	divSlide.appendChild(img);

	const description = document.createElement("p");
	description.innerHTML = slides[indexSlide - 1].tagLine;
	divSlide.appendChild(description);

	indexSlide--;
	initDots()

	console.log("DEBUG: slide >>> " + indexSlide);
}

// slider droite
function slideRight() {
	resetDivSlide();

	const img = document.createElement("img");
	img.src = slides[indexSlide + 1].image;
	img.classList.add("banner-img");
	divSlide.appendChild(img);

	const description = document.createElement("p");
	description.innerHTML = slides[indexSlide + 1].tagLine;
	divSlide.appendChild(description);

	indexSlide++;
	initDots()

	console.log("DEBUG: slide >>> " + indexSlide);
}

// Gestion des flèches // Boucle infinie
arrowSlide.forEach(button => {
	button.addEventListener("click", () => {

	  if (button.classList.contains("arrow_left")) {
		// Première diapositive  > dernière
		if (indexSlide === 0) {
			indexSlide = slides.length;
		}
		slideLeft();

	  } else {
		// Dernière diapositive > première
		if (indexSlide === slides.length - 1) {
			indexSlide = -1;
		}
		slideRight();
	  }
	});
  });

// Gestion des dots
function initDots(){
	divDots.innerHTML = "";
	// Génération des dots
	for (let i = 0; i < slides.length; i++) {
		if (indexSlide === i){
			const dots = document.createElement("i");
			dots.classList.add("dot");
			dots.classList.add("dot_selected");
			divDots.appendChild(dots);
			console.clear();
			console.log("DEBUG: dot >>> " + i);
		} else {
			const dots = document.createElement("i");
			dots.classList.add("dot");
			divDots.appendChild(dots);
		};		
}};

// Géneration de la page:: slide dots 
initSlide();
initDots()