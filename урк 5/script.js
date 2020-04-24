// 5_7

let psix = new Vue({
	el: '#ps',
	data: {
		chi4la: ['1', '3', '25', '0', '-10'],
	},
	methods: {
	sortic: function() {
	this.chi4la = this.chi4la.filter(function(sas) {
	if (sas >= 0 && sas <= 10) {
		return true;
	} else {
		return false;
	}
});
}}});