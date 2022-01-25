module.exports = function initialContent(bfInfo) {
	const fs = require("fs");

	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerHTML = text;
	};

	const replaceTextValid = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerHTML = text;
		element.classList.add("valid");
	};

	const replaceTextInvalid = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerHTML = text;
		element.classList.add("invalid");
	};

	replaceText(`levels`, bfInfo.Levels);
	replaceText(`install`, bfInfo.InstallDir);

	if (bfInfo.Language === "Polish") {
		replaceTextValid(`language`, bfInfo.Language);
	} else {
		replaceTextInvalid(`language`, bfInfo.Language);
	}

	if (bfInfo.Version === "1.5") {
		replaceTextValid(`version`, bfInfo.Version);
	} else {
		replaceTextInvalid(`version`, bfInfo.Version);
	}

	if (fs.existsSync(bfInfo.aixCore)) {
		replaceTextValid(`aixCore`, "");
	} else {
		replaceTextInvalid(`aixCore`, "");
	}

	if (fs.existsSync(bfInfo.aixMaps)) {
		replaceTextValid(`aixMaps`, "");
	} else {
		replaceTextInvalid(`aixMaps`, "");
	}

	if (fs.existsSync(bfInfo.tng1)) {
		replaceTextValid(`tng1`, "");
	} else {
		replaceTextInvalid(`tng1`, "");
	}

	if (fs.existsSync(bfInfo.tng2)) {
		replaceTextValid(`tng2`, "");
	} else {
		replaceTextInvalid(`tng2`, "");
	}

	if (fs.existsSync(bfInfo.ithh)) {
		replaceTextValid(`ithh`, "");
	} else {
		replaceTextInvalid(`ithh`, "");
	}

	if (fs.statSync(bfInfo.launcher).size === 6556160) {
		replaceTextValid(`weaponUnlocks`, "");
	} else {
		replaceTextInvalid(`weaponUnlocks`, "");
	}
};
