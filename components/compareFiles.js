module.exports = function compareFiles(ftpFiles, localFiles) {
	function displayMissingMaps(missingFiles) {
		missingFiles.forEach((file) => {
			let li = document.getElementById(`${file.map}`);
			li.classList.add("invalid");
		});
	}

	let missingFiles = [];

	ftpFiles.forEach((ftpMapData) => {
		let missing = {};
		let isMapExist = false;

		localFiles.forEach((localMapData) => {
			if (ftpMapData.map === localMapData.map) {
				console.log("Map folder found");
				isMapExist = true;

				if (ftpMapData["client.zip"] === localMapData["client.zip"]) {
					console.log("Client.zip is correct");
				} else {
					missing.map = ftpMapData.map;
				}
				if (ftpMapData["server.zip"] === localMapData["server.zip"]) {
					console.log("Server.zip is correct");
				} else {
					missing.map = ftpMapData.map;
				}
			}
		});

		if (!isMapExist) {
			console.log("Map folder not found");
			missing = ftpMapData;
		}

		if (Object.keys(missing).length > 0) {
			missingFiles.push(missing);
		}
	});
	displayMissingMaps(missingFiles);
	return missingFiles;
};
