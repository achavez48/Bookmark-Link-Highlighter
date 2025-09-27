/**
 * Options module.
 * It contains the options functions to change the options page samples and options, retrieve and save them into the storage.
 * @module options
 */

/** Class for the options storage dictionary.
 * @class
 */
class OptionsStorageType{
	/** 
	 * Creates an instance of `OptionsStorageType`.
	 * @param {boolean} textCheck - If the text should change or not.
	 * @param {number} textHueSlide - The text hue `0-359`.
	 * @param {number} textSaturationSlide - The text staturation `0-100`.
	 * @param {number} textLightnessSlide - The text lightness  `0-100`.
	 * @param {number} textSizeSlide - The text relative size.
	 * @param {string} textStyleSelection - The text style.
	 * @param {string} textFontSelection - The text font family.
	 * @param {boolean} outlineCheck - If the outline should change or not.
	 * @param {number} outlineHueSlide - The outline hue `0-359`.
	 * @param {number} outlineSaturationSlide - The outline saturation `0-100`.
	 * @param {number} outlineLightnessSlide - The outline lightness `0-100`.
	 * @param {number} outlineSizeSlide - The outline relative size.
	 * @param {string} outlineStyleSelection - The outline style.
	 * @param {boolean} backgroundCheck - If the background should change or not.
	 * @param {number} backgroundHueSlide - The background hue `0-359`.
	 * @param {number} backgroundSaturationSlide - The background saturation `0-100`.
	 * @param {number} backgroundLightnessSlide - The background lightness `0-100`.
	 * @param {string} hostNames - The collection of spaced separated host names in a single string.
	 * @param {string} patternsToReplace - The collection of spaced separated patterns to replace for each host name in a single string.
	 * @param {string} replacements - The collection of spaced separated replacement patterns for each host name in a single string.
	 * @param {string} testLinks - The collection of spaced separated test links in a single string.
	 */
	constructor(textCheck, textHueSlide, textSaturationSlide, textLightnessSlide, textSizeSlide, textStyleSelection, textFontSelection,
		outlineCheck, outlineHueSlide, outlineSaturationSlide, outlineLightnessSlide, outlineSizeSlide, outlineStyleSelection, 
		backgroundCheck, backgroundHueSlide, backgroundSaturationSlide, backgroundLightnessSlide, hostNames, patternsToReplace, replacements, testLinks) {
		/** If the text should change or not.
		 * @type {boolean} */
		this.textCheck = textCheck;
		/** The text hue `0-359`.
		 * @type {number} */
		this.textHueSlide = textHueSlide;
		/** The text staturation `0-100`.
		 * @type {number} */
		this.textSaturationSlide = textSaturationSlide;
		/** The text lightness  `0-100`.
		 * @type {number} */
		this.textLightnessSlide = textLightnessSlide;
		/** The text relative size.
		 * @type {number} */
		this.textSizeSlide = textSizeSlide;
		/** The text style.
		 * @type {string} */
		this.textStyleSelection = textStyleSelection;
		/** The text font family.
		 * @type {string} */
		this.textFontSelection = textFontSelection;
		/** If the outline should change or not.
		 * @type {boolean} */
		this.outlineCheck = outlineCheck;
		/** The outline hue `0-359`.
		 * @type {number} */
		this.outlineHueSlide = outlineHueSlide;
		/** The outline saturation `0-100`.
		 * @type {number} */
		this.outlineSaturationSlide = outlineSaturationSlide;
		/** The outline lightness `0-100`.
		 * @type {number} */
		this.outlineLightnessSlide = outlineLightnessSlide;
		/** The outline relative size.
		 * @type {number} */
		this.outlineSizeSlide = outlineSizeSlide;
		/** The outline style.
		 * @type {string} */
		this.outlineStyleSelection = outlineStyleSelection;
		/** If the background should change or not.
		 * @type {boolean} */
		this.backgroundCheck = backgroundCheck;
		/** The background hue `0-359`.
		 * @type {number} */
		this.backgroundHueSlide = backgroundHueSlide;
		/** The background saturation `0-100`.
		 * @type {number} */
		this.backgroundSaturationSlide = backgroundSaturationSlide;
		/** The background lightness `0-100`.
		 * @type {number} */
		this.backgroundLightnessSlide = backgroundLightnessSlide;
		/** The collection of spaced separated host names in a single string.
		 * @type {string} */
		this.hostNames = hostNames;
		/** The collection of spaced separated patterns to replace for each host name in a single string.
		 * @type {string} */
		this.patternsToReplace = patternsToReplace;
		/** The collection of spaced separated replacement patterns for each host name in a single string.
		 * @type {string} */
		this.replacements = replacements;
		/** The collection of spaced separated test links in a single string.
		 * @type {string} */
		this.testLinks = testLinks;
	}
}


