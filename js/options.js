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
	 * @param {string} textHueSlide - The text hue `0-359`.
	 * @param {string} textSaturationSlide - The text staturation `0-100`.
	 * @param {string} textLightnessSlide - The text lightness  `0-100`.
	 * @param {string} textSizeSlide - The text relative size.
	 * @param {string} textStyleSelection - The text style.
	 * @param {string} textFontSelection - The text font family.
	 * @param {boolean} outlineCheck - If the outline should change or not.
	 * @param {string} outlineHueSlide - The outline hue `0-359`.
	 * @param {string} outlineSaturationSlide - The outline saturation `0-100`.
	 * @param {string} outlineLightnessSlide - The outline lightness `0-100`.
	 * @param {string} outlineSizeSlide - The outline relative size.
	 * @param {string} outlineStyleSelection - The outline style.
	 * @param {boolean} backgroundCheck - If the background should change or not.
	 * @param {string} backgroundHueSlide - The background hue `0-359`.
	 * @param {string} backgroundSaturationSlide - The background saturation `0-100`.
	 * @param {string} backgroundLightnessSlide - The background lightness `0-100`.
	 * @param {string} hostNames - The collection of spaced separated host names in a single string.
	 * @param {string} patternsToReplace - The collection of spaced separated patterns to replace for each host name in a single string.
	 * @param {string} replacements - The collection of spaced separated replacement patterns for each host name in a single string.
	 * @param {string} testLinks - The collection of spaced separated test links in a single string.
	 */
	constructor(textCheck = null, textHueSlide = null, textSaturationSlide = null, textLightnessSlide = null, textSizeSlide = null, textStyleSelection = null, textFontSelection = null,
		outlineCheck = null, outlineHueSlide = null, outlineSaturationSlide = null, outlineLightnessSlide = null, outlineSizeSlide = null, outlineStyleSelection = null, 
		backgroundCheck = null, backgroundHueSlide = null, backgroundSaturationSlide = null, backgroundLightnessSlide = null, hostNames = null, patternsToReplace = null, replacements = null, testLinks = null) {
		/** If the text should change or not.
		 * @type {boolean} */
		this.textCheck = textCheck;
		/** The text hue `0-359`.
		 * @type {string} */
		this.textHueSlide = textHueSlide;
		/** The text staturation `0-100`.
		 * @type {string} */
		this.textSaturationSlide = textSaturationSlide;
		/** The text lightness  `0-100`.
		 * @type {string} */
		this.textLightnessSlide = textLightnessSlide;
		/** The text relative size.
		 * @type {string} */
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
		 * @type {string} */
		this.outlineHueSlide = outlineHueSlide;
		/** The outline saturation `0-100`.
		 * @type {string} */
		this.outlineSaturationSlide = outlineSaturationSlide;
		/** The outline lightness `0-100`.
		 * @type {string} */
		this.outlineLightnessSlide = outlineLightnessSlide;
		/** The outline relative size.
		 * @type {string} */
		this.outlineSizeSlide = outlineSizeSlide;
		/** The outline style.
		 * @type {string} */
		this.outlineStyleSelection = outlineStyleSelection;
		/** If the background should change or not.
		 * @type {boolean} */
		this.backgroundCheck = backgroundCheck;
		/** The background hue `0-359`.
		 * @type {string} */
		this.backgroundHueSlide = backgroundHueSlide;
		/** The background saturation `0-100`.
		 * @type {string} */
		this.backgroundSaturationSlide = backgroundSaturationSlide;
		/** The background lightness `0-100`.
		 * @type {string} */
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

/** Constant to save the options in the storage and compare them to current values.
 * @constant
 */
const savedOptions = new OptionsStorageType();

/** Function to change the color of the cell when there are changes to its value.
 * @function
 * @param {string} cellId - Cell element ID.
 * @param {boolean | string | null} newValue - The new value of the element.
 * @param {boolean | string | null} oldValue - The old value of the element.
 * @returns {void}
 */
function changeCellBackgroundColor(cellId, newValue, oldValue) {
	if (newValue !== oldValue) {
		const color = "hsl(0,100%,80%)";
		if (document.getElementById(cellId).style.getPropertyValue("background-color") == color) {
			return;
		}
		document.getElementById(cellId).style.setProperty("background-color", color);
		return;
	}
	document.getElementById(cellId).style.removeProperty("background-color");
}

/** Function to change the text check cell background color.
 * @function
 * @returns {void}
 */
function changeTextCheck() {
	const textCheck = document.getElementById('textCheck').checked;
	changeCellBackgroundColor('textCheckCell', textCheck, savedOptions.textCheck);
}

/** Function to get the text hue value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Text hue value.
 */
function changeTextHue() {
	const textHue = document.getElementById('textHueSlide').value;
	document.getElementById('textHueVal').innerText = textHue;
	changeCellBackgroundColor('textHueCell', textHue, savedOptions.textHueSlide);
	return textHue;
}
/** Function to get the text saturation value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Text saturation value.
 */
function changeTextSaturation() {
	const textSaturation = document.getElementById('textSaturationSlide').value;
	document.getElementById('textSaturationVal').innerText = textSaturation + "%";
	changeCellBackgroundColor('textSaturationCell', textSaturation, savedOptions.textSaturationSlide);
	return textSaturation + "%";
}
/** Function to get the text lightness value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Text lightness value.
 */
function changeTextLightness() {
	const textLightness = document.getElementById('textLightnessSlide').value;
	document.getElementById('textLightnessVal').innerText = textLightness + "%";
	changeCellBackgroundColor('textLightnessCell', textLightness, savedOptions.textLightnessSlide);
	return textLightness + "%";
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
	const textSize = Number(document.getElementById('textSizeSlide').value);
	document.getElementById('textSizeVal').innerText = textSize + "%";
	changeCellBackgroundColor('textSizeCell', String(textSize), savedOptions.textSizeSlide);
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
	changeCellBackgroundColor('textStyleCell', textStyle, savedOptions.textStyleSelection);
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
	changeCellBackgroundColor('textFontCell', textFont, savedOptions.textFontSelection);
	if (document.getElementById('textCheck').checked == true) {
		document.getElementById('sampleText1').style.fontFamily = textFont;
		document.getElementById('sampleText2').style.fontFamily = textFont;
	} else {
		document.getElementById('sampleText1').style.fontFamily = "";
		document.getElementById('sampleText2').style.fontFamily = "";
	}
}


/** Function to change the outline check cell background color.
 * @function
 * @returns {void}
 */
function changeOutlineCheck() {
	const outlineCheck = document.getElementById('outlineCheck').checked;
	changeCellBackgroundColor('outlineCheckCell', outlineCheck, savedOptions.outlineCheck);
}

/** Function to get the outline hue value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Outline hue value.
 */
function changeOutlineHue() {
	const outlineHue = document.getElementById('outlineHueSlide').value;
	document.getElementById('outlineHueVal').innerText = outlineHue;
	changeCellBackgroundColor('outlineHueCell', outlineHue, savedOptions.outlineHueSlide);
	return outlineHue;
}
/** Function to get the outline saturation value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Outline saturation value.
 */
function changeOutlineSaturation() {
	const outlineSaturation = document.getElementById('outlineSaturationSlide').value;
	document.getElementById('outlineSaturationVal').innerText = outlineSaturation + "%";
	changeCellBackgroundColor('outlineSaturationCell', outlineSaturation, savedOptions.outlineSaturationSlide);
	return outlineSaturation + "%";
}
/** Function to get the outline lightness value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Outline lightness value.
 */
function changeOutlineLightness() {
	const outlineLightness = document.getElementById('outlineLightnessSlide').value;
	document.getElementById('outlineLightnessVal').innerText = outlineLightness + "%";
	changeCellBackgroundColor('outlineLightnessCell', outlineLightness, savedOptions.outlineLightnessSlide);
	return outlineLightness + "%";
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
	const outlineSize = Number(document.getElementById('outlineSizeSlide').value);
	document.getElementById('outlineSizeVal').innerText = outlineSize + "%";
	changeCellBackgroundColor('outlineSizeCell', String(outlineSize), savedOptions.outlineSizeSlide);
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
	changeCellBackgroundColor('outlineStyleCell', outlineStyle, savedOptions.outlineStyleSelection);
	if (document.getElementById('outlineCheck').checked == true) {
		document.getElementById('sampleText1').style.outlineStyle = outlineStyle;
		document.getElementById('sampleText2').style.outlineStyle = outlineStyle;
	} else {
		document.getElementById('sampleText1').style.outlineStyle = "";
		document.getElementById('sampleText2').style.outlineStyle = "";
	}
}


/** Function to change the background check cell background color.
 * @function
 * @returns {void}
 */
function changeBackgroundCheck() {
	const backgroundCheck = document.getElementById('backgroundCheck').checked;
	changeCellBackgroundColor('backgroundCheckCell', backgroundCheck, savedOptions.backgroundCheck);
}

/** Function to get the background hue value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Background hue value.
 */
function changeBackgroundHue() {
	const backgroundHue = document.getElementById('backgroundHueSlide').value;
	document.getElementById('backgroundHueVal').innerText = backgroundHue;
	changeCellBackgroundColor('backgroundHueCell', backgroundHue, savedOptions.backgroundHueSlide);
	return backgroundHue;
}
/** Function to get the background saturation value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Background saturation value.
 */
function changeBackgroundSaturation() {
	const backgroundSaturation = document.getElementById('backgroundSaturationSlide').value;
	document.getElementById('backgroundSaturationVal').innerText = backgroundSaturation + "%";
	changeCellBackgroundColor('backgroundSaturationCell', backgroundSaturation, savedOptions.backgroundSaturationSlide);
	return backgroundSaturation + "%";
}
/** Function to get the background lightness value from the slider, modify the graph value and return it.
 * @function
 * @returns {string} Background lightness value.
 */
function changeBackgroundLightness() {
	const backgroundLightness = document.getElementById('backgroundLightnessSlide').value;
	document.getElementById('backgroundLightnessVal').innerText = backgroundLightness + "%";
	changeCellBackgroundColor('backgroundLightnessCell', backgroundLightness, savedOptions.backgroundLightnessSlide);
	return backgroundLightness + "%";
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
	changeTextCheck();
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
	changeOutlineCheck();
	changeOutlineColor();
	changeOutlineSize();
	changeOutlineStyle();
}
/** Function to change the background.
 * @function
 * @returns {void}
 */
function changeBackground() {
	changeBackgroundCheck();
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


/** Constant for the scale of the characters for the font: 'Courier New', Courier, monospace
 * @constant
 */
const characterScale = {base: 12, current: 10}; // Base: 12pt
/** Constant for number of characters and number of pixels on the x-axis.
 * @constant
 */
const characterWidthMetric = {pixels: 192, characters: 20};
/** Constant for the ratio of pixels to characters on the x-axis.
 * @constant
 */
const characterWidth = characterWidthMetric.pixels / characterWidthMetric.characters * (characterScale.current / characterScale.base);
/** Constant for number of text rows and number of pixels on the y-axis.
 * @constant
 */
const characterHeightMetric = {pixels: 36, rows: 2};
/** Constant for the ratio of pixels to text rows on the y-axis.
 * @constant
 */
const characterHeight = characterHeightMetric.pixels / characterHeightMetric.rows * (characterScale.current / characterScale.base);

/** Function to adjust the element width to the max number of pixels needed for the contents.
 * @function
 * @param {HTMLElement} element - Element to be adjusted.
 * @param {number} numOfCharacters - Max number of characters in the x-axis.
 * @returns {void}
 */
function adjustWidth(element, numOfCharacters){    
	const currentSize =  Math.ceil(numOfCharacters * characterWidth);
	// const currentSize =  numOfCharacters * characterWidth;
	element.style.width = currentSize + "px";
}

/** Function to adjust the element height to the max number of pixels needed for the contents.
 * @function
 * @param {HTMLElement} element - Element to be adjusted.
 * @param {number} numRows - Number of rows.
 * @returns {void}
 */
function adjustHeight(element, numRows){    
	const currentSize =  Math.ceil(numRows * characterHeight);
	// const currentSize =  numRows * characterHeight;
	element.style.height = currentSize + "px";
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
	 * @returns {boolean} If the 3 inputs have the same number of rows.
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
	 * @returns {string} The new string.
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
			newLink = newLink.replace(new RegExp(newPattern, newFlag), replacement);
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

	changeCellBackgroundColor('hostNamesCell', document.getElementById('hostNames').value, savedOptions.hostNames);
	changeCellBackgroundColor('patternsToReplaceCell', document.getElementById('patternsToReplace').value, savedOptions.patternsToReplace);
	changeCellBackgroundColor('replacementsCell', document.getElementById('replacements').value, savedOptions.replacements);
	changeCellBackgroundColor('testLinksCell', document.getElementById('testLinks').value, savedOptions.testLinks);
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

/** Function to export the options into a JSON file by sending a message to take action `exportOptions` to the background.
 * @function
 * @returns {void}
 */
function exportOptions() {
	browser.runtime.sendMessage({ action: "exportOptions" });
}

/** Regular expression to replace commas in the alert message list.
 * @constant
 */
const searchForCommasGlobally = new RegExp(",", "g");

/** Function to make the set of elements in a selection field and a string of the list.
 * @function
 * @param {string} elementId - The id of the element in the options page from which the optional values are taken.
 * @returns {{set: Set<string>, string: string}} Object literal for the list of options as set and as a string.
 */
function selectionFieldsGetSetWithString(elementId) {
	const list = Array.from(document.getElementById(elementId).options).map(options => options.value);
	const set = new Set(list);
	const string = list.toString().replace(searchForCommasGlobally, ",\n");
	return {set: set, string: string};
}

/** Constant to store the optional values for each selection field in the options page.
 * @constant
 * Map for the options (in options page) that have optional values, with a function as value to return the set of available values and their string representation.
 * @type {Map<string, {set: Set<string>, string: string}>}
 */
const selectionFields = new Map([
	["textStyleSelection", selectionFieldsGetSetWithString("textStyleSelection")],
	["textFontSelection", selectionFieldsGetSetWithString("textFontSelection")],
	["outlineStyleSelection", selectionFieldsGetSetWithString("outlineStyleSelection")]
]);

/** Function to validate the existence of the keys in the dictionary and their value type.
 * @function
 * @param {OptionsStorageType} dictionary - The dictionary that holds the key.
 * @param {string} key - The key that should be checked and accessed to.
 * @param {boolean | string | null} default_value - The default value that should be returned if the key is not found.
 * @returns {boolean | string} The value for a key, either from the existing dictionary or the default.
 */
function keyValidate(dictionary, key, default_value) {
	
	if (key in dictionary) {
		
		if (typeof default_value === "boolean") {

			if (typeof dictionary[key] !== "boolean") {
				alert(`"${key}" must be a non-string boolean value (true or false).\n\nCurrent value: ${dictionary[key]}`);
				return default_value;
			}

		}

		if (typeof default_value === "string") {

			if (selectionFields.has(key)) {
				if (!selectionFields.get(key).set.has(dictionary[key])) {
					alert(`"${key}" must be a valid selection (\n${selectionFields.get(key).string}\n).\n\nCurrent value: ${dictionary[key]}`);
					return default_value;
				}
			}

			const default_value_isAStringNumber = !isNaN(Number(default_value)) && default_value !== "";

			if (default_value_isAStringNumber) {
				const current_value_isAStringNumber = !isNaN(Number(dictionary[key])) && dictionary[key] !== "" && typeof dictionary[key] === "string";
				if (!current_value_isAStringNumber) {
					alert(`"${key}" must be a string value of a number.\n\nCurrent value: ${dictionary[key]}`);
					return default_value;
				}
			}

		}

		if (default_value === null) {

			if (dictionary[key] !== "" && typeof dictionary[key] !== "string") {
				alert(`"${key}" must be a string value.\n\nCurrent value: ${dictionary[key]}`);
				return default_value;
			}

		}

		return dictionary[key];

	}

	if (default_value === null) {
		default_value = "";
	}
	
	return default_value;

}

/** Constant to store current, stored (database or constant), or default values of all options.
 * @constant
 * @type {Map<string, Map<string, (dictionary: OptionsStorageType) => boolean | string | null>>}
 */
const gettingOptions = new Map([
	["textCheck", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'textCheck', true);}],
		["element", dictionary => {return document.getElementById('textCheck').checked;}]
	])],
	["textHueSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'textHueSlide', "0");}],
		["element", dictionary => {return document.getElementById('textHueSlide').value;}]
	])],
	["textSaturationSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'textSaturationSlide', "100");}],
		["element", dictionary => {return document.getElementById('textSaturationSlide').value;}]
	])],
	["textLightnessSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'textLightnessSlide', "50");}],
		["element", dictionary => {return document.getElementById('textLightnessSlide').value;}]
	])],
	["textSizeSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'textSizeSlide', "100");}],
		["element", dictionary => {return document.getElementById('textSizeSlide').value;}]
	])],
	["textStyleSelection", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'textStyleSelection', "");}],
		["element", dictionary => {return document.getElementById('textStyleSelection').value;}]
	])],
	["textFontSelection", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'textFontSelection', "");}],
		["element", dictionary => {return document.getElementById('textFontSelection').value;}]
	])],

	["outlineCheck", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'outlineCheck', true);}],
		["element", dictionary => {return document.getElementById('outlineCheck').checked;}]
	])],
	["outlineHueSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'outlineHueSlide', "242");}],
		["element", dictionary => {return document.getElementById('outlineHueSlide').value;}]
	])],
	["outlineSaturationSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'outlineSaturationSlide', "100");}],
		["element", dictionary => {return document.getElementById('outlineSaturationSlide').value;}]
	])],
	["outlineLightnessSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'outlineLightnessSlide', "50");}],
		["element", dictionary => {return document.getElementById('outlineLightnessSlide').value;}]
	])],
	["outlineSizeSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'outlineSizeSlide', "10");}],
		["element", dictionary => {return document.getElementById('outlineSizeSlide').value;}]
	])],
	["outlineStyleSelection", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'outlineStyleSelection', "dashed");}],
		["element", dictionary => {return document.getElementById('outlineStyleSelection').value;}]
	])],

	["backgroundCheck", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'backgroundCheck', true);}],
		["element", dictionary => {return document.getElementById('backgroundCheck').checked;}]
	])],
	["backgroundHueSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'backgroundHueSlide', "112");}],
		["element", dictionary => {return document.getElementById('backgroundHueSlide').value;}]
	])],
	["backgroundSaturationSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'backgroundSaturationSlide', "100");}],
		["element", dictionary => {return document.getElementById('backgroundSaturationSlide').value;}]
	])],
	["backgroundLightnessSlide", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'backgroundLightnessSlide', "50");}],
		["element", dictionary => {return document.getElementById('backgroundLightnessSlide').value;}]
	])],

	["hostNames", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'hostNames', null);}],
		["element", dictionary => {return document.getElementById("hostNames").value;}]
	])],
	["patternsToReplace", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'patternsToReplace', null);}],
		["element", dictionary => {return document.getElementById("patternsToReplace").value;}]
	])],
	["replacements", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'replacements', null);}],
		["element", dictionary => {return document.getElementById("replacements").value;}]
	])],
	["testLinks", new Map([
		["storage", dictionary => {return keyValidate(dictionary, 'testLinks', null);}],
		["element", dictionary => {return document.getElementById("testLinks").value;}]
	])],
]);

