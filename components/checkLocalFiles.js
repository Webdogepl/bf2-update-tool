module.exports = async function CheckLocalFiles(bfInfo) {
	const fs = require("fs");

	localFiles = [];

	fs.readdirSync(bfInfo.Levels).forEach((levelFolder) => {
		clientPath = `${bfInfo.Levels}\\${levelFolder}\\client.zip`;
		serverPath = `${bfInfo.Levels}\\${levelFolder}\\server.zip`;

		let mapFiles = {};
		mapFiles.map = levelFolder;

		try {
			mapFiles["client.zip"] = fs.statSync(clientPath).size;
			mapFiles["server.zip"] = fs.statSync(serverPath).size;
		} catch (err) {
			console.log("File not exist");
		}
		localFiles.push(mapFiles);
	});
	return localFiles;
};
