module.export = async function connectFTP() {
	const ftp = require("basic-ftp");
	const client = new ftp.Client();
	client.ftp.verbose = true;

	await client.access({
		host: " ",
		user: " ",
		password: " ",
		secure: false,
	});
};