/** Function to get the options from a source (storage/dummy or element) and save them in the constant.
 * @function
 * @param {OptionsStorageType | null} options - The options retrieved from the storage or a dummy.
 * @param {string} source - The source from where to get the options (storage/dummy or element).
 * @returns {void}
 */
function getSavedOptions(options, source) {

	savedOptions.textCheck = gettingOptions.get('textCheck').get(source)(options);
	savedOptions.textHueSlide = gettingOptions.get('textHueSlide').get(source)(options);
	savedOptions.textSaturationSlide = gettingOptions.get('textSaturationSlide').get(source)(options);
	savedOptions.textLightnessSlide = gettingOptions.get('textLightnessSlide').get(source)(options);
	savedOptions.textSizeSlide = gettingOptions.get('textSizeSlide').get(source)(options);
	savedOptions.textStyleSelection = gettingOptions.get('textStyleSelection').get(source)(options);
	savedOptions.textFontSelection = gettingOptions.get('textFontSelection').get(source)(options);

	savedOptions.outlineCheck = gettingOptions.get('outlineCheck').get(source)(options);
	savedOptions.outlineHueSlide = gettingOptions.get('outlineHueSlide').get(source)(options);
	savedOptions.outlineSaturationSlide = gettingOptions.get('outlineSaturationSlide').get(source)(options);
	savedOptions.outlineLightnessSlide = gettingOptions.get('outlineLightnessSlide').get(source)(options);
	savedOptions.outlineSizeSlide = gettingOptions.get('outlineSizeSlide').get(source)(options);
	savedOptions.outlineStyleSelection = gettingOptions.get('outlineStyleSelection').get(source)(options);

	savedOptions.backgroundCheck = gettingOptions.get('backgroundCheck').get(source)(options);
	savedOptions.backgroundHueSlide = gettingOptions.get('backgroundHueSlide').get(source)(options);
	savedOptions.backgroundSaturationSlide = gettingOptions.get('backgroundSaturationSlide').get(source)(options);
	savedOptions.backgroundLightnessSlide = gettingOptions.get('backgroundLightnessSlide').get(source)(options);

	savedOptions.hostNames = gettingOptions.get('hostNames').get(source)(options);
	savedOptions.patternsToReplace = gettingOptions.get('patternsToReplace').get(source)(options);
	savedOptions.replacements = gettingOptions.get('replacements').get(source)(options);
	savedOptions.testLinks = gettingOptions.get('testLinks').get(source)(options);

}

