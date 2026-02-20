/**
 * Highlight-Bookmarks module.
 * It contains the main functions to highlight bookmarks in the webpage document, after sending a message to the `background` module.
 * @module highlight-bookmarks
 */

/** Class for the link attribute property `value`. (Simulation) 
 * @class */
class LinkAttributesValueType {
	/**
	 * Creates an instance of `LinkAttributesValueType`. Simulation of a link attributes value property.
	 * @param {string} value - The value of the href on the link element.
	 */
	constructor (value) {
		/** The value of the href on the link element. 
		 * @type {string} */
		this.value = value;
	}
}

/** Class for the link `attributes` property. (Simulation) 
 * @class */
class LinkAttributesType extends NamedNodeMap{
	/**
	 * Creates an instance of `LinkAttributesType`. Simulation of a link attributes property.
	 * @param {LinkAttributesValueType} href - The property coming from the property `attributes`.
	 */
	constructor (href) {
		/** The property `href` on the link element attributes. 
		 * @type {LinkAttributesValueType} */
		this.href = href;
	}
}

/** Class for the link element. (Simulation) 
 * @class */
class LinkType extends Element {
	/**
	 * Creates an instance of `LinkType`. Simulation of a link element.
	 * @param {string} href - The `href` property of the link.
	 * @param {CSSStyleDeclaration} style - The `style` property of the link.
	 */
	constructor (href, style) {
		/** The property `href` on the link element. 
		 * @type {string} */
		this.href = href;
		/** The property `style` on the link element. 
		 * @type {CSSStyleDeclaration} */
		this.style = style;
	}
	/** The property `attributes` on the link element is rewritten for the simulation. 
	 * @type {LinkAttributesType} */
	attributes = new LinkAttributesType();
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
	}
}


/** Class for the options imported from the background. 
 * @class */
class OptionsType {
	/**
	 * Creates an instance of `OptionsType`.
	 * @param {boolean} getOptionsSaved - Value to get the options that are saved on file or use the ones already loaded in memory.
	 * @param {boolean} textCheck - Value to change the text style or to leave it as it is.
	 * @param {string} textColor - Text color value in HSL format.
	 * @param {number} textSize - Text size value as a percentage `0-100`.
	 * @param {string} textStyle - Text style value.
	 * @param {string} textFont - Text style font value.
	 * @param {boolean} outlineCheck - Value to change the outline style or to leave it as it is.
	 * @param {string} outlineColor - Outline color value in HSL format.
	 * @param {number} outlineSize - Outline size value as a percentage `0-100`.
	 * @param {string} outlineStyle - Outline style value.
	 * @param {boolean} backgroundCheck - Value to change the background style or to leave it as it is.
	 * @param {string} backgroundColor - Background color value in HSL format.
	 * @param {Map<string, PatternReplacementType>} replacementRules - Map list with the host names as keys and the dictionary of replacement rules as values.
	 */
	constructor (
		getOptionsSaved, 
		textCheck,
		textColor, 
		textSize, 
		textStyle, 
		textFont, 
		outlineCheck,
		outlineColor, 
		outlineSize, 
		outlineStyle, 
		backgroundCheck,
		backgroundColor, 
		replacementRules
	) {
		/** Value to get the options that are saved on file or use the ones already loaded in memory. 
		 * @type {boolean} */
		this.getOptionsSaved = getOptionsSaved;
		/** Value to change the text style or to leave it as it is. 
		 * @type {boolean} */
		this.textCheck = textCheck;
		/** Text color value in HSL format. 
		 * @type {string} */
		this.textColor = textColor;
		/** Text size value as a percentage `0-100`. 
		 * @type {number} */
		this.textSize = textSize;
		/** Text style value. 
		 * @type {string} */
		this.textStyle = textStyle;
		/** Text style font value. 
		 * @type {string} */
		this.textFont = textFont;
		/** Value to change the outline style or to leave it as it is. 
		 * @type {boolean} */
		this.outlineCheck = outlineCheck;
		/** Outline color value in HSL format. 
		 * @type {string} */
		this.outlineColor = outlineColor;
		/** Outline size value as a percentage `0-100`. 
		 * @type {number} */
		this.outlineSize = outlineSize;
		/** Outline style value. 
		 * @type {string} */
		this.outlineStyle = outlineStyle;
		/** Value to change the background style or to leave it as it is. 
		 * @type {boolean} */
		this.backgroundCheck = backgroundCheck;
		/** Background color value in HSL format. 
		 * @type {string} */
		this.backgroundColor = backgroundColor;
		/** Map list with the host names as keys and the dictionary of replacement rules as values. 
		 * @type {Map<string, PatternReplacementType>} */
		this.replacementRules = replacementRules;
	}
}

