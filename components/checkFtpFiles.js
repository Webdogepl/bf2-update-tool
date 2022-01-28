module.exports = async function ftpConnection() {
	require("dotenv").config();

	const displayMapName = (dirName) => {
		let BfUpdatesDiv = document.querySelector("ul[id=BfUpdates]");
		let BfUpdates__level = document.createElement("li");
		BfUpdates__level.setAttribute("id", dirName);
		BfUpdates__level.classList.add("valid");
		BfUpdates__level.innerHTML = dirName;
		BfUpdatesDiv.appendChild(BfUpdates__level);
	};

	const ftp = require("basic-ftp");
	const client = new ftp.Client();
	client.ftp.verbose = true;

	let files = [];

	await client.access({
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		secure: false,
	});
	await client.cd("levels");
	let dirList = await client.list();

	for await (dir of dirList) {
		let mapData = {};
		mapData.map = dir.name;

		displayMapName(dir.name);

		let filesList = await client.list(dir.name);

		for (file of filesList) {
			mapData[file.name] = file.size;
		}
		files.push(mapData);
	}

	client.close();

	return files;
};
