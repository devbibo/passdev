const ideas = {
	cat1: [
		"Draw a Cat",
		"Draw a Flower",
		"Draw a Rose",
		"Draw a Dog",
		"Draw a Man",
		"Draw a Kid",
		"Draw a Car",

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