/** Constant containing the original text sizes from the sample.
 * @constant
 */
const fontSizeDefault = {sampleText1: "", sampleText2: "2em"};

/** Function to get the text hue value from the slider, modify the graph value and return it.
 * @function
 * @returns {number} Text hue value.
 */
function changeTextHue() {
	const textHue = document.getElementById('textHueSlide').value;
	document.getElementById('textHueVal').innerText = textHue;
	return textHue;
}
/** Function to get the text saturation value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Text saturation value.
 */
function changeTextSaturation() {
	const textSaturation = document.getElementById('textSaturationSlide').value + "%";
	document.getElementById('textSaturationVal').innerText = textSaturation;
	return textSaturation;
}
/** Function to get the text lightness value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Text lightness value.
 */
function changeTextLightness() {
	const textLightness = document.getElementById('textLightnessSlide').value + "%";
	document.getElementById('textLightnessVal').innerText = textLightness;
	return textLightness;
}

/** Function to change the text color of the samples.
 * @function
 * @returns {void}
 */
function changeTextColor() {
	const textHue = changeTextHue();
	const textSaturation = changeTextSaturation();
	const textLightness = changeTextLightness();
	if (document.getElementById('textCheck').checked == true) {
		document.getElementById('sampleText1').style.color = "hsl(" + textHue + ", " + textSaturation + ", " + textLightness + ")";
		document.getElementById('sampleText2').style.color = "hsl(" + textHue + ", " + textSaturation + ", " + textLightness + ")";
	} else {
		document.getElementById('sampleText1').style.color = "";
		document.getElementById('sampleText2').style.color = "";
	}
}

/** Function to get the value of the text size from the slider, modify the graph value and change the text size of the samples.
 * @function
 * @returns {void}
 */
function changeTextSize() {
	const textSize = document.getElementById('textSizeSlide').value;
	document.getElementById('textSizeVal').innerText = textSize + "%";
	if (document.getElementById('textCheck').checked == true) {
		document.getElementById('sampleText1').style.fontSize = textSize / 100 + "em";
		document.getElementById('sampleText2').style.fontSize = Number(fontSizeDefault.sampleText2.slice(0, -2)) * textSize / 100 + "em";
	} else {
		document.getElementById('sampleText1').style.fontSize = fontSizeDefault.sampleText1;
		document.getElementById('sampleText2').style.fontSize = fontSizeDefault.sampleText2;
	}
}

/** Function to get the value of the text style from the selection box and change the text style of the samples.
 * @function
 * @returns {void}
 */
function changeTextStyle() {
	const textStyle = document.getElementById('textStyleSelection').value;
	if (document.getElementById('textCheck').checked == true) {
		document.getElementById('sampleText1').style.fontStyle = textStyle;
		document.getElementById('sampleText2').style.fontStyle = textStyle;
	} else {
		document.getElementById('sampleText1').style.fontStyle = "";
		document.getElementById('sampleText2').style.fontStyle = "";
	}
}

