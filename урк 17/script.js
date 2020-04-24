// 17_1
let lfk1 = new Vue({
	el: '#tema1',
	data: {
	aaa: 'yandex.ru',
	jepe: '',
	},
	methods: {
	ssyl: function(value) {
	this.jepe = this.aaa;
}
}
});

// 17_3
let lfk2 = new Vue({
	el: '#tema2',
	data: {
	slovo: 'кроколиск плывёть)',
	},
	methods: {
	texue: function() {
	this.slovo = 'УТОНУЛ(';
	}
}
});

// 17_4
let lfk3 = new Vue({
	el: '#tema3',
	data: {
	kolbasa: '',
	},
	methods: {
	syr: function() {
	this.kolbasa = '<p>ха хи ху хе хо</p>';
	}
}
});