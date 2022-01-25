const checkFtpFiles = require("./components/checkFtpFiles");
const checkLocalFiles = require("./components/checkLocalFiles");
const compareFiles = require("./components/compareFiles.js");
const checkInstallation = require("./components/checkInstallation");
const initialContent = require("./components/initialContent");
const downloadUpdates = require("./components/downloadUpdates");
const removeIntro = require("./components/removeIntro");
const installUnlocks = require("./components/installUnlocks");
const installDirectFix = require("./components/installDirectFix");

const replaceText = (selector, text) => {
	const element = document.getElementById(selector);
	if (element) element.innerHTML = text;
};

window.addEventListener("DOMContentLoaded", () => {
	checkUpdatesButton = document.getElementById("checkUpdatesButton");
	checkUpdatesButton.addEventListener("click", checkUpdates, false);

	var bfInfo = {};

	async function init() {
		bfInfo = await checkInstallation();
		initialContent(bfInfo);
	}
	init();

	let comparedFiles = {};

	async function checkUpdates() {
		checkUpdatesButton.removeEventListener("click", checkUpdates);

		let ftpFiles = await checkFtpFiles();
		let localFiles = await checkLocalFiles(bfInfo);
		comparedFiles = compareFiles(ftpFiles, localFiles);

		replaceText("checkUpdatesButton", "Download Updates");
		checkUpdatesButton.classList.replace("btn--red", "btn--green");

		checkUpdatesButton.addEventListener(
			"click",
			function () {
				downloadUpdates(comparedFiles, bfInfo);
			},
			false
		);
	}

	let removeIntroButton = document.getElementById("removeIntroButton");
	removeIntroButton.addEventListener(
		"click",
		function () {
			removeIntro(`${bfInfo.InstallDir}\\mods\\aix2\\movies`);
		},
		false
	);

	let installUnlocksButton = document.getElementById("installUnlocksButton");
	installUnlocksButton.addEventListener(
		"click",
		function () {
			installUnlocks(bfInfo.InstallDir);
		},
		false
	);

	let installDirectFixButton = document.getElementById(
		"installDirectFixButton"
	);
	installDirectFixButton.addEventListener(
		"click",
		function () {
			installDirectFix(bfInfo.InstallDir);
		},
		false
	);
});
