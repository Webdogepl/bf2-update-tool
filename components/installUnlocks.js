module.exports = async function installUnlocks(installDir) {
	const replaceTextValid = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerHTML = text;
		element.classList.add("valid");
	};

	const ftp = require("basic-ftp");
	const client = new ftp.Client();
	client.ftp.verbose = true;

	await client.access({
		host: " ",
		user: " ",
		password: " ",
		secure: false,
	});

	await client.cd("additional");

	await client.downloadTo(`${installDir}\\BF2.exe`, "BF2.exe");

	let unlocksCheck = document.getElementById("weaponUnlocks");
	unlocksCheck.classList.replace("invalid", "valid");

	alert("Unlocks installed");

	client.close();
};
