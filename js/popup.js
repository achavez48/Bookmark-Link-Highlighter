/**
 * Popup module.
 * It contains the popup functions to open the `options.html`.
 * @module popup
 */

/** Constant to store the information on the windows and tabs that have the options page open.
 * @constant
 * @type {Map<number, number>} - `Key = windowID; value = tabID`.
 */
let windowsWithOptionsOpened = new Map();

/** Function to rewrite the variable storing the information on the windows and tabs that have the options page open.
 * @function
 * @param {{openedWindows: Map<number, number>}} response - Resopnse from the message "retrieveWindowsWithOptionsPageOpened" sent.
 * @returns {void}
 */
function writeToConstant(response) {
	windowsWithOptionsOpened = response.openedWindows;
}

/** Function to retrieve information on the opened options pages and choose to open a new one on the current window or refocus the tab with the options page,
 * by sending the message "retrieveWindowsWithOptionsPageOpened" to the background.
 * @async
 * @returns {void}
 */
async function openOptionsPage() {
	await browser.runtime.sendMessage({ action: "retrieveWindowsWithOptionsPageOpened" }).then(writeToConstant);

	const [currentTabInfo] = await browser.tabs.query({ active: true, lastFocusedWindow: true });
	const currentWindow = currentTabInfo.windowId;

	if (!windowsWithOptionsOpened.has(currentWindow)) {
		browser.tabs.create({
			url: browser.runtime.getURL("../html/options.html")
		}); // Open a new options page tab.

	} else {
		browser.tabs.update(windowsWithOptionsOpened.get(currentWindow), {active: true}); // Redirect to opened options page tab.
	}
	
}

document.getElementById('openOptionsPage').addEventListener('click', openOptionsPage);
