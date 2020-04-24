// 13_3

let chinet = new Vue({
	el: '#stylist',
	data: {
	cheka: false,
	sv1: 'black',
	},
	methods: {
	sveta: function() {
	this.sv1 = this.cheka ? 'black' : 'red';
	}
	}
});