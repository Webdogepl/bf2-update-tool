module.export = async function connectFTP() {
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
};
