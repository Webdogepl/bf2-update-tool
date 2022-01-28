module.exports = async function installDirectFix(installDir) {
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

	await client.downloadTo(`${installDir}\\RendDX9.dll`, "RendDX9.dll");

	alert("Alt+tab fix installed");

	client.close();
};