/** Function to save the options to the storage and update the options in the background.
 * @function
 * @returns {void}
 */
function saveOptions() {
	const source = 'element';
	browser.storage.local.set({
		textCheck: gettingOptions.get('textCheck').get(source)(),
		textHueSlide: gettingOptions.get('textHueSlide').get(source)(),
		textSaturationSlide: gettingOptions.get('textSaturationSlide').get(source)(),
		textLightnessSlide: gettingOptions.get('textLightnessSlide').get(source)(),
		textSizeSlide: gettingOptions.get('textSizeSlide').get(source)(),
		textStyleSelection: gettingOptions.get('textStyleSelection').get(source)(),
		textFontSelection: gettingOptions.get('textFontSelection').get(source)(),

		outlineCheck: gettingOptions.get('outlineCheck').get(source)(),
		outlineHueSlide: gettingOptions.get('outlineHueSlide').get(source)(),
		outlineSaturationSlide: gettingOptions.get('outlineSaturationSlide').get(source)(),
		outlineLightnessSlide: gettingOptions.get('outlineLightnessSlide').get(source)(),
		outlineSizeSlide: gettingOptions.get('outlineSizeSlide').get(source)(),
		outlineStyleSelection: gettingOptions.get('outlineStyleSelection').get(source)(),

		backgroundCheck: gettingOptions.get('backgroundCheck').get(source)(),
		backgroundHueSlide: gettingOptions.get('backgroundHueSlide').get(source)(),
		backgroundSaturationSlide: gettingOptions.get('backgroundSaturationSlide').get(source)(),
		backgroundLightnessSlide: gettingOptions.get('backgroundLightnessSlide').get(source)(),

        hostNames: gettingOptions.get('hostNames').get(source)(),
		patternsToReplace: gettingOptions.get('patternsToReplace').get(source)(),
		replacements: gettingOptions.get('replacements').get(source)(),
		testLinks: gettingOptions.get('testLinks').get(source)()
    });
	
	getSavedOptions(null, source);
	changeAll();
	changeReplacedLinks();

	updateOptions();
}