/** Function to get the value of the text font family from the selection box and change the text font family of the samples.
 * @function
 * @returns {void}
 */
function changeTextFont() {
	const textFont = document.getElementById('textFontSelection').value;
	if (document.getElementById('textCheck').checked == true) {
		document.getElementById('sampleText1').style.fontFamily = textFont;
		document.getElementById('sampleText2').style.fontFamily = textFont;
	} else {
		document.getElementById('sampleText1').style.fontFamily = "";
		document.getElementById('sampleText2').style.fontFamily = "";
	}
}


/** Function to get the outline hue value from the slider, modify the graph value and return it.
 * @function
 * @returns {number} Outline hue value.
 */
function changeOutlineHue() {
	const outlineHue = document.getElementById('outlineHueSlide').value;
	document.getElementById('outlineHueVal').innerText = outlineHue;
	return outlineHue;
}
/** Function to get the outline saturation value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Outline saturation value.
 */
function changeOutlineSaturation() {
	const outlineSaturation = document.getElementById('outlineSaturationSlide').value + "%";
	document.getElementById('outlineSaturationVal').innerText = outlineSaturation;
	return outlineSaturation;
}
/** Function to get the outline lightness value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Outline lightness value.
 */
function changeOutlineLightness() {
	const outlineLightness = document.getElementById('outlineLightnessSlide').value + "%";
	document.getElementById('outlineLightnessVal').innerText = outlineLightness;
	return outlineLightness;
}

/** Function to change the outline color of the samples.
 * @function
 * @returns {void}
 */
function changeOutlineColor() {
	const outlineHue = changeOutlineHue();
	const outlineSaturation = changeOutlineSaturation();
	const outlineLightness = changeOutlineLightness();
	if (document.getElementById('outlineCheck').checked == true) {
		document.getElementById('sampleText1').style.outlineColor = "hsl(" + outlineHue + ", " + outlineSaturation + ", " + outlineLightness + ")";
		document.getElementById('sampleText2').style.outlineColor = "hsl(" + outlineHue + ", " + outlineSaturation + ", " + outlineLightness + ")";
	} else {
		document.getElementById('sampleText1').style.outlineColor = "";
		document.getElementById('sampleText2').style.outlineColor = "";
	}
}

/** Function to get the value of the outline size from the slider, modify the graph value and change the outline size of the samples.
 * @function
 * @returns {void}
 */
function changeOutlineSize(){
	const outlineSize = document.getElementById('outlineSizeSlide').value;
	document.getElementById('outlineSizeVal').innerText = outlineSize + "%";
	if (document.getElementById('outlineCheck').checked == true) {
		document.getElementById('sampleText1').style.outlineWidth = outlineSize / 100 + "em";
		document.getElementById('sampleText2').style.outlineWidth = outlineSize / 100 + "em";
	} else {
		document.getElementById('sampleText1').style.outlineWidth = "";
		document.getElementById('sampleText2').style.outlineWidth = "";
	}
}

/** Function to get the value of the outline style from the slider, modify the graph value and change the outline style of the samples.
 * @function
 * @returns {void}
 */
function changeOutlineStyle() {
	const outlineStyle = document.getElementById('outlineStyleSelection').value;
	if (document.getElementById('outlineCheck').checked == true) {
		document.getElementById('sampleText1').style.outlineStyle = outlineStyle;
		document.getElementById('sampleText2').style.outlineStyle = outlineStyle;
	} else {
		document.getElementById('sampleText1').style.outlineStyle = "";
		document.getElementById('sampleText2').style.outlineStyle = "";
	}
}


/** Function to get the background hue value from the slider, modify the graph value and return it.
 * @function
 * @returns {number} Background hue value.
 */
function changeBackgroundHue() {
	const backgroundHue = document.getElementById('backgroundHueSlide').value;
	document.getElementById('backgroundHueVal').innerText = backgroundHue;
	return backgroundHue;
}
/** Function to get the background saturation value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Background saturation value.
 */
