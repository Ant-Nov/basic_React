const employers = ['АртеМ', 'максим', 'Владимир', 'сергей', 'НикиТа', 'евГений', ' Дарья', ' ', 'виктория ', 'ЕкаТерина', '', ' Андрей ', 'КИРИЛЛ'];
const nameCourse = 'Базовый React';
const command = [];
employers.forEach(item => {
	if (item.trim() !== '') {
		item = item.toLowerCase().trim();
		item = item[0].toUpperCase() + item.slice(1);
		command.push(item);
	}
});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase'],
};

const { cash, react, add } = data;

const lesson = cash.reduce((acc, item) => (acc += item), 0);

function makeBusiness(director, teacher = 'Максим', allModule, gang, course) {
	const sumTech = [...react, ...add, 'и другие'].join(' ');
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang.join(', ')}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log(`Технологии которые мы изучим:`);
	console.log(sumTech);
}

makeBusiness('Артем', undefined, lesson, command, nameCourse);