/** Class for the link's original text size, unit. 
 * @class */
class OriginalTextSizeType {
	/**
	 * Creates an instance of `OriginalTextSizeType`.
	 * @param {number} size - The size of the original link's text.
	 * @param {string} unit - The unit of the original link's text.
	 */
	constructor (size, unit) {
		/** The size of the original link's text. 
		 * @type {number} */
		this.size = size;
		/** The unit of the original link's text. 
		 * @type{string} */
		this.unit = unit;
	}
}

/**	Function to get the original text size number, unit and the entire CSS rule.
 * @function
 * @param {string} rule - CSS rule.
 * @returns {OriginalTextSizeType | null} Returns the original text size with it's unit and rule if any.
 */
function getOriginalTextSize(rule) {
	
	let temp = rule;
	temp = temp.split("font-size:")[1];
	temp = temp.split(";")[0];
	temp = temp.trim();
	
	/** Function to return current search.
	 * @function
	 * @param {string} value 
	 * @param {string} units 
	 * @returns {OriginalTextSizeType | null}
	 */
	const filter = (value, units) => {
		const size = Number(value);
		if (Number.isNaN(size)) {
			return null;
		}
		return new OriginalTextSizeType(size, units);
	}

	let units = String();
	if (temp.search("rem") != -1) {
		units = "rem";
		temp = temp.split("rem")[0];
		return filter(temp, units);
	}
	if (temp.search("em") != -1) {
		units = "em";
		temp = temp.split("em")[0];
		return filter(temp, units);
	}
	if (temp.search("px") != -1) {
		units = "px";
		temp = temp.split("px")[0];
		return filter(temp, units);
	}
	if (temp.search("%") != -1) {
		units = "%";
		temp = temp.split("%")[0];
		return filter(temp, units);
	}
	if (temp.search("vw") != -1) {
		units = "vw";
		temp = temp.split("vw")[0];
		return filter(temp, units);
	}

	return null;
}

/** Function to get all the CSS rules in the page.
 * @function
 * @param {StyleSheetList} styleSheets - The stylesheet list of the page.
 * @returns {Map<string, OriginalTextSizeType | null>}
 */
function getAllCssRules(styleSheets) {
	const appliedRules = new Map();
	const property = "font-size";
	for (let i = 0; i < styleSheets.length; i++) {
		try {
			const rules = styleSheets[i].cssRules; // || stylesheets[i].rules; // Deprecated
			if (rules) {
				for (let j = 0; j < rules.length; j++) {
					const rule = rules[j];
					if(rule.cssText.search(property) != -1) {
						const originalTextSize = getOriginalTextSize(rule.cssText);
						if (originalTextSize) {
							appliedRules.set(rule.selectorText, originalTextSize);
						}
					}
				}
			}
		} catch (error) {
			// Ignore error.
		}
	}

	return appliedRules;
}

/** Function to get any of the CSS rules (`font-size`) of the link element and save the originals with their units.
 * @function
 * @param {LinkType} element - The link element with the `href` property.
 * @param {Map<string, OriginalTextSizeType | null>} appliedRules - Dictionary of applied rules on the page, with the `selectorText` as keys and the font size as values.
 * @returns {OriginalTextSizeType | null} The CSS rule for that link element (`font-size`).
 */