function changeBackgroundSaturation() {
	const backgroundSaturation = document.getElementById('backgroundSaturationSlide').value + "%";
	document.getElementById('backgroundSaturationVal').innerText = backgroundSaturation;
	return backgroundSaturation;
}
/** Function to get the background lightness value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Background lightness value.
 */
function changeBackgroundLightness() {
	const backgroundLightness = document.getElementById('backgroundLightnessSlide').value + "%";
	document.getElementById('backgroundLightnessVal').innerText = backgroundLightness;
	return backgroundLightness;
}

/** Function to change the background color of the samples.
 * @function
 * @returns {void}
 */
function changeBackgroundColor() {
	const backgroundHue = changeBackgroundHue();
	const backgroundSaturation = changeBackgroundSaturation();
	const backgroundLightness = changeBackgroundLightness();
	if (document.getElementById('backgroundCheck').checked == true) {
		document.getElementById('sampleText1').style.backgroundColor = "hsl(" + backgroundHue + ", " + backgroundSaturation + ", " + backgroundLightness + ")";
		document.getElementById('sampleText2').style.backgroundColor = "hsl(" + backgroundHue + ", " + backgroundSaturation + ", " + backgroundLightness + ")";
	} else {
		document.getElementById('sampleText1').style.backgroundColor = "";
		document.getElementById('sampleText2').style.backgroundColor = "";
	}

}

/** Function to change the text.
 * @function
 * @returns {void}
 */
function changeText() {
	changeTextColor();
	changeTextSize();
	changeTextStyle();
	changeTextFont();
}
/** Function to change the outline.
 * @function
 * @returns {void}
 */
function changeOutline() {
	changeOutlineColor();
	changeOutlineSize();
	changeOutlineStyle();
}
/** Function to change the background.
 * @function
 * @returns {void}
 */
function changeBackground() {
	changeBackgroundColor();
}

/** Function to change text, outline and background.
 * @function
 * @returns {void}
 */
function changeAll() {
	changeText();
	changeOutline();
	changeBackground();
}

document.getElementById('textCheck').addEventListener('input', changeText);
document.getElementById('textHueSlide').addEventListener('input', changeTextColor);
document.getElementById('textSaturationSlide').addEventListener('input', changeTextColor);
document.getElementById('textLightnessSlide').addEventListener('input', changeTextColor);
document.getElementById('textSizeSlide').addEventListener('input', changeTextSize);
document.getElementById('textStyleSelection').addEventListener('input', changeTextStyle);
document.getElementById('textFontSelection').addEventListener('input', changeTextFont);

document.getElementById('outlineCheck').addEventListener('input', changeOutline);
document.getElementById('outlineHueSlide').addEventListener('input', changeOutlineColor);
document.getElementById('outlineSaturationSlide').addEventListener('input', changeOutlineColor);
document.getElementById('outlineLightnessSlide').addEventListener('input', changeOutlineColor);
document.getElementById('outlineSizeSlide').addEventListener('input', changeOutlineSize);
document.getElementById('outlineStyleSelection').addEventListener('input', changeOutlineStyle);

document.getElementById('backgroundCheck').addEventListener('input', changeBackground);
document.getElementById('backgroundHueSlide').addEventListener('input', changeBackgroundColor);
document.getElementById('backgroundSaturationSlide').addEventListener('input', changeBackgroundColor);
document.getElementById('backgroundLightnessSlide').addEventListener('input', changeBackgroundColor);


/** Constant for number of characters and number of pixels on the x-axis.
 * @constant
 */
const characterWidthMetric = {pixels: 369, characters: 52};
/** Constant for the ratio of pixels to characters on the x-axis.
 * @constant
 */
