module.exports = async function installUnlocks(installDir) {
	require("dotenv").config();

	const ftp = require("basic-ftp");
	const client = new ftp.Client();
	client.ftp.verbose = true;

	await client.access({
		host: process.env.HOST,
		user: process.env.USER,
		password: process.env.PASSWORD,
		secure: false,
	});

	await client.cd("additional");

	await client.downloadTo(`${installDir}\\BF2.exe`, "BF2.exe");

	let unlocksCheck = document.getElementById("weaponUnlocks");
	unlocksCheck.classList.replace("invalid", "valid");

	alert("Unlocks installed");

	client.close();
};
