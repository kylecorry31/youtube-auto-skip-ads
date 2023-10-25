// ==UserScript==
// @name         YouTube Auto Skip
// @namespace    https://github.com/kylecorry31
// @version      1.0.0
// @description  Automatically clicks the skip button on ads.
// @author       Kyle Corry
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

const autoSkip = () => {
    if (!window.location.href.includes('https://www.youtube.com/watch')) {
        return;
    }

    try {
        const skipSelector = '.ytp-ad-skip-button';
        document.querySelectorAll(skipSelector).forEach(a => {
            a.click();
        });
    } catch (e) { }
};

const observer = new MutationObserver(autoSkip);
observer.observe(document, {
    childList: true,
    subtree: true,
});

autoSkip();
