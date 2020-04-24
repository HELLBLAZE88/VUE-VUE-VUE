// 10_2

let txtr1 = new Vue({
	el: '#pro1',
	data: {
	dobavka: '',
	choto: []
	},
	methods: {
	razdel: function(){
	let slova = this.dobavka.split(' ');
	for (let olo of slova) {
	this.choto.push(olo); }}
	},
});

// 10_7

let txtr2 = new Vue({
	el: '#pro2',
	data: { chek: []},
});

// 10_8

let txtr3 = new Vue({
	el: '#pro3',
	data: {
	jajik: ''},
});

// 10_11

let txtr4 = new Vue({
	el: '#pro4',
	data: {	
	vibor: 'картошка',
	ovoshi: ['картошка', 'огурецъ', 'кабачок'],
},
});