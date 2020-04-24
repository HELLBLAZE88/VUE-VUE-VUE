// 7_13

let zd1 = new Vue({
	el: '#usl1',
	data: {
	age: 25,
	},
});

// 7_14

let zd2 = new Vue({
	el: '#usl2',
	data: {
	hewo: true,
	},
	methods: {
	yoy: function() {
	this.hewo = this.hewo ? false : true; }}
});

