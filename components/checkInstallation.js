module.exports = function checkInstallation() {
	return new Promise((resolve, reject) => {
		var Registry = require("winreg");

		let bfInfo = {};

		var regKey = new Registry({
			hive: Registry.HKLM,
			key: "\\Software\\WOW6432Node\\Electronic Arts\\EA Games\\Battlefield 2",
		});

		regKey.values(function (err, items) {
			for (element of items) {
				bfInfo[element.name] = element.value;
			}
			bfInfo.Levels = `${bfInfo.InstallDir}\\mods\\aix2\\Levels`;
			bfInfo.aixCore = `${bfInfo.InstallDir}\\mods\\AIX2\\mod.desc`;
			bfInfo.aixMaps = `${bfInfo.InstallDir}\\mods\\AIX2\\mod.desc`;
			bfInfo.tng1 = `${bfInfo.InstallDir}\\mods\\AIX2\\TNG 2.0 Part 1 Uninstallexe`;
			bfInfo.tng2 = `${bfInfo.InstallDir}\\mods\\AIX2\\TNG 2.0 Part 2 Uninstall.exe`;
			bfInfo.ithh = `${bfInfo.Levels}\\AIX-V2_mappack_ITHH.zip`;
			bfInfo.launcher = `${bfInfo.InstallDir}\\BF2.exe`;
			resolve(bfInfo);
		});
	});
};
