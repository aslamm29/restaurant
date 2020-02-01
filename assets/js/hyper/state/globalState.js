var companyInfo = {
	title: 'PRIME STEAK RESTAURANT',
	phone: '(647) - 925 - 7932',
	location: 'Toronto, Ontario'
};

var specialMenuData = [
	{
		title: 'Super BBQ Grill No Smoke',
		description:
			'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
		price: 25
	},
	{
		title: 'Mixed Vegetables',
		description:
			'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
		price: 15
	},
	{
		title: 'All Canadian Mix',
		description:
			'Fried Egg, Steak, Baked Potato, French Fries, Side of vegetables',
		price: 17
	}
];

var reviewsData = [
	{
		company: 'The Food Network',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the GTA!',
		review:
			'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
	},
	{
		company: 'Rate Your Food',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the GTA!',
		review:
			'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
	},
	{
		company: 'Food Critic',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the GTA!',
		review:
			'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
	},
	{
		company: 'Regal Prime',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the GTA!',
		review:
			'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
	},
	{
		company: 'Steak International',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the GTA!',
		review:
			'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
	},
	{
		company: 'MasterChef',
		author: 'Joe Bastiachi',
		authorInfo: 'Winner Of The Chef Masters',
		highlight: 'Best Restaurant in the GTA!',
		review:
			'The food is consistently outstanding. Service is the best in the city. Toronto is blessed with a lot of great restaurants, including a few elite steakhouses. This is one of those few. Table-side Caesar salad is so good. The steaks are great, as you would expect, and always cooked perfectly. Side dishes are amazing. Desserts equally fantastic. Additional touches that they provide make the experience even more enjoyable and special.'
	}
];

var randomQuoteData = [
	{
		author: 'Khurana',
		quote: 'Cooking Is An Expression That Crosses Boundaries.'
	},
	{
		author: 'Gordon',
		quote: 'Its not done until your steak is well done.'
	},
	{
		author: 'Mike',
		quote: 'It is the season of well seasoned steak.'
	}
];

export const globalState = {
	count: 0,
	companyInfo,
	specialMenuData,
	reviewsData,
	randomQuoteData,
	reviewStatus: {
		currentReview: 1
	}
};