const characterWidth = characterWidthMetric.pixels / characterWidthMetric.characters;
/** Constant for number of text rows and number of pixels on the y-axis.
 * @constant
 */
const characterHeightMetric = {pixels: 102, rows: 7};
/** Constant for the ratio of pixels to text rows on the y-axis.
 * @constant
 */
const characterHeight = characterHeightMetric.pixels / characterHeightMetric.rows;

/** Function to adjust the element width to the max number of pixels needed for the contents.
 * @function
 * @param {HTMLElement} element - Element to be adjusted.
 * @param {number} numOfCharacters - Max number of characters in the x-axis.
 * @returns {void}
 */
function adjustWidth(element, numOfCharacters){    
	const currentSize =  Math.ceil(numOfCharacters * characterWidth);
	element.style.width = currentSize + 10 + "px";
}

/** Function to adjust the element height to the max number of pixels needed for the contents.
 * @function
 * @param {HTMLElement} element - Element to be adjusted.
 * @param {number} numRows - Number of rows.
 * @returns {void}
 */
function adjustHeight(element, numRows){    
	const currentSize =  Math.ceil(numRows * characterHeight);
	element.style.height = currentSize + 10 + "px";
}

/** Function to change the Test Links and also the sizes of the text areas of the Host Names, Patterns to Replace, Replacements and Replaced Links.
 * @function
 * @returns {void}
 */
function changeReplacedLinks() {
	
	/** Function to make list into an array and trim each element.
	 * @function
	 * @param {string} id - The id of the element.
	 * @returns {Array<string>} The string list in an array.
	 */
	const trimmingList = (id) => {
		const rawList = document.getElementById(id).value.split("\n");
		const newList = [];
		for (const element of rawList) {
			newList.push(element.trim());
		}
		return newList;
	}
	const hostNames = trimmingList('hostNames');
	const patterns = trimmingList('patternsToReplace');
	const replacements = trimmingList('replacements');
	const testLinks = trimmingList('testLinks');
	const replacedLinks = new Array(testLinks.length);

	/** Function to validate inputs on the host names, search patterns and replacements.
	 * @function
	 * @param {Array<string>} hostNames - The host names array list.
	 * @param {Array<string>} patterns - The search patterns array list.
	 * @param {Array<string>} replacements - The replacements array list.
	 * @returns {boolean}
	 */
	const inputValidation = (hostNames, patterns, replacements) => {
		if (hostNames.length != patterns.length || hostNames.length != replacements.length) {
			return false;
		}
		return true;
	}

	/** Function to replace the test link text according to the replacement rules.
	 * @function
	 * @param {string} link - The test link text.
	 * @param {string} pattern - The pattern to search in the test link.
	 * @param {string} replacement - The replacement for the test link.
	 * @returns {string}
	 */
	const replaceInDomainTest = (link, pattern, replacement) => {
		let newLink = link;
		const patternStringToRegex = pattern.match(/^\/(.+)\/([a-z]*)$/);
		if (patternStringToRegex == null){
			return newLink;
		}
		const newPattern = patternStringToRegex[1];
		const newFlag = patternStringToRegex[2];
		
		try {
			newLink = newLink.replace(RegExp(newPattern, newFlag), replacement);
		} catch (error) {
			// Ignore error.
		}
		return newLink;
	}

	let linkCount = 0;
	for (const testLink of testLinks) {
		if (inputValidation(hostNames, patterns, replacements)) {
			for (let i = 0; i < hostNames.length; i++) {
				if (testLink.search(hostNames[i]) != -1) {
					replacedLinks[linkCount] = replaceInDomainTest(testLink, patterns[i], replacements[i]);
				}
			}
		}
		
		if (replacedLinks[linkCount] == null) {
			replacedLinks[linkCount] = testLink;
		}

		linkCount += 1;		
	}

	/** Function to make the array list of strings into a single string with values separated by new lines.
	 * @function
	 * @param {Array<string>} list - The array string list.
	 * @returns {string} The single string list.
	 */
	const createNewList = (list) => {
		let newList = "";
		newList = newList.concat(list[0]);
		if (list.length > 0) {
			for (let i = 1; i < list.length; i++) {
				newList = newList.concat("\n" + list[i]);
			}
		}
		return newList
	}
	document.getElementById('replacedLinks').value = createNewList(replacedLinks);

	/** Function to calculate the maximum number of characters in a text line inside the text element.
	 * @function
	 * @param {Array<string>} list - The array string list.
	 * @returns {number} The maximum number of characters in a text line.
	 */
	const maxWidthSize = (list) => {
		let size = 0;
		for (const i of list) {
			if (size < i.length) {
				size = i.length;
			}
		}
		return size;
	};

	adjustWidth(document.getElementById('hostNames'), maxWidthSize(hostNames));
	adjustHeight(document.getElementById('hostNames'), hostNames.length);
	adjustWidth(document.getElementById('patternsToReplace'), maxWidthSize(patterns));
	adjustHeight(document.getElementById('patternsToReplace'), patterns.length);
	adjustWidth(document.getElementById('replacements'), maxWidthSize(replacements));
	adjustHeight(document.getElementById('replacements'), replacements.length);

	adjustWidth(document.getElementById('testLinks'), maxWidthSize(testLinks));
	adjustHeight(document.getElementById('testLinks'), testLinks.length);
	adjustWidth(document.getElementById('replacedLinks'), maxWidthSize(replacedLinks));
	adjustHeight(document.getElementById('replacedLinks'), replacedLinks.length);
}

