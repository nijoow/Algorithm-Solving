const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

let inputs = [];
let N = null;
readline
	.on('line', function (line) {
		if (!N) N = +line;
		else inputs.push(line.split(' ').map((el) => +el));
	})
	.on('close', function () {
		solution(inputs);
		process.exit();
	});

const solution = (inputs) => {
	inputs.sort((a, b) => {
		if (a[0] === b[0]) {
			return a[1] - b[1];
		} else return a[0] - b[0];
	});
	console.log(inputs.map((el) => el.join(' ')).join('\n'));
};
