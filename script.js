const ideas = {
	cat1: [
		"Draw a superhero in a dramatic pose",
		"Paint a portrait of a character from your favorite movie",
		"Create a scene from a fairy tale",
		"Design a futuristic vehicle",
		"Draw a scene from a video game",
		"Sketch a character from a comic book",
		"Create a scene from a science fiction story",
		"Design a costume for a character you made up",
		"Draw a creature from another planet",
		"Paint a landscape from a fantasy world",
		"Draw a scene from a mythological story",
		"Design a cover for a book you've imagined",
		"Paint a portrait of a character from a TV show",
		"Create a scene from a steampunk story",
		"Draw a dragon in a medieval setting",
		"Design a weapon for a fictional character",
		"Paint a scene from a horror movie",
		"Create a scene from a post-apocalyptic world",
		"Draw a character from a historical fiction novel",
		"Design a robot for a futuristic world",
		"Create a cool future robots in 2099",
		"Design a cover for a manga about human merged with bots",
		"Draw a huge glowing umbrella on a blue mountain",
		"Draw a scene from your favorite fantasy or science fiction story, such as a spaceship landing on an alien planet or a magical portal opening up in a forest",
		"Create a new character for a fictional world, such as a superhero or a villain, and design their costume and appearance",
		"Design a fictional character" ,
		"Design a fictional object" ,
		"Design an imaginary world and set its rules" ,
		"Design a house in a magical forest",
		"Design something innovative as an important future invention"
	],
	cat2: [
		"Paint a sunset over the ocean",
		"Draw a forest with a river running through it",
		"Create a scene of animals in the wild",
		"Paint a garden full of colorful flowers",
		"Draw a snowy mountain landscape",
		"Sketch a seascape with boats",
		"Create a scene of birds in the sky",
		"Paint a jungle full of exotic plants",
		"Draw a desert landscape with cactus",
		"Design a plant or flower that doesn't exist",
		"Sketch a waterfall in a tropical setting",
		"Create a scene of fish swimming in the ocean",
		"Paint a landscape with a rainbow",
		"Draw a beach with palm trees",
		"Design a garden in a small space",
		"Sketch an underwater scene with corals",
		"Create a scene of animals in their natural habitat",
		"Paint a forest with misty atmosphere",
		"Draw a landscape with a full moon",
		"Design a park with different types of plants",
		"Sketch a nice park with blue big flowers",
		"Draw cool cherry trees with yellow flowers",
		"Design a cover for flowers types book",
		"Draw a detailed still life of a bouquet of flowers, including the different types of flowers and the vase they are in",
		"Create a landscape drawing of a waterfall, including the rocks, trees, and water"
	],
	cat3: [
		"Create a street scene from a bustling city",
		"Draw a famous landmark from around the world",
		"Paint a nighttime cityscape with lots of lights",
		"Design a futuristic city skyline",
		"Draw a small town with a cozy atmosphere",
		"Sketch a bridge in a metropolitan area",
		"Create a scene of people in a coffee shop",
		"Paint a city street with rain or snow",
		"Draw a city park with benches and trees",
		"Design a building with a unique architectural style",
		"Sketch a street musician playing an instrument",
		"Create a scene of people walking on a busy street",
		"Paint a cityscape at dawn or dusk",
		"Draw a city square with a statue or fountain",
		"Design a street with colorful houses",
		"Sketch a rooftop garden in a high-rise building",
		"Create a scene of people shopping at a market",
		"Paint a city skyline with a view from above",
		"Draw a city alley with a hidden gem",
		"Design a street with murals or street art",
		"Design a glowing city at night fulled up with cars",
		"Paint a old city from 60s",
		"Sketch the cities in future merged with new technology",
		"Draw a cityscape of a famous city at night, with the lights of the buildings and cars creating a beautiful backdrop",
		"Create a drawing of a busy market in a city, with people buying and selling goods and the different stalls and shops"
	],
	cat4: [
		"idea1",
		"idea2",
		"idea3",
		"idea4",
		"idea5"
	]
};

const allIdeas = [].concat(...Object.values(ideas));

const categories = document.querySelectorAll('#categories a');

categories.forEach(category => {
	category.addEventListener('click', () => {
		let idea;
		if (category.id === 'all') {
			idea = allIdeas[Math.floor(Math.random() * allIdeas.length)];
		} else {
			idea = ideas[category.id][Math.floor(Math.random() * ideas[category.id].length)];
		}
		const ideasDiv = document.querySelector('#ideas');
		ideasDiv.innerHTML = `<h2>${idea}</h2>`;
	});
});

        "Paint a still life of fruit and vegetables",
		"Draw a portrait of a family member or friend",
		"Create a scene from a book you recently read",
		"Design a logo for a fictional company",
		"Draw a surreal landscape with unexpected elements",
		"Sketch a scene from your dream",
		"Create a scene from a historical event",
		"Paint a self-portrait in a unique style",
		"Draw a still life of objects with different textures",
		"Design a piece of jewelry or accessory",
		"Sketch a street performer or artist",
		"Create a scene of people enjoying a hobby",
		"Paint a landscape with a unique color scheme",
		"Draw a cityscape with an unusual perspective",
		"Design a product or gadget that doesn't exist",
		"Sketch a scene from a favorite childhood memory",
		"Create a scene of people doing a random act of kindness",
		"Paint a portrait of a famous person in a unique way",
		"Draw a still life of objects with interesting shapes",
		"Design a poster for a social cause or event",
		"Sketch a person playing with orange cat",
		"Draw a 10 years old girl playing with a cute cat",
		"Draw a poster for a scientific movie",
		"Draw a portrait of someone you admire, such as a family member, friend, or historical figure",
		"Create a surreal drawing that combines different elements in unexpected ways, such as a fish with butterfly wings or a tree with a human face",
		"Draw a scene from the last dream you remember",
		"Draw a scene from the last trip you took out",
		"Draw a loved one" ,
		"Draw one of your friends and surprise him" ,
		"Draw something that expresses your current feelings" ,
		"Draw your bedroom",
		"Draw one of your home facilities" ,
		"Draw your former school",
		"Draw an exterior view of your home",
		"Draw the person you consider your role model",
		"Draw one of the influential people in your life",
		"Draw an object near you as an anime character",
		"Draw the view from your nearest window window",
		"Draw an old photo from your phone gallery",
		"Draw an old drawing for yourself" ,
		"Draw a photo you took yourself",
		"Design your dream home",
		"Design a weapon" ,
		"Design a household item" ,
		"Draw a scene around you" ,
		"Draw in color without lines for any element near you",
		"Draw an apartment building near you" ,
		"Draw a tourist attraction you love" ,
		"Draw a tourist attraction I visited" ,
		"Practice drawing a certain object from several angles",
		"Draw something important to you",
		"Draw your profile picture on a social networking site",
		"Draw yourself in any style that suits you",
		"Draw a short story",
		"Draw your favorite character in a video game",
		"Draw a scene from a video game",
		"Draw the furniture around you",
		"Draw some electronic devices",
		"Paint a combat scene",
		"Recreate a painting famous for your style" 

		function redirectToLink(selectElement) {
			var selectedValue = selectElement.value;
			if (selectedValue) {
			  window.location.href = selectedValue;
			}
		  }