document.getElementById('hostNames').addEventListener('input', changeReplacedLinks);
document.getElementById('patternsToReplace').addEventListener('input', changeReplacedLinks);
document.getElementById('replacements').addEventListener('input', changeReplacedLinks);
document.getElementById('testLinks').addEventListener('input', changeReplacedLinks);


/** Function to update the options by sending a message to take action `updateOptions` to the background.
 * @function
 * @returns {void}
 */
function updateOptions () {
	browser.runtime.sendMessage({ action: "updateOptions" });
}

/** Function to save the options in the storage and update the options.
 * @function
 * @returns {void}
 */
function saveOptions() {
	browser.storage.local.set({
		textCheck: document.getElementById('textCheck').checked,
		textHueSlide: document.getElementById('textHueSlide').value,
		textSaturationSlide: document.getElementById('textSaturationSlide').value,
		textLightnessSlide: document.getElementById('textLightnessSlide').value,
		textSizeSlide: document.getElementById('textSizeSlide').value,
		textStyleSelection: document.getElementById('textStyleSelection').value,
		textFontSelection: document.getElementById('textFontSelection').value,

		outlineCheck: document.getElementById('outlineCheck').checked,
		outlineHueSlide: document.getElementById('outlineHueSlide').value,
		outlineSaturationSlide: document.getElementById('outlineSaturationSlide').value,
		outlineLightnessSlide: document.getElementById('outlineLightnessSlide').value,
		outlineSizeSlide: document.getElementById('outlineSizeSlide').value,
		outlineStyleSelection: document.getElementById('outlineStyleSelection').value,

		backgroundCheck: document.getElementById('backgroundCheck').checked,
		backgroundHueSlide: document.getElementById('backgroundHueSlide').value,
		backgroundSaturationSlide: document.getElementById('backgroundSaturationSlide').value,
		backgroundLightnessSlide: document.getElementById('backgroundLightnessSlide').value,

        hostNames: document.getElementById('hostNames').value,
		patternsToReplace: document.getElementById('patternsToReplace').value,
		replacements: document.getElementById('replacements').value,
		testLinks: document.getElementById('testLinks').value
    });
	
	updateOptions();
}

/** Function to change the options page values when it loads for the first time.
 * @function
 * @param {OptionsStorageType} result - The options that come directly from the storage.
 * @returns {void}
 */
