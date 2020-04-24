// 15_8

let sei4as = new Date();
let voda = new Vue({
	el: '#filtr',
	data: {
	sevodnya: `${sei4as.getFullYear()}-${sei4as.getMonth()}-${sei4as.getDate()}`,
	},
	filters: {
	rokirovo4ka: function(sevodnya){
            return (sevodnya.split('-').reverse().join('.'));
        }
	}
});


//console.log(`${sei4as.getFullYear()}-${sei4as.getMonth()}-${sei4as.getDate()}`);