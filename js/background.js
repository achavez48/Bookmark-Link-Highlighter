/**
 * Background module.
 * It contains the background functions to collect the bookmarks and options after receiving the message from the `highlight-bookmarks` module.
 * @module background
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
	 */
	constructor(textCheck, textHueSlide, textSaturationSlide, textLightnessSlide, textSizeSlide, textStyleSelection, textFontSelection,
		outlineCheck, outlineHueSlide, outlineSaturationSlide, outlineLightnessSlide, outlineSizeSlide, outlineStyleSelection, 
		backgroundCheck, backgroundHueSlide, backgroundSaturationSlide, backgroundLightnessSlide, hostNames, patternsToReplace, replacements) {
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
	}
}

/** Class for the options' host patterns to replace and the replacements. 
 * @class */
class PatternReplacementType {
	/**
	 * Creates an instance of `PatternReplacementType`.
	 * @param {string} patternsToReplace - The patterns to replace on and for the host name.
	 * @param {string} replacements - The replacement patterns on and for the host name.
	 */
	constructor (patternsToReplace, replacements) {
		/** The patterns to replace on and for the host name. 
		 * @type {string} */
		this.patternsToReplace = patternsToReplace;
		/** The replacement patterns on and for the host name. 
		 * @type {string} */
		this.replacements = replacements;
	}
}

/** Class for the options cache dictionary.
 * @class
 */
class optionsCacheType{
	/**
	 * Creates and instance of `optionsCacheType`.
	 * @param {boolean} getOptionsSaved - If the options saved in storage should be read.
	 * @param {boolean} textCheck - If the text should change or not.
	 * @param {string} textColor - The text HSL color.
	 * @param {number} textSize - The text relative size.
	 * @param {string} textStyle - The text style.
	 * @param {string} textFont - The text font family.
	 * @param {boolean} outlineCheck - If the outline should change or not.
	 * @param {string} outlineColor - The outline HSL color.
	 * @param {number} outlineSize - The outline relative size.
	 * @param {string} outlineStyle - The outline style.
	 * @param {boolean} backgroundCheck - If the background should change or not.
	 * @param {string} backgroundColor - The background HSL color.
	 * @param {Map<string, PatternReplacementType>} replacementRules - The host names rules, host names are keys and the values are the pattern rules.
	 */
	constructor(getOptionsSaved, textCheck, textColor, textSize, textStyle, textFont, 
		outlineCheck, outlineColor, outlineSize, outlineStyle, backgroundCheck, backgroundColor, replacementRules) {
		/** If the options saved in storage should be read.
		 * @type {boolean} */
		this.getOptionsSaved = getOptionsSaved;
		/** If the text should change or not.
		 * @type {boolean} */
		this.textCheck = textCheck;
		/** The text HSL color.
		 * @type {string} */
		this.textColor = textColor;
		/** The text relative size.
		 * @type {number} */
		this.textSize = textSize;
		/** The text style.
		 * @type {string} */
		this.textStyle = textStyle;
		/** The text font family.
		 * @type {string} */
		this.textFont = textFont;
		/** If the outline should change or not.
		 * @type {boolean} */
		this.outlineCheck = outlineCheck;
		/** The outline HSL color.
		 * @type {string} */
		this.outlineColor = outlineColor;
		/** The outline relative size.
		 * @type {number} */
		this.outlineSize = outlineSize;
		/** The outline style.
		 * @type {string} */
		this.outlineStyle = outlineStyle;
		/** If the background should change or not.
		 * @type {boolean} */
		this.backgroundCheck = backgroundCheck;
		/** The background HSL color.
		 * @type {string} */
		this.backgroundColor = backgroundColor;
		/** The host names rules, host names are keys and the values are the pattern rules.
		 * @type {Map<string, PatternReplacementType>} */
		this.replacementRules = replacementRules;
	}
}

/** Variable storing the options.
 * @var
 */
