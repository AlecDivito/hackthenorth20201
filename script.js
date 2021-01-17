#!/usr/local/bin/node
const fs = require('fs');
const { execSync } = require("child_process");

const data = JSON.parse(fs.readFileSync('music.json', 'utf8'));
console.log(data);

let array = [];

for (let i = 0; i < 15; i++) {
	let obj = {
		link: data.Link[`${i}`],
		name: data.Name[`${i}`],
		category: data.Categories[`${i}`],
		local: `storage/${data.Name[`${i}`]}/hls`,
	};
	array.push(obj);
}
console.log(array);

for (const obj of array) {
	fs.mkdir(obj.local, { recursive: true }, (err) => {
		if (err) throw err;
	});
	execSync(`youtube-dl -o ${obj.local}/source.mp3 ${obj.link}`, (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
        		console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
}

for (const obj of array) {
	execSync(`./convert.sh ${obj.local}/source.mp3 ${obj.local}/hls`, (error, stdout, stderr) => {
		if (error) {
			console.log(`error: ${error.message}`);
			return;
		}
		if (stderr) {
        		console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
	});
}