function getCssRules(element, appliedRules) {
	let numberOfSizeSelectors = 0;
	let sizes = [];
	let selectors = [];
	for (const [selector, size] of appliedRules) {
		if (element.matches(selector)) {
			// return size;
			sizes.push(size);
			selectors.push(selector);
			numberOfSizeSelectors += 1;
		}
	}

	/** Function to choose the longest string for selector.
	 * @function
	 * @returns {{name: string, size: OriginalTextSizeType | null}}
	 */
	const choosingLongestSelector = () => {
		let index = 0;
		let length = -1;
		for (let i = 0; i < selectors.length; i++) {
			if (selectors[i].length > length) {
				length = selectors[i].length;
				index = i;
			}
		}
		return {name: selectors[index], size: sizes[index]};
	}
	if (numberOfSizeSelectors > 0) {
		const selector = choosingLongestSelector();
		return selector.size;
	}

	return null;
}

/** Function that replaces in the string the pattern and replaces it with another pattern.
 * @function
 * @param {string} string - The original string to be changed.
 * @param {PatternReplacementType} rule - The host regex patterns to replace and the replacements.
 * @returns {string} The string with the pattern replacements.
 * @example
 * // Example 1:
 * const newString1 = replaceStringPattern("https://www.youtube.com/watch?v=video_ID&list=list_ID&index=2", "/(\/watch\?v=)(.*)&list=(.*)$/gi", "$1$2");
 * console.log(newString1); // Expected output: https://www.youtube.com/watch?v=video_ID
 *  // Example 2:
 * const newString2 = replaceStringPattern("https://twitter.com/some_user", "/twitter.com/gi", "x.com");
 * console.log(newString2); // Expected output: https://x.com/some_user
 *  // Example 3:
 * const newString3 = replaceStringPattern("/posts?tags=some_tag", "/(\/en\/posts\?tags=)|(\/posts\?tags=)/gi", "/en/?tags=");
 * console.log(newString3); // Expected output: /en/?tags=some_tag
 */
function replaceStringPattern(string, rule) {
	let newString = string;
	if (rule == null){
		return newString;
	}
	try {
		newString = newString.replace(rule.patternsToReplace, rule.replacements);
	} catch (error) {
		// Ignore error.
	}
	return newString;
}

/** Function to replace the 'href' attribute in the link according to patterns in Regex. 
 * @function
 * @param {LinkType} link - The link element with the `href` property.
 * @param {Map<string, PatternReplacementType>} replacementRules - The array mapping the host names with their replacement rules.
 * @returns {void}
*/
function replaceHrefInLink(link, replacementRules) {

	/** Function to validate the key string in the rule dictionary.
	 * @function
	 * @param {Map<string, PatternReplacementType>} dictionary - Rule dictionary.
	 * @param {string} key - Key for the rule dictionary.
	 * @returns {boolean} If key exists in the rule dictionary.
	 */
	const keyValidate = (dictionary, key) => {if (dictionary.has(key)) return true; else return false;}

	/** Function to replace the string in the link element with the `href` property considering internal/external links and their replacement rules.
	 * @function
	 * @param {Map<string, PatternReplacementType>} replacementRules - Dictionary of host names and their replacement rules.
	 * @param {PatternReplacementType} rule - Current regex search pattern rule.
	 * @returns {string} New string for the link element for its `href` property.
	 */
	const replaceInDomain = (replacementRules, rule) => {
		const newLinkStringRelative = link.attributes.href.value;
		let newLinkString = newLinkStringRelative;
		// TODO: make it so it search at the start of the string (^)
		if (newLinkStringRelative.search(/(https:\/\/)|(http:\/\/)/gi) != -1) { // Evaluate internal/external links.
			try {
				const newHost = new URL(newLinkStringRelative).hostname; // For external links.

				if (keyValidate(replacementRules, newHost)) { // Replace external links according to actual rules.
					newLinkString = replaceStringPattern(newLinkStringRelative, replacementRules.get(newHost));
				}
			} catch {
				console.warn(`URL not recognized: ${newLinkStringRelative}`);
			}

		} else { // Replace internal links according to actual rules.
			newLinkString = replaceStringPattern(newLinkStringRelative, rule);
		}

		return newLinkString;
	}

	const hostName = document.location.hostname; // For internal links.
	if (keyValidate(replacementRules, hostName)) {
		const newLink = replaceInDomain(replacementRules, replacementRules.get(hostName));
		if (newLink !== link.attributes.href.value) {
			link.href = newLink;
		}
	}
	
}

