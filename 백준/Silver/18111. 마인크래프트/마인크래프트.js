const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

let table = [];
let N = null,
	M = null,
	B = null;
readline
	.on('line', function (line) {
		if (!N) [N, M, B] = line.split(' ').map((el) => +el);
		else table.push(line.split(' ').map((el) => +el));
	})
	.on('close', function () {
		solution(N, M, B, table);
		process.exit();
	});

const solution = (N, M, B, table) => {
	let minTime = Number.MAX_SAFE_INTEGER;
	let height = null;
	for (let i = 0; i <= 256; i++) {
		let time = 0;
		let block = B;
		for (let y = 0; y < N; y++) {
			for (let x = 0; x < M; x++) {
				let item = table[y][x];
				if (item > i) {
					time = time + (item - i) * 2;
					block = block + item - i;
				} else if (item < i) {
					time = time + (i - item);
					block = block - i + item;
				}
			}
		}

		if (block < 0) break;
		if (minTime >= time && block >= 0) {
			minTime = time;
			height = i;
		}
	}
	console.log(minTime, height);
};
