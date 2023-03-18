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



const arrowLeft = document.querySelector(".arrow_left")
const arrowRight = document.querySelector(".arrow_right")

arrowLeft.addEventListener("click", function () {
	console.log("arrowLeft");
});
arrowRight.addEventListener("click", function () {
	console.log("arrowRight");
});



// Maintenant que nous écoutons le clic sur les flèches, passons à un autre élément de l’interface : les bullets points. Ils permettront à l’utilisateur de savoir sur quelle slide il se trouve.

// Ajouter les bullet points sur la partie basse du slider. Il nous faut un point par image contenue dans le slider. 
// Une fois les points affichés, différencier le point qui signale la diapositive en cours de visionnage : ce sera la première. Dans le CSS, le point en cours a une classe spécifique.
// Recommandations : 

// Pour savoir combien de points mettre, on peut compter, via JavaScript, le nombre d’éléments présents dans le tableau “slides” du fichier `script.js` , et afficher un point par image. 
// Pour comprendre comment ajouter les points, vous pouvez vous référer au fichier CSS du site, il vous donnera les informations nécessaires sur les classes à utiliser pour les différents types de points. 


for (let i = 0; i < slides.length; i++) {
	const slideArborescence = slides[i].image;
	console.log(slideArborescence)


	const slideTexte = slides[i].tagLine;
	console.log(slideTexte)


	// Selection d'ou vas l'img
	const sectionSlide = document.querySelector(".banner");
	// Crea de la balise img
	const imageElement = document.createElement("img");
	// Ajout d'une classe
	imageElement.classList.add("banner-img")
	// Ajout du src de l'img
	imageElement.src = slideArborescence;
	// Indiquer ou vas l'img
	sectionSlide.appendChild(imageElement);
}


