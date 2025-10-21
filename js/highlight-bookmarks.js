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
	constructor (size, unit, rule) {
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
	
	let units = String();
	if (temp.search("rem") != -1) {
		units = "rem";
		temp = temp.split("rem")[0];
	}
	if (temp.search("em") != -1) {
		units = "em";
		temp = temp.split("em")[0];
	}
	if (temp.search("px") != -1) {
		units = "px";
		temp = temp.split("px")[0];
	}
	if (temp.search("%") != -1) {
		units = "%";
		temp = temp.split("%")[0];
	}
	if (temp.search("vw") != -1) {
		units = "vw";
		temp = temp.split("vw")[0];
	}

	const size = Number(temp);
	if (Number.isNaN(size)) {
		return null;
	}

	return new OriginalTextSizeType(size, units);
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
	for (const [selector, size] of appliedRules) {
		if (element.matches(selector)) {
			return size;
		}
	}
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

/** Function to replace the 'href' attribute according to patterns in Regex. 
 * @function
 * @param {LinkType} link - The link element with the `href` property.
 * @param {Map<string, PatternReplacementType>} replacementRules - The array mapping the host names with their replacement rules.
 * @returns {LinkType} The link element with the `href` property changed. (Either the host version or the complete URL).
*/
function replaceHrefInLink(link, replacementRules) {

	/** Function to validate the key string in the rule dictionary.
	 * @function
	 * @param {Map<string, PatternReplacementType>} dictionary - Rule dictionary.
	 * @param {string} key - Key for the rule dictionary.
	 * @returns {boolean} If key exists in the rule dictionary.
	 */
	const keyValidate = (dictionary, key) => {if (dictionary.has(key)) return true; else return false;}

	/** Function to replace link elements with the `href` property considering internal/external links and their replacement rules.
	 * @function
	 * @param {Map<string, PatternReplacementType>} replacementRules - Dictionary of host names and their replacement rules.
	 * @param {PatternReplacementType} rule - Current regex search pattern rule.
	 * @returns {LinkType} New link element with it's `href` property changed if any.
	 */
	const replaceInDomainTest = (replacementRules, rule) => {
		let newLink = link;

		if (newLink.attributes.href.value.search(/(https:\/\/)|(http:\/\/)/gi) != -1) { // Evaluate internal/external links.

			const newHost = new URL(newLink.attributes.href.value).hostname; // For external links.

			if (keyValidate(replacementRules, newHost)) { // Replace external links according to actual rules.
				newLink.href = replaceStringPattern(newLink.attributes.href.value, replacementRules.get(newHost));
			}

		} else { // Replace internal links according to actual rules.
			newLink.href = replaceStringPattern(newLink.attributes.href.value, rule);
		}

		return newLink;
	}

	const hostName = document.location.hostname; // For internal links.

	if (keyValidate(replacementRules, hostName)) {
		link = replaceInDomainTest(replacementRules, replacementRules.get(hostName));
	}
	
	return link;
}

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
			if (originalTextSize.unit === "rem") {
				element.style.setProperty('font-size', originalTextSize.size * options.textSize / 100 + "rem", 'important');
			} else if (originalTextSize.unit === "em") {
				element.style.setProperty('font-size', originalTextSize.size + options.textSize / 100 - 1 + "em", 'important');
			} else if (originalTextSize.unit === "px") {
				element.style.setProperty('font-size', originalTextSize.size * options.textSize / 100 + "px", 'important');
			} else if (originalTextSize.unit === "%") {
				element.style.setProperty('font-size', originalTextSize.size + options.textSize - 100 + "%", 'important');
			} else if (originalTextSize.unit === "vw") {
				element.style.setProperty('font-size', originalTextSize.size + options.textSize - 100 + "vw", 'important');
			} else {
				element.style.setProperty('font-size', options.textSize / 100 + "em", 'important');
			}
		} else {
			element.style.setProperty('font-size', options.textSize / 100 + "em", 'important');
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

/** Function to change the text of all children under the link element that has the `href` property (in case text is displayed deep within the node).
 * @function
 * @param {LinkType} link - The link element with the `href` property.
 * @param {Map<string, OriginalTextSizeType | null>} appliedRules - Dictionary of applied rules on the page, with the `selectorText` as keys and the font size as values.
 * @param {OptionsType} options - The options imported from the background.
 * @returns {void}
 */
function changeAllChildren(link, appliedRules, options) {

	const children = link.querySelectorAll('*');

	for (const child of children) {
		const originalTextSize = getCssRules(child, appliedRules);

		changeTextStyle(child, options, originalTextSize);
	}
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
	
	
	/** Function to highlight the link with the `href` property and/or it's children.
	 * @function
	 * @param {LinkType} link - The link element with the `href` property.
	 * @returns {void}
	 */
	const highlightLink = (link) => {
		
		link = replaceHrefInLink(link, options.replacementRules);

		if (bookmarks.has(link.href)) {
			const originalTextSize = getCssRules(link, appliedRules);
			
			// link.setAttribute("class", "");

			changeTextStyle(link, options, originalTextSize);
			changeOutlineStyle(link, options);
			changeBackgroundStyle(link, options);

			changeAllChildren(link, appliedRules, options);
		}
	}

	// Initial highlight for all existing links
	/* WARNING: Some pages may grab an 'initial' bookmarked href and dynamically insert new elements with hrefs
	that are not bookmarked and still be highlighted later in the mutations. I haven't found a solution. */
	document.querySelectorAll('a[href]').forEach(highlightLink);


	const pending = new Set();
	let observerScheduled = false;
	
	const scheduleHighlightLink = () => {
		if (observerScheduled) return;
		observerScheduled = true;
		requestIdleCallback(() => {
			pending.forEach(highlightLink);
			pending.clear();
			observerScheduled = false;
		})
	}
	
	// Watch for new links being added to the page
	const observer = new MutationObserver((mutations) => {
		for (const mutation of mutations) {
			for (const node of mutation.addedNodes) {
				if (node.nodeType === Node.ELEMENT_NODE) {
					if (node.tagName === 'A' && node.href) {
						// highlightLink(node);
						pending.add(node);
					} else {
						// In case links are nested deeper
						// node.querySelectorAll?.('a[href]').forEach(highlightLink);
						node.querySelectorAll?.('a[href]').forEach(node => pending.add(node));
					}
				}
			}
		}
		scheduleHighlightLink();
	});

	observer.observe(document.body, { childList: true, subtree: true });
}

/** Sends a message to take the action `getBookmarks` to the background. */
browser.runtime.sendMessage({ action: "getBookmarks" }).then(highlightAllLinks);
