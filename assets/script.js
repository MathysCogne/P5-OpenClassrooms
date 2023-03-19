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
const arrowSlide = document.querySelectorAll(".arrow");
let indexSlide = 0;

// Reset de la banniere
function resetDivSlide() {
	divSlide.innerHTML = '';
}

// Init du slider
function startSlide() {
	resetDivSlide();
	// Génération de l'image
	const img = document.createElement('img');
	img.src = slides[0].image;
	img.classList.add('banner-img');
	divSlide.appendChild(img);

	// Génération du texte
	const description = document.createElement('p');
	description.innerHTML = slides[0].tagLine;
	divSlide.appendChild(description);
}

// slider gauche
function slideLeft() {
	resetDivSlide();
	const img = document.createElement('img');
	img.src = slides[indexSlide - 1].image;
	img.classList.add('banner-img');
	divSlide.appendChild(img);

	const description = document.createElement('p');
	description.innerHTML = slides[indexSlide - 1].tagLine;
	divSlide.appendChild(description);

	indexSlide--;
}

// slider droite
function slideRight() {
	resetDivSlide();
	const img = document.createElement('img');
	img.src = slides[indexSlide + 1].image;
	img.classList.add('banner-img');
	divSlide.appendChild(img);

	const description = document.createElement('p');
	description.innerHTML = slides[indexSlide + 1].tagLine;
	divSlide.appendChild(description);

	indexSlide++;
}

arrowSlide.forEach(button => {
	button.addEventListener('click', () => {

	  if (button.classList.contains('arrow_left')) {
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

// Lancer a la géneration de la page
startSlide();





// arrowLeft.addEventListener("click", function () {
// 	// console.log("arrowLeft");
// 	slide(-1);
// });

// arrowRight.addEventListener("click", function () {
// 	// console.log("arrowRight");
// 	slide(+1)
// });

// function slide(n){
// 	moveSlide=n;
// 	console.log("Prev Slide");
// 	console.log(moveSlide);

// 	const slideNumbers = slides.length -1

// 	if (indexSlide < 0){
// 		indexSlide = slideNumbers;
// 		console.log("call fonction DEBUT INDEX SLIDE" + indexSlide);
// 		moveSlide(indexSlide)
// 	}
// 	if (indexSlide >= slideNumbers){
// 		indexSlide = -1;
// 		console.log("call fonction FIN INDEX SLIDE" + indexSlide);
// 		moveSlide(indexSlide)
// 	}

// 	changeSlide();
// }


// changeSlide()

// function changeSlide(){
// 	// console.log(">>>>>>>> la slide " +indexSlide)

// }

// function TESTmoveSlide(n){

// 	if (n === 1){
// 		indexSlide++;
// 		console.log(">>>>>>>> la slide " +indexSlide)
// 	}

// 	if (n === -1){
// 		indexSlide--;
// 		console.log(">>>>>>>> la slide " +indexSlide)
// 	}
// }
	

// Maintenant que nous écoutons le clic sur les flèches, passons à un autre élément de l’interface : les bullets points. Ils permettront à l’utilisateur de savoir sur quelle slide il se trouve.

// Ajouter les bullet points sur la partie basse du slider. Il nous faut un point par image contenue dans le slider. 
// Une fois les points affichés, différencier le point qui signale la diapositive en cours de visionnage : ce sera la première. Dans le CSS, le point en cours a une classe spécifique.
// Recommandations : 

// Pour savoir combien de points mettre, on peut compter, via JavaScript, le nombre d’éléments présents dans le tableau “slides” du fichier `script.js` , et afficher un point par image. 
// Pour comprendre comment ajouter les points, vous pouvez vous référer au fichier CSS du site, il vous donnera les informations nécessaires sur les classes à utiliser pour les différents types de points. 


// for (let i = 0; i < slides.length; i++) {
// 	const slideArborescence + i = slides[i].image;
// 	console.log(slideArborescence)


// 	const slideTexte = slides[i].tagLine;
// 	console.log(slideTexte)


	// // Selection d'ou vas l'img
	// const sectionSlide = document.querySelector(".banner");
	// // Crea de la balise img
	// const imageElement = document.createElement("img");
	// // Ajout d'une classe
	// imageElement.classList.add("banner-img")
	// // Ajout du src de l'img
	// imageElement.src = slideArborescence;
	// // Indiquer ou vas l'img
	// sectionSlide.appendChild(imageElement);


// }


// arrowRight.addEventListener("click", function () {
// 	console.log("==== Right TEST ====");
// 	const sectionSlide = document.querySelector(".banner");
// 	const imageElement = document.createElement("img");
// 	imageElement.classList.add("banner-img")
// 	imageElement.src = slideArborescence;
// 	sectionSlide.appendChild(imageElement);
// });