module.exports = async function downloadUpdates(comparedFiles, bfInfo) {
	const fs = require("fs");
	console.log(comparedFiles);

	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerHTML = text;
	};

	comparedFiles.forEach((mapData) => {
		levelDir = `${bfInfo.Levels}\\${mapData.map}`;

		if (fs.existsSync(levelDir)) {
			console.log(`ok`);
		} else {
			fs.mkdirSync(levelDir);
		}
		downloadMaps(`${bfInfo.Levels}\\${mapData.map}`, mapData.map);
	});

	async function downloadMaps(localDir, ftpDir) {
		const ftp = require("basic-ftp");
		const client = new ftp.Client();
		client.ftp.verbose = true;

		await client.access({
			host: "",
			user: "",
			password: "",
			secure: false,
		});

		await client.cd("levels");

		client.trackProgress((info) => {
			let transferred = parseFloat(info.bytesOverall / 1000000).toFixed(2);

			replaceText(ftpDir, `${ftpDir} -- ${transferred} Mb`);
		});

		await client.downloadToDir(`${localDir}`, `${ftpDir}`);
		let map = document.getElementById(ftpDir);
		map.classList.replace("invalid", "valid");
		client.close();
	}
};
