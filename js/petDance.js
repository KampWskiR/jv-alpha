// Create a canvas context and load images
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let petImages = [];
let numPetsLoaded = 0;

const petNames = [
  'Beta Cat',
	'Goofy Racoon',
	'Angry Pigeon',
	'Goofy Dragon',
	'Bunny Siuu',
	'Uwu Cactus',
  'Uwu Cactus',
  'Demon Kitsune',
  'Rainbow Kitsune',
  'Scarecrow',
  'Neon Ufo',
  'Platypus',
  'Blobfish',
  'Grim Reaper',
  'Cowboy Capybara',
  'King Corgi',
  'Red Dragon'
];

petNames.forEach(petName => {
	const petImage = new Image();
	petImage.src = `../assets/pets/${petName}.png`;
	petImage.onload = () => {
		numPetsLoaded++;
		if (numPetsLoaded === petNames.length) {
			startAnimation();
		}
	};
	petImages.push(petImage);
});

// Set up animation loop
function startAnimation() {
	const pets = [];

	for (let i = 0; i < 100; i++) {
		const petImage = petImages[Math.floor(Math.random() * petImages.length)];
		const pet = {
			x: Math.random() * (canvas.width - 30),
			y: Math.random() * (canvas.height - 30),
			xSpeed: Math.random() * 10 - 5,
			ySpeed: Math.random() * 10 - 5,
			image: petImage
		};
		pets.push(pet);
	}

	function animate() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.imageSmoothingEnabled = false;

		pets.forEach(pet => {
			ctx.drawImage(pet.image, pet.x, pet.y, 70, 70);
			pet.x += pet.xSpeed;
			pet.y += pet.ySpeed;

			if (pet.x < 0 || pet.x > canvas.width - 30) {
				pet.xSpeed *= -1;
			}

			if (pet.y < 0 || pet.y > canvas.height - 30) {
				pet.ySpeed *= -1;
			}
		});

		requestAnimationFrame(animate);
	}

	requestAnimationFrame(animate);
}