/** Collection of functions to change the link's text size depending on the units used.
 * @constant
 * @type {Map<string, (element: LinkType, optionsTextSize: number, originalTextSize: number) => void>}
 */
const setPropertyFontSize = new Map([
	["rem", (element, optionsTextSize, originalTextSize) => {element.style.setProperty('font-size', originalTextSize * optionsTextSize / 100 + "rem", 'important');}], 
	["em", (element, optionsTextSize, originalTextSize) => {element.style.setProperty('font-size', originalTextSize + optionsTextSize / 100 - 1 + "em", 'important');}], 
	["px", (element, optionsTextSize, originalTextSize) => {element.style.setProperty('font-size', originalTextSize * optionsTextSize / 100 + "px", 'important');}], 
	["%", (element, optionsTextSize, originalTextSize) => {element.style.setProperty('font-size', originalTextSize + optionsTextSize - 100 + "%", 'important');}], 
	["vw", (element, optionsTextSize, originalTextSize) => {element.style.setProperty('font-size', originalTextSize + optionsTextSize - 100 + "vw", 'important');}], 
	["else", (element, optionsTextSize, ..._) => {element.style.setProperty('font-size', optionsTextSize / 100 + "em", 'important');}]
]);

/** Function to change the link's CSS text style.
 * @function
 * @param {LinkType} element - The link element with the `href` property.
 * @param {OptionsType} options - The options imported from the background.
 * @param {OriginalTextSizeType} originalTextSize - The link's original text size.
 * @returns {void}
 */
function changeTextStyle(element, options, originalTextSize) {
	if (options.textCheck) {
		if (originalTextSize) {
			(setPropertyFontSize.get(originalTextSize.unit) ?? setPropertyFontSize.get("else"))(element, options.textSize, originalTextSize.size);
		} else {
			setPropertyFontSize.get("else")(element, options.textSize);
		}

		element.style.setProperty('color', options.textColor, 'important');
		element.style.setProperty('font-style', options.textStyle, 'important');
		element.style.setProperty('font-family', options.textFont, 'important');
	}
}

/** Function to change the link's CSS outline style.
 * @function
 * @param {LinkType} element - The link element with the `href` property.
 * @param {OptionsType} options - The options imported from the background.
 * @returns {void}
 */
function changeOutlineStyle(element, options) {
	if (options.outlineCheck) {
		element.style.setProperty('outline-color', options.outlineColor, 'important');
		element.style.setProperty('outline-width', options.outlineSize / 100 + "em", 'important');
		element.style.setProperty('outline-style', options.outlineStyle, 'important');
	}
}

/** Function to change the link's CSS background style.
 * @function
 * @param {LinkType} element - The link element with the `href` property.
 * @param {OptionsType} options - The options imported from the background.
 * @returns {void}
 */
function changeBackgroundStyle(element, options) {
	if (options.backgroundCheck) {
		element.style.setProperty('background-color', options.backgroundColor, 'important');
	}
}

// /** Function to change the text of all children under the link element that has the `href` property (in case text is displayed deep within the node).
//  * @function
//  * @param {LinkType} link - The link element with the `href` property.
//  * @param {Map<string, OriginalTextSizeType | null>} appliedRules - Dictionary of applied rules on the page, with the `selectorText` as keys and the font size as values.
//  * @param {OptionsType} options - The options imported from the background.
//  * @returns {void}
//  */
// function changeAllChildren(link, appliedRules, options) {