function changePageOptionsFromStorage(result) {
	
	/** Function to validate the existence of the keys in the dictionary.
	 * @function
	 * @param {OptionsStorageType} dictionary - The dictionary that holds the key.
	 * @param {string} key - The key that should be checked and accessed to.
	 * @param {boolean | number | string} default_value - The default value that should be returned if the key is not found.
	 * @returns {boolean | number | string} The value for a key, either from the existing dictionary or the defalut.
	 */
	const keyValidate = (dictionary, key, default_value) => {if (key in dictionary) return dictionary[key]; else return default_value;}

	document.getElementById('textCheck').checked = keyValidate(result, 'textCheck', true);
	document.getElementById('textHueSlide').value = keyValidate(result, 'textHueSlide', 0);
	document.getElementById('textSaturationSlide').value = keyValidate(result, 'textSaturationSlide', 100);
	document.getElementById('textLightnessSlide').value = keyValidate(result, 'textLightnessSlide', 50);
	document.getElementById('textSizeSlide').value = keyValidate(result, 'textSizeSlide', 100);
	document.getElementById('textStyleSelection').value = keyValidate(result, 'textStyleSelection', "");
	document.getElementById('textFontSelection').value = keyValidate(result, 'textFontSelection', "");

	document.getElementById('outlineCheck').checked = keyValidate(result, 'outlineCheck', true);
	document.getElementById('outlineHueSlide').value = keyValidate(result, 'outlineHueSlide', 242);
	document.getElementById('outlineSaturationSlide').value = keyValidate(result, 'outlineSaturationSlide', 100);
	document.getElementById('outlineLightnessSlide').value = keyValidate(result, 'outlineLightnessSlide', 50);
	document.getElementById('outlineSizeSlide').value = keyValidate(result, 'outlineSizeSlide', 10);
	document.getElementById('outlineStyleSelection').value = keyValidate(result, 'outlineStyleSelection', "dashed");

	document.getElementById('backgroundCheck').checked = keyValidate(result, 'backgroundCheck', true);
	document.getElementById('backgroundHueSlide').value = keyValidate(result, 'backgroundHueSlide', 112);
	document.getElementById('backgroundSaturationSlide').value = keyValidate(result, 'backgroundSaturationSlide', 100);
	document.getElementById('backgroundLightnessSlide').value =keyValidate(result, 'backgroundLightnessSlide', 50);

	changeAll();

	document.getElementById("hostNames").value = keyValidate(result, 'hostNames', null);
	document.getElementById("patternsToReplace").value = keyValidate(result, 'patternsToReplace', null);
	document.getElementById("replacements").value = keyValidate(result, 'replacements', null);
	document.getElementById("testLinks").value = keyValidate(result, 'testLinks', null);

	changeReplacedLinks();
}

/** Function to restore the options from the storage when options page is loaded.
 * @function
 * @returns {void}
 */
function restoreOptions() {
    
	browser.storage.local.get([
		"textCheck",
		"textHueSlide",
		"textSaturationSlide",
		"textLightnessSlide",
		"textSizeSlide",
		"textStyleSelection",
		"textFontSelection",

		"outlineCheck",
		"outlineHueSlide",
		"outlineSaturationSlide",
		"outlineLightnessSlide",
		"outlineSizeSlide",
		"outlineStyleSelection",

		"backgroundCheck",
		"backgroundHueSlide",
		"backgroundSaturationSlide",
		"backgroundLightnessSlide",

		"hostNames", 
		"patternsToReplace", 
		"replacements",
		"testLinks"]).then(changePageOptionsFromStorage);
		
}

/** Adds a listener to the document when the content is loaded. */
document.addEventListener('DOMContentLoaded', restoreOptions);
/** Adds a listener to the save button when it's clicked. */
document.getElementById('saveOptions').addEventListener('click', saveOptions);
