const ideas = {
	cat1: [
		"idea11",
		"idea21",
		"idea31",
		"idea41"
	],
	cat2: [
		"idea12",
		"idea22",
		"idea32",
		"idea42"
	],
	cat3: [
		"idea13",
		"idea23",
		"idea33",
		"idea43"
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

function redirectToLink(selectElement) {
	var selectedValue = selectElement.value;
	if (selectedValue) {
	  window.location.href = selectedValue;
	}
  }