// 	const children = link.querySelectorAll('*');

// 	for (const child of children) {
// 		const originalTextSize = getCssRules(child, appliedRules);
// 		if (child.tagName != 'IMG') {
// 			changeTextStyle(child, options, originalTextSize);
// 		}
// 		// changeTextStyle(child, options, originalTextSize);
// 	}
// }

/** Function (algorithm) to change the text of the node that is inside the link element including the link itself using the dictionary of applied rules on the page, 
 * with the `selectorText` as keys and the font size as values; and the options imported from the background.
 * @function
 * @param {Element} node - The node that is inside the link element including the link itself.
 * @param {{appliedRules: Map<string, OriginalTextSizeType | null>, options: OptionsType}} args - The arguments for the internal function. Dictionary of applied rules on the page, 
 * with the `selectorText` as keys and the font size as values; with the the options imported from the background.
 */
function processAllChildren_changeNodeText(node, args) {
	const originalTextSize = getCssRules(node, args.appliedRules);
	changeTextStyle(node, args.options, originalTextSize);
}

/** Function to process the text of all children under the link element that has the `href` property (in case text is displayed deep within the node).
 * @function
 * @param {LinkType} link - The link element with the `href` property.
 * @param {{appliedRules: Map<string, OriginalTextSizeType | null>, options: OptionsType} | {}} args - The arguments for the internal function. Dictionary of applied rules on the page, 
 * with the `selectorText` as keys and the font size as values; with the the options imported from the background. Or empty object literal.
 * @param {(node: Element, args: {appliedRules: Map<string, OriginalTextSizeType | null>, options: OptionsType} | {}) => void} algorithm - Internal function accepting `node` and `args` as arguments.
 * Being the node that is inside the link element including the link itself, and the arguments that the function accepts.
 * @returns {void}
 */
function processAllChildren(link, args, algorithm) {
	
	/** Function to process all children text nodes including itself.
	 * @function
	 * @param {Element} node - The node that is inside the link element including the link itself.
	 * @returns {void}
	 */
	const processChildrenTextNodes = (node) => {

		const children = node.childNodes;

		children.forEach(child => {
			if (child.data) {
				if (child.data.trim() != "") {
					// const originalTextSize = getCssRules(node, appliedRules);
					// changeTextStyle(node, options, originalTextSize);
					algorithm(node, args);
				}
			} else {
				processChildrenTextNodes(child);
			}
			
		});

	}
	
	processChildrenTextNodes(link);
}

/** Function to highlight all the links in the page including mutated nodes.
 * @function
 * @param {{bookmarks: Set<string>, options: OptionsType}} response - The response of the sent message to get the bookmarks from the background.
 * @returns {void}
 */