let optionsCache = {
	getOptionsSaved: true,
	textCheck: null,
	textColor: null,
	textSize: null,
	textStyle: null,
	textFont: null,
	outlineCheck: null,
	outlineColor: null,
	outlineSize: null,
	outlineStyle: null,
	backgroundCheck: null,
	backgroundColor: null,
	replacementRules: new Map()
}

/** Function to write the options to the cache.
 * @function
 * @param {OptionsStorageType} result - The options that come directly from the storage.
 * @returns {void}
 */
function writeToOptionsCache(result) {
	
	/** Function to validate the existence of the keys in the dictionary.
	 * @function
	 * @param {OptionsStorageType} dictionary - The dictionary that holds the key.
	 * @param {string} key - The key that should be checked and accessed to.
	 * @param {boolean | number | string} default_value - The default value that should be returned if the key is not found.
	 * @returns {boolean | number | string} The value for a key, either from the existing dictionary or the defalut.
	 */
	const keyValidate = (dictionary, key, default_value) => {if (key in dictionary) return dictionary[key]; else return default_value;}

	const textCheck = keyValidate(result, 'textCheck', true);
	optionsCache.textCheck = textCheck;
	const outlineCheck = keyValidate(result, 'outlineCheck', true);
	optionsCache.outlineCheck = outlineCheck;
	const backgroundCheck = keyValidate(result, 'backgroundCheck', true);
	optionsCache.backgroundCheck = backgroundCheck;
	if (textCheck) {
		const textHue = keyValidate(result, 'textHueSlide', 0);
		const textSaturation = keyValidate(result, 'textSaturationSlide', 100);
		const textLightness = keyValidate(result, 'textLightnessSlide', 50);
		optionsCache.textColor = "hsl(" + textHue + ", " + textSaturation + "%, " + textLightness + "%)";
		optionsCache.textSize = keyValidate(result, 'textSizeSlide', 100);
		optionsCache.textStyle = keyValidate(result, 'textStyleSelection', "");
		optionsCache.textFont = keyValidate(result, 'textFontSelection', "");
	} else {
		optionsCache.textColor = "";
		optionsCache.textSize = "";
		optionsCache.textStyle = "";
		optionsCache.textFont = "";
	}
	if (outlineCheck) {
		const outlineHue = keyValidate(result, 'outlineHueSlide', 242);
		const outlineSaturation = keyValidate(result, 'outlineSaturationSlide', 100);
		const outlineLightness = keyValidate(result, 'outlineLightnessSlide', 50);
		optionsCache.outlineColor = "hsl(" + outlineHue + ", " + outlineSaturation + "%, " + outlineLightness + "%)";
		optionsCache.outlineSize = keyValidate(result, 'outlineSizeSlide', 10);
		optionsCache.outlineStyle = keyValidate(result, 'outlineStyleSelection', "dashed");
	} else {
		optionsCache.outlineColor = "";
		optionsCache.outlineSize = "";
		optionsCache.outlineStyle = "";
	}
	if (backgroundCheck) {
		const backgroundHue = keyValidate(result, 'backgroundHueSlide', 112);
		const backgroundSaturation = keyValidate(result, 'backgroundSaturationSlide', 100);
		const backgroundLightness = keyValidate(result, 'backgroundLightnessSlide', 50);
		optionsCache.backgroundColor = "hsl(" + backgroundHue + ", " + backgroundSaturation + "%, " + backgroundLightness + "%)";
	} else {
		optionsCache.backgroundColor = "";
	}

	/** Function to trim and make a list from a string with spaced separated values.
	 * @function
	 * @param {string} string - The string with spaced separated values.
	 * @returns {Array<string> | null} The array list of trimmed strings.
	 */
	const trimmingList = (string) => {
		if (string) {
			const rawList = string.split("\n");
			const newList = [];
			for (const element of rawList) {
				newList.push(element.trim());
			}
			return newList;
		}

		return null;
	}

	/** Function to map host names with their replacement rules.
	 * @function
	 * @returns {Map<string, PatternReplacementType>}
	 */
	const createReplacementRules = () => {
		const hostNames = trimmingList(keyValidate(result, 'hostNames', null));
		const patternsToReplace = trimmingList(keyValidate(result, 'patternsToReplace', null));
		const replacements = trimmingList(keyValidate(result, 'replacements', null));
		let dictionary = new Map();

		if (hostNames && patternsToReplace && replacements) {
			for (let i = 0; i < hostNames.length; i++) {
				dictionary.set(hostNames[i], {patternsToReplace: patternsToReplace[i], replacements: replacements[i]});
			}
			return dictionary;
		}
		return dictionary;
	}
	optionsCache.replacementRules = createReplacementRules();
		
}

