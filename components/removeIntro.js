module.exports = async function removeIntro(moviesDir) {
	const fs = require("fs");
	const path = require("path");

	fs.readdir(moviesDir, (err, files) => {
		if (err) throw err;

		for (const file of files) {
			fs.unlink(path.join(moviesDir, file), (err) => {
				if (err) throw err;
			});
		}
		alert("Intro removed");
	});
};
