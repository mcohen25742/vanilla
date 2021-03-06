/**
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { delegateEvent } from "@library/dom/domUtils";

export function initSpoilers() {
    // Setup
    delegateEvent("click", ".js-toggleSpoiler", handleToggleSpoiler);
}

/**
 * Toggle a spoiler open and closed.
 */
function handleToggleSpoiler() {
    const toggleButton: HTMLElement = this;

    const spoilerContainer = toggleButton.closest(".spoiler");
    if (spoilerContainer) {
        spoilerContainer.classList.toggle("isShowingSpoiler");
    }
}
