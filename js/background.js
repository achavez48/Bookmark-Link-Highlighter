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

		Object.seal(this);
	}
}

/** Class for the options' host patterns to replace and the replacements. 
 * @class */
class PatternReplacementType {
	/**
	 * Creates an instance of `PatternReplacementType`.
	 * @param {RegExp} patternsToReplace - The patterns to replace in regex on and for the host name.
	 * @param {string} replacements - The replacement patterns on and for the host name.
	 */
	constructor (patternsToReplace, replacements) {
		/** The patterns to replace in regex on and for the host name. 
		 * @type {RegExp} */
		this.patternsToReplace = patternsToReplace;
		/** The replacement patterns on and for the host name. 
		 * @type {string} */
		this.replacements = replacements;

		Object.freeze(this);
	}
	
}

/** Class for the options cache dictionary.
 * @class
 */
class OptionsCacheType{
	/**
	 * Creates and instance of `OptionsCacheType`.
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
	constructor(getOptionsSaved = true, textCheck = null, textColor = null, textSize = null, textStyle = null, textFont = null, 
		outlineCheck = null, outlineColor = null, outlineSize = null, outlineStyle = null, backgroundCheck = null, backgroundColor = null, replacementRules = new Map()) {
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

		Object.seal(this);
	}
}

/** Constant for storing options directly from storage.
 * @constant
 * @type {OptionsStorageType}
 */
const optionsStorage = new OptionsStorageType();

/** Constant for storing the options ready for processing.
 * @constant
 * @type {OptionsCacheType}
 */
const optionsCache = new OptionsCacheType();

/** Function to compile regex rules and store them in `compiledRules`.
 * @function
 * @param {{patternsToReplace: string, replacements: string}} replacementRules - Replacement patterns and replacements.
 * @returns {PatternReplacementType | null} Replacements in regex and their replacements.
 */
function compileRules(replacementRules) {
	const patternStringToRegex = replacementRules.patternsToReplace.match(/^\/(.+)?\/([a-z]+)$/);
	if (patternStringToRegex) {
		const newPattern = patternStringToRegex[1];
		const newFlag = patternStringToRegex[2];
		try {
			return new PatternReplacementType(new RegExp(newPattern, newFlag), replacementRules.replacements);
		} catch (error) {
			// Ignore error.
			return null;
		}
	}
	return null;
}

/** Function to write the options to the cache.
 * @function
 * @param {OptionsStorageType} options - The options that come directly from the storage.
 * @returns {void}
 */
function writeToOptionsCache(options) {
	
	/** Function to validate the existence of the keys in the dictionary.
	 * @function
	 * @param {OptionsStorageType} dictionary - The dictionary that holds the key.
	 * @param {string} key - The key that should be checked and accessed to.
	 * @param {boolean | string | null} default_value - The default value that should be returned if the key is not found.
	 * @returns {boolean | string | null} The value for a key, either from the existing dictionary or the defalut.
	 */
	const keyValidate = (dictionary, key, default_value) => {return dictionary[key] ?? default_value;}

	const textCheck = keyValidate(options, 'textCheck', true);
	optionsStorage.textCheck = textCheck;
	optionsCache.textCheck = textCheck;
	const outlineCheck = keyValidate(options, 'outlineCheck', true);
	optionsStorage.outlineCheck = outlineCheck;
	optionsCache.outlineCheck = outlineCheck;
	const backgroundCheck = keyValidate(options, 'backgroundCheck', true);
	optionsStorage.backgroundCheck = backgroundCheck;
	optionsCache.backgroundCheck = backgroundCheck;

	const textHue = keyValidate(options, 'textHueSlide', "0");
	const textSaturation = keyValidate(options, 'textSaturationSlide', "100");
	const textLightness = keyValidate(options, 'textLightnessSlide', "50");
	const textSize = keyValidate(options, 'textSizeSlide', "100");
	const textStyle = keyValidate(options, 'textStyleSelection', "");
	const textFont = keyValidate(options, 'textFontSelection', "");
	optionsStorage.textHueSlide = textHue;
	optionsStorage.textSaturationSlide = textSaturation;
	optionsStorage.textLightnessSlide = textLightness;
	optionsStorage.textSizeSlide = textSize;
	optionsStorage.textStyleSelection = textStyle;
	optionsStorage.textFontSelection = textFont;
	if (textCheck) {
		optionsCache.textColor = "hsl(" + textHue + ", " + textSaturation + "%, " + textLightness + "%)";
		optionsCache.textSize = Number(textSize);
		optionsCache.textStyle = textStyle;
		optionsCache.textFont = textFont;
	} else {
		optionsCache.textColor = "";
		optionsCache.textSize = "";
		optionsCache.textStyle = "";
		optionsCache.textFont = "";
	}

	const outlineHue = keyValidate(options, 'outlineHueSlide', "242");
	const outlineSaturation = keyValidate(options, 'outlineSaturationSlide', "100");
	const outlineLightness = keyValidate(options, 'outlineLightnessSlide', "50");
	const outlineSize = keyValidate(options, 'outlineSizeSlide', "10");
	const outlineStyle = keyValidate(options, 'outlineStyleSelection', "dashed");
	optionsStorage.outlineHueSlide = outlineHue;
	optionsStorage.outlineSaturationSlide = outlineSaturation;
	optionsStorage.outlineLightnessSlide = outlineLightness;
	optionsStorage.outlineSizeSlide = outlineSize;
	optionsStorage.outlineStyleSelection = outlineStyle;
	if (outlineCheck) {
		optionsCache.outlineColor = "hsl(" + outlineHue + ", " + outlineSaturation + "%, " + outlineLightness + "%)";
		optionsCache.outlineSize = Number(outlineSize);
		optionsCache.outlineStyle = outlineStyle;
	} else {
		optionsCache.outlineColor = "";
		optionsCache.outlineSize = "";
		optionsCache.outlineStyle = "";
	}

	const backgroundHue = keyValidate(options, 'backgroundHueSlide', "112");
	const backgroundSaturation = keyValidate(options, 'backgroundSaturationSlide', "100");
	const backgroundLightness = keyValidate(options, 'backgroundLightnessSlide', "50");
	optionsStorage.backgroundHueSlide = backgroundHue;
	optionsStorage.backgroundSaturationSlide = backgroundSaturation;
	optionsStorage.backgroundLightnessSlide = backgroundLightness;
	if (backgroundCheck) {
		optionsCache.backgroundColor = "hsl(" + backgroundHue + ", " + backgroundSaturation + "%, " + backgroundLightness + "%)";
	} else {
		optionsCache.backgroundColor = "";
	}

	const hostNames = keyValidate(options, 'hostNames', null);
	const patternsToReplace = keyValidate(options, 'patternsToReplace', null);
	const replacements = keyValidate(options, 'replacements', null);
	optionsStorage.hostNames = hostNames;
	optionsStorage.patternsToReplace = patternsToReplace;
	optionsStorage.replacements = replacements;

	/** Function to trim and make a list from a string with spaced separated values.
	 * @function
	 * @param {string} string - The string with spaced separated values.
	 * @returns {Array<string>} The array list of trimmed strings.
	 */
	const trimmingList = (string) => {
		const rawList = string.split("\n");
		// const newList = [];
		// for (const element of rawList) {
		// 	newList.push(element.trim());
		// }
		rawList.forEach((value, index) => rawList[index] = value.trim());
		return rawList;
		// return newList;
	}

	/** Function to map host names with their replacement rules.
	 * @function
	 * @returns {Map<string, PatternReplacementType>} Map with hostnames as keys and pattern replacement rules as values.
	 */
	const createReplacementRules = () => {
		const hostNamesList = trimmingList(hostNames);
		const patternsToReplaceList = trimmingList(patternsToReplace);
		const replacementsList = trimmingList(replacements);
		const replacementRules = new Map();

		const minimumLength = Math.min(...[hostNamesList.length, patternsToReplaceList.length, replacementsList.length]);
		for (let i = 0; i < minimumLength; i++) {
			if (hostNamesList[i] !== "") {
				replacementRules.set(hostNamesList[i], compileRules({patternsToReplace: patternsToReplaceList[i], replacements: replacementsList[i]}));
			}
		}
		return replacementRules;
	}
	optionsCache.replacementRules = createReplacementRules();

	const testLinks = keyValidate(options, 'testLinks', null);
	optionsStorage.testLinks = testLinks;

}

/** Function to get options from the storage and write them to the cache.
 * @async
 * @returns {Promise<void>}
 */
async function getOptionsFromStorage() {
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
	await browser.storage.local.get(keys).then(writeToOptionsCache);
	
}

/** Function to get options from the storage if they are not already in the cache or changes are made in middle operation.
 * @async
 * @returns {Promise<void>}
 */
async function getOptions() {
	if (optionsCache.getOptionsSaved) {
		await getOptionsFromStorage();
		optionsCache.getOptionsSaved = false;
	}
}

/** Function to update options
 * @async
 * @returns {Promise<void>}
 */
async function updateOptions() {
	optionsCache.getOptionsSaved = true;
	await getOptions();
}


/** Variable storing the bookmarks.
 * @var
 * @type {Set<string> | null}
 */
let bookmarkCache = null;

/** Function to get the bookmarks from the database and the options if they are not in the cache and pack them together.
 * @async
 * @returns {Promise<{bookmarkCache: Set<string>, options: OptionsCacheType}>} Object literal for bookmark cache and options. 
 */
async function getBookmarksOnce() {
	
	await getOptions();
	
	if (bookmarkCache) return {bookmarkCache: bookmarkCache, options: optionsCache};
	
	const nodes = await browser.bookmarks.getTree();
	const urls = new Set();

	/** Function to extract the URLs from the bookmarks tree.
	 * @function
	 * @param {Array<{url: string, children: Array<string>, title: string}>} items - Array representing the bookmark tree.
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

/** Function to export options into a JSON file and download it.
 * @async
 * @returns {Promise<void>}
 */
async function exportOptions() {

	const optionsFromStorage = {};
	await browser.storage.local.get().then(storage => {
		for (const key in storage) {
			optionsFromStorage[key] = storage[key];
		}
	});

	const optionsForExport = JSON.stringify(optionsFromStorage, null, "\t");
	const blob = new Blob([optionsForExport], {type: "application/json"});
	const optionsURL = URL.createObjectURL(blob);	

	/** Collection of active downloads to listen to and revoke their URL.
	 * @constant
	 * @type {Map<number, string>}
	 */
	const activeDownloads = new Map();

	/** Function to listen to the download state of the options JSON file and revoke it after completion or interruption.
	 * @function
	 * @param {{id: number, state: {current: string}}} download - Download item that is being listened to.
	 * @returns {void}
	 */
	const downloadListenerFunction = (download) => {
		if (activeDownloads.has(download.id) && download.state) {
			if (download.state.current === "complete" || download.state.current === "interrupted") {
				const url = activeDownloads.get(download.id);
				URL.revokeObjectURL(url);
				activeDownloads.delete(download.id);
				browser.downloads.onChanged.removeListener(downloadListenerFunction);
				// console.log(`Revoked URL with id (${download.id}): ${url}`);
			}
		}
	}

	browser.downloads.download({url: optionsURL, filename: "BLH settings.json", saveAs: true}).then((downloadId) => {
		if (downloadId) {
			activeDownloads.set(downloadId, optionsURL);
			browser.downloads.onChanged.addListener(downloadListenerFunction);
			// console.log(`Download started for URL with id (${downloadId}): ${optionsURL}`);
		} else {
			URL.revokeObjectURL(optionsURL);
			browser.downloads.onChanged.removeListener(downloadListenerFunction);
			// console.log(`Download failed for URL with id (${downloadId}): ${optionsURL}`);
		}
	});

}


/** Constant to store the information on the windows and tabs that have the options page open.
 * @constant
 * @type {Map<number, number>} - `Key = windowID; value = tabID`.
 */
const windowsWithOptionsOpened = new Map();

/** Function to register the windowID that have the options page open with its tabID.
 * @function
 * @param {{windowID: number, tabID: number}} windowOpened - The information on the options page.
 * @returns {void}
 */
function registerWindowsWithOptionsPageOpened(windowOpened) {
	if (!windowsWithOptionsOpened.has(windowOpened.windowID)) {
		windowsWithOptionsOpened.set(windowOpened.windowID, windowOpened.tabID);
	}
}

/** Function to unregister the windowID that had the options page closed.
 * @function
 * @param {number} windowClosed - The windowID of the options page closed.
 * @returns {void}
 */
function unRegisterWindowsWithOptionsPageOpened(windowClosed) {
	windowsWithOptionsOpened.delete(windowClosed);
}

/** Function to retrieve the map with the information on the windows and tabs that have the options page open.
 * @function
 * @returns {{openedWindows: Map<number, number>}}
 */
function retrieveWindowsWithOptionsPageOpened() {
	return { openedWindows: windowsWithOptionsOpened };
}

/** Function to retrieve the options directly from storage.
 * @async
 * @returns {Promise<{optionsStorage: OptionsStorageType}>}
 */
async function retrieveOptionsStorage() {
	await getOptions();
	return { optionsStorage: optionsStorage };
}

/** Constant to map all page options message actions to their functions.
 * @type {Map<string, (msg: 
 * {windowOpened: {windowID: number, tabID: number}} & 
 * {windowClosed: number}
 * ) => void | Promise<{openedWindows: Map<number, number>} | {optionsStorage: OptionsStorageType}>
 * >}
 */
const optionsPageRelatedActions = new Map([
	["updateOptions", (msg) => {updateOptions();}],
	["exportOptions", (msg) => {exportOptions();}],
	["registerWindowsWithOptionsPageOpened", (msg) => {registerWindowsWithOptionsPageOpened(msg.windowOpened);}],
	["unRegisterWindowsWithOptionsPageOpened", (msg) => {unRegisterWindowsWithOptionsPageOpened(msg.windowClosed);}],
	["retrieveWindowsWithOptionsPageOpened", async (msg) => {return retrieveWindowsWithOptionsPageOpened();}],
	["retrieveOptionsStorage", async (msg) => {return retrieveOptionsStorage();}]
]);

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

/** Function to change bookmark in the bookmarks cache.
 * @function
 * @param {string} bookmarkID 
 * @param {{url: string}} bookmarkInfo 
 * @returns {void}
 */
function changeBookmarkEvent(bookmarkID, bookmarkInfo) {
	// It only adds the new URL, because the old one is lost in the database so it cannot be located in the cache.
	if ('url' in bookmarkInfo) {
		const bookmarkURL = bookmarkInfo.url;
		bookmarkCache.add(bookmarkURL);
	}
}

/** Adds a listener to any actions that are not `getBookmarks`, which come from the options page or popup. */
browser.runtime.onMessage.addListener((msg) => {
	if (optionsPageRelatedActions.has(msg.action)) {
		return optionsPageRelatedActions.get(msg.action)(msg);
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
/** Adds a listener to the bookmark changed event. */
browser.bookmarks.onChanged.addListener(changeBookmarkEvent);