/** Function to get options from the storage and write them to the cache.
 * @function
 * @returns {void}
 */
function getOptionsFromStorage() {
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
		"replacements"]).then(writeToOptionsCache);
	
}

/** Function to get options from the storage if they are not already in the cache or changes are made in middle operation.
 * @async
 * @returns {Promise<void>}
 */
async function getOptions() {
	if (optionsCache.getOptionsSaved) {
		getOptionsFromStorage();
		optionsCache.getOptionsSaved = false;
	}
}


/** Variable storing the bookmarks.
 * @var
 */
let bookmarkCache = null;

/** Function to get the bookmarks from the database and the options if they are not in the cache and pack them together.
 * @async
 * @returns {Promise<{bookmarkCache: Set<string>, options: optionsCacheType}>}
 */
async function getBookmarksOnce() {
	
	await getOptions();
	
	if (bookmarkCache) return {bookmarkCache: bookmarkCache, options: optionsCache};
	
	const nodes = await browser.bookmarks.getTree();
	const urls = new Set();

	/** Function to extract the URLs from the bookmarks tree.
	 * @function
	 * @param {Array<{url:string, children: Array<string>}>} items 
	 * @returns {void}
	 */
	const extractUrls = (items) => {
		for (const item of items) {
			if (item.url) urls.add(item.url);
			if (item.children) extractUrls(item.children);
		}
	}
	extractUrls(nodes);

	bookmarkCache = urls; // cache

	return {bookmarkCache: bookmarkCache, options: optionsCache};
}

/** Function to update options
 * @async
 * @returns {Promise<void>}
 */
async function updateOptions() {
	optionsCache.getOptionsSaved = true;
	await getOptions();
}

/** Function to add bookmark into the bookmarks cache.
 * @function
 * @param {string} bookmarkID 
 * @param {{url: string}} bookmarkInfo 
 * @returns {void}
 */
function addBookmarkEvent(bookmarkID, bookmarkInfo) {
	const bookmarkURL = bookmarkInfo.url;
	bookmarkCache.add(bookmarkURL);
}

/** Function to delete bookmark in the bookmarks cache.
 * @function
 * @param {string} bookmarkID 
 * @param {{node: {url: string}}} bookmarkInfo 
 * @returns {void}
 */
function deleteBookmarkEvent(bookmarkID, bookmarkInfo) {
	const bookmarkURL = bookmarkInfo.node.url
	bookmarkCache.delete(bookmarkURL);
}

/** Adds a listener to the `updateOptions` action when pressing the save button in the options page. */
browser.runtime.onMessage.addListener((msg) => {
	if (msg.action === "updateOptions") {
		updateOptions();
	}
});

/** Adds a listener to the `getBookmarks` action when the browser starts or a page is loaded. */
browser.runtime.onMessage.addListener((msg, sender) => {
	if (msg.action === "getBookmarks") {
		return getBookmarksOnce().then((data) => ({ bookmarks: data.bookmarkCache, options: data.options }));
	}
});

/** Adds a listener to the bookmark creation event. */
browser.bookmarks.onCreated.addListener(addBookmarkEvent);
/** Adds a listener to the bookmark deletion event. */
browser.bookmarks.onRemoved.addListener(deleteBookmarkEvent);