function highlightAllLinks(response) {
	const bookmarks = response.bookmarks;
	const options = response.options;

	const styleSheets = document.styleSheets;
	const appliedRules = getAllCssRules(styleSheets);

	/** Collection of original styles and process status for all initial links in the page.
	 * @constant
	 * @type {Map<LinkType, {style: string, processed: boolean}>}
	 */
	const originalStyles = new Map();

	/** Collection of mutations records for considered attributes.
	 * @constant
	 * @type {Set<MutationRecord>}
	 */
	const pendingAttributes = new Set();
	
	/** Function to highlight the link with the `href` property and/or it's children.
	 * @function
	 * @param {LinkType} link - The link element with the `href` property.
	 * @param {boolean} original - Boolean to go back to the original style.
	 * @returns {void}
	 */
	const highlightLink = (link, original) => {
		
		const href = link.getAttribute('href') || link.getAttribute('data-href');
		if (!href) return;

		// Skip dummy / JS links.
		if (href === "#" || href.startsWith("javascript")) return;

		replaceHrefInLink(link, options.replacementRules);

		if (bookmarks.has(link.href)) {
			// const originalTextSize = getCssRules(link, appliedRules);
			
			// link.setAttribute("class", "");

			// if (link.tagName != 'IMG') {
			// 	changeTextStyle(link, options, originalTextSize);
			// }

			changeOutlineStyle(link, options);
			changeBackgroundStyle(link, options);

			// changeAllChildren(link, appliedRules, options);
			processAllChildren(link, {appliedRules: appliedRules, options: options}, processAllChildren_changeNodeText);
		} else {
			if (original) {
				link.setAttribute("style", originalStyles.get(link).style);
			}
		}
	}

	// Initial highlight for all existing links.
	document.querySelectorAll('a[href], [data-href]').forEach(node => {
		const style = structuredClone(node.getAttribute("style"));
		originalStyles.set(node, {style: style, processed: false});
		highlightLink(node, false);
	});

	/** Collection of links loaded after page completion.
	 * @constant
	 * @type {Set<LinkType>}
	 */
	const pending = new Set();
	let observerScheduled = false;
	
	/** Function to schedule highlighting links.
	 * @function
	 * @returns {void}
	 */
	const scheduleHighlightLink = () => {
		if (observerScheduled) return;
		observerScheduled = true;
		requestIdleCallback(() => {
		
			pendingAttributes.forEach(mutation => {
				const node = mutation.target;
				if (!originalStyles.has(node)) {
					const style = structuredClone(node.getAttribute("style"));
					originalStyles.set(node, {style: style, processed: false});
				} else {
					const oldValue = mutation.oldValue;
					const newValue = node.getAttribute("href") || node.getAttribute("data-href");
					if (oldValue != newValue) {
						originalStyles.get(node).processed = false;
					} else {
						originalStyles.get(node).processed = true;
					}
				}

				if (!originalStyles.get(node).processed) {
					originalStyles.get(node).processed = true;
					highlightLink(node, true);
				}
			});
			pendingAttributes.clear();

			pending.forEach(node => {
				if (node.matches('a[href], [data-href]')) {
					highlightLink(node, false);
				} else {
					// In case links are nested deeper
					node.querySelectorAll?.('a[href], [data-href]').forEach(node => highlightLink(node, false));
				}
			});
			pending.clear();
			observerScheduled = false;
		})
	}
	
	// Watch for new links being added to the page
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			if (mutation.type === "attributes" && (mutation.attributeName === "href" || mutation.attributeName === "data-href")) {
				pendingAttributes.add(mutation);
			}
			for (const node of mutation.addedNodes) {
				if (node.nodeType === Node.ELEMENT_NODE) {
					pending.add(node);
				}
			}
		}
		scheduleHighlightLink();
	});

	observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeOldValue: true, attributeFilter: ['href', 'data-href'] });
}

let backgroundResponseProcessed = false;

/** Function to process the background response when it sends the bookmarks and options.
 * @function
 * @returns {void}
 */
function processBackgroundResponse() {
	backgroundResponseProcessed = true;

	/** Sends a message to take the action `getBookmarks` to the background. */
	browser.runtime.sendMessage({ action: "getBookmarks" }).then(highlightAllLinks);
}

/** Function for the visibility change event listener, to process the page when visibility changes.
 * @function
 * @returns {void}
 */
function eventListenerFunction() {
	if (!document.hidden && !backgroundResponseProcessed) {
		// console.debug("Page was loaded while hidden, now visible it was processed.");
		processBackgroundResponse();
	} //else {
	// 	console.debug("Page was loaded while hidden, it's still hidden and not processed yet.");
	// }
}

/* Check if the page is visible and if the background already sent the bookmarks and options.
   If not then add even listener for visibility change. */
if (!document.hidden && !backgroundResponseProcessed) {
	// console.debug("Page was loaded while visible.");
	processBackgroundResponse();
} else {
	document.addEventListener("visibilitychange", eventListenerFunction, {once: true});
}
