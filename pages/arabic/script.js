const ideas = {
	cat1: [
		"أرسم بطل خارق في وضعية درامتيكية",
		"أرسم صورة شخصية لشخصية من فلمك المفضل",
		"اصنع مشهد من قصة خيالية",
		"صمم مركبة مستقبلية",
		"أرسم مشهد من لعبة فيديو",
		"أرسم شخصية من قصة مصورة",
		"اصنع مشهد لقصة خيال علمي",
		"صمم ملابس مميزة لشخصية من صنعك",
		"أرسم كائن من كوكب اخر من تخيلك",
		"أرسم مشهد طبيعي في عالم خيالي",
		"أرسم مشهد من قصة أسطورية",
		"صمم غلاف لكتاب من خيالك",
		"أرسم صورة شخصية لشخصية من عرض تيلفزيوني",
		"ارسم مشهد من قصة ستيمبانك",
		"انشئ مشهد من عالم ما بعد الكارثة",
		"صمم سلاحًا لشخصية خيالية",
		"ارسم تنين في إعداد العصور الوسطى",
		"ارسم مشهدًا من فيلم رعب",
		"ارسم شخصيةً من رواية تاريخية خيالية",
		"صمم روبوتًا لعالم مستقبلي",
		" اصنع روبوتات مستقبلية رائعة في عام 2099",
		"صمم غلاف لمانغا عن إنسان مدمج مع الروبوتات",
		"ارسم مظلة متوهجة ضخمة على جبل أزرق",
		"ارسم مشهدًا من قصة الخيال العلمي أو الخيال الأسطوري المفضلة لديك، مثل هبوط سفينة فضائية على كوكب غريب أو فتح بوابة سحرية في الغابة",
		"صمم شخصية جديدة لعالم خيالي، مثل بطل خارق أو شرير، وصمم ملابسهم ومظهرهم" ,
		"صمم شخصية خيالية" ,
		"صمم كائنًا خياليًا" ,
		"صمم عالمًا خياليًا ووضع قوانينه" ,
		"صمم منزلًا في غابة سحرية",
		"صمم شيئًا مبتكرًا كاختراع مستقبلي مهم"
	],
	cat2: [
		"ارسم غروب الشمس فوق المحيط",
		"ارسم غابة تمر بها نهر",
		"انشئ مشهد لحيوانات برية",
		"ارسم حديقة مليئة بالزهور الملونة",
		"ارسم منظر لجبل مغطى بالثلوج",
		"ارسم منظر للبحر مع قوارب",
		"انشئ مشهد لطيور في السماء",
		"ارسم غابة استوائية مليئة بالنباتات الغريبة",
		"ارسم منظر لصحراء مع الصبار",
		"صمم نبتة أو وردة غير موجودة",
		"ارسم شلال في إطار استوائي",
		"انشئ مشهد للأسماك السباحة في المحيط",
		"ارسم منظر طبيعي مع قوس قزح",
		"ارسم شاطئًا مع أشجار النخيل",
		"صمم حديقة في مساحة صغيرة",
		"ارسم منظر تحت الماء مع الشعاب المرجانية",
		"انشئ مشهد للحيوانات في بيئتها الطبيعية",
		"ارسم غابة مع جو مغيم وضبابي",
		"ارسم منظر للمناظر الطبيعية مع القمر الكامل",
		"صمم حديقة عامة مع أنواع مختلفة من النباتات",
		"ارسم حديقة جميلة بأزهار زرقاء كبيرة",
		"ارسم أشجار الكرز الرائعة مع زهور الصفراء",
		"صمم غلاف لكتاب يتحدث عن أنواع الزهور",
		"ارسم لوحة نباتية مفصلة تضم باقة من الزهور، بما في ذلك أنواع الزهور المختلفة والزهورة التي تحتوي عليها",
		"صمم رسمًا لمنظر طبيعي لشلال، بما في ذلك الصخور، والأشجار والماء"
	],
	cat3: [
		"انشئ مشهدًا لشارع في مدينة حيوية",
		"ارسم معلمًا شهيرًا من حول العالم",
		"ارسم منظرًا للمدينة في الليل مع الكثير من الأضواء",
		"صمم منظرًا لسماء مدينة مستقبلية",
		"ارسم قرية صغيرة بجو هادئ",
		"ارسم جسرًا في منطقة حضرية",
		"انشئ مشهدًا لأشخاص في مقهى",
		"ارسم شارعًا بالمدينة وهو يمطر أو يتساقط الثلج",
		"ارسم حديقة مدينة مع مقاعد وأشجار",
		"صمم مبنى بأسلوب معماري فريد",
		"ارسم فنان شارع يعزف على آلة موسيقية",
		"انشئ مشهدًا لأشخاص يمشون في شارع مزدحم",
		"ارسم منظرًا للمدينة عند الفجر أو الغسق",
		"ارسم ساحة مدينة بتمثال أو نافورة",
		"صمم شارعًا بمنازل ملونة",
		"ارسم حديقة على سطح مبنى شاهق",
		"انشئ مشهدًا لأشخاص يتسوقون في سوق",
		"ارسم منظرًا لسماء المدينة من فوق",
		"ارسم منزلقة مدينة مع معلم خفي",
		"صمم شارعًا بجدران فنية أو فن الشارع",
		"صمم مدينة  متوهجة  في الليل مليئة  بالسيارات",
		"أرسم مدينة قديمة من الستينيات",
		"ارسم المدن في المستقبل مدموجة مع التكنولوجيا الحديثة",
		"ارسم لوحة مدينة مشهورة ليلاً، حيث يخلق ضوء المباني والسيارات خلفية جميلة",
		"أنشئ رسمًا لسوق مزدحم في المدينة، حيث يتم شراء وبيع السلع والأطعمة والمنتجات المختلفة"
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