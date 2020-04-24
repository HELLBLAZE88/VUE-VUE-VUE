// 6_4

let riba = new Vue({
	el: '#hmm',
	data: {
		wtuka: ['3', '-10', '7', '5', '15'],
	},
	methods: {
	udoli: function(index) {
	let san = this.wtuka.splice(index, 1);
	san = san * san;
	this.wtuka.splice(index, 0, san);
	}}
});