/** Function to change the options page values when it loads for the first time.
 * @function
 * @param {OptionsStorageType} options - The options that come directly from the storage.
 * @returns {void}
 */
function changePageOptionsFromStorage(options) {
	const source = 'storage';

	document.getElementById('textCheck').checked = gettingOptions.get('textCheck').get(source)(options);
	document.getElementById('textHueSlide').value = gettingOptions.get('textHueSlide').get(source)(options);
	document.getElementById('textSaturationSlide').value = gettingOptions.get('textSaturationSlide').get(source)(options);
	document.getElementById('textLightnessSlide').value = gettingOptions.get('textLightnessSlide').get(source)(options);
	document.getElementById('textSizeSlide').value = gettingOptions.get('textSizeSlide').get(source)(options);
	document.getElementById('textStyleSelection').value = gettingOptions.get('textStyleSelection').get(source)(options);
	document.getElementById('textFontSelection').value = gettingOptions.get('textFontSelection').get(source)(options);

	document.getElementById('outlineCheck').checked = gettingOptions.get('outlineCheck').get(source)(options);
	document.getElementById('outlineHueSlide').value = gettingOptions.get('outlineHueSlide').get(source)(options);
	document.getElementById('outlineSaturationSlide').value = gettingOptions.get('outlineSaturationSlide').get(source)(options);
	document.getElementById('outlineLightnessSlide').value = gettingOptions.get('outlineLightnessSlide').get(source)(options);
	document.getElementById('outlineSizeSlide').value = gettingOptions.get('outlineSizeSlide').get(source)(options);
	document.getElementById('outlineStyleSelection').value = gettingOptions.get('outlineStyleSelection').get(source)(options);

	document.getElementById('backgroundCheck').checked = gettingOptions.get('backgroundCheck').get(source)(options);
	document.getElementById('backgroundHueSlide').value = gettingOptions.get('backgroundHueSlide').get(source)(options);
	document.getElementById('backgroundSaturationSlide').value = gettingOptions.get('backgroundSaturationSlide').get(source)(options);
	document.getElementById('backgroundLightnessSlide').value = gettingOptions.get('backgroundLightnessSlide').get(source)(options);

	changeAll();

	document.getElementById("hostNames").value = gettingOptions.get('hostNames').get(source)(options);
	document.getElementById("patternsToReplace").value = gettingOptions.get('patternsToReplace').get(source)(options);
	document.getElementById("replacements").value = gettingOptions.get('replacements').get(source)(options);
	document.getElementById("testLinks").value = gettingOptions.get('testLinks').get(source)(options);

	changeReplacedLinks();
}

/** Function to import the options from a JSON file.
 * @function
 * @returns {void}
 */
async function importOptions() {

	const fileInput = document.getElementById('fileInput');
	const file = fileInput.files[0];

	if (!file) {
		alert("Select a JSON file to import.");
		return;
	}
	if (file.type !== "application/json") {
		alert("Select a JSON file to import.");
		return;
	}

	try {

		const fileContent = await file.text();
		const importedOptions = JSON.parse(fileContent);

		changePageOptionsFromStorage(importedOptions);

	} catch (error) {
		
		console.error("Invalid JSON file: ", error);
		alert("Invalid JSON file. Please select a valid JSON file to import.");

	}
	
}

function defaultOptions() {
	const source = 'storage';
	const options = new Map();

	document.getElementById('textCheck').checked = gettingOptions.get('textCheck').get(source)(options);
	document.getElementById('textHueSlide').value = gettingOptions.get('textHueSlide').get(source)(options);
	document.getElementById('textSaturationSlide').value = gettingOptions.get('textSaturationSlide').get(source)(options);
	document.getElementById('textLightnessSlide').value = gettingOptions.get('textLightnessSlide').get(source)(options);
	document.getElementById('textSizeSlide').value = gettingOptions.get('textSizeSlide').get(source)(options);
	document.getElementById('textStyleSelection').value = gettingOptions.get('textStyleSelection').get(source)(options);
	document.getElementById('textFontSelection').value = gettingOptions.get('textFontSelection').get(source)(options);

	document.getElementById('outlineCheck').checked = gettingOptions.get('outlineCheck').get(source)(options);
	document.getElementById('outlineHueSlide').value = gettingOptions.get('outlineHueSlide').get(source)(options);
	document.getElementById('outlineSaturationSlide').value = gettingOptions.get('outlineSaturationSlide').get(source)(options);
	document.getElementById('outlineLightnessSlide').value = gettingOptions.get('outlineLightnessSlide').get(source)(options);
	document.getElementById('outlineSizeSlide').value = gettingOptions.get('outlineSizeSlide').get(source)(options);
	document.getElementById('outlineStyleSelection').value = gettingOptions.get('outlineStyleSelection').get(source)(options);

	document.getElementById('backgroundCheck').checked = gettingOptions.get('backgroundCheck').get(source)(options);
	document.getElementById('backgroundHueSlide').value = gettingOptions.get('backgroundHueSlide').get(source)(options);
	document.getElementById('backgroundSaturationSlide').value = gettingOptions.get('backgroundSaturationSlide').get(source)(options);
	document.getElementById('backgroundLightnessSlide').value = gettingOptions.get('backgroundLightnessSlide').get(source)(options);

	changeAll();
}

/** Function to restore the options from the storage when options page is loaded.
 * @function
 * @returns {void}
 */
function restoreOptions() {
    const keys = [
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
		"testLinks"];
	browser.storage.local.get(keys).then(result => {getSavedOptions(result, 'storage'); changePageOptionsFromStorage(result);});
		
}

/** Adds a listener to the document when the content is loaded. */
document.addEventListener('DOMContentLoaded', restoreOptions);
/** Adds a listener to the save button when it's clicked. */
document.getElementById('saveOptions').addEventListener('click', saveOptions);

document.getElementById('exportOptions').addEventListener('click', exportOptions);
document.getElementById('importOptions').addEventListener('click', importOptions);
document.getElementById('defaultOptions').addEventListener('click', defaultOptions);
