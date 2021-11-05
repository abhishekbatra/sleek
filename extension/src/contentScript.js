'use strict';

import { OffersLoader } from "./offers";

// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

chrome.runtime.onMessage.addListener( (message, sender, sendResponse) => {
  if (message.action === 'url-activated') {
    const contentRenderer = new ContentRenderer();
    contentRenderer.render();
  }

  sendResponse({});

  return true;
});

export class ContentRenderer {
	render() {
    console.log("ContentRenderer.render: start");
		const offerLoader = new OffersLoader();
    
    const merchantURL = OffersLoader.getDomain(window.location.href);
    offerLoader.getOffers(merchantURL, offersResult => this.offersCB(offersResult));
	}

  offersCB(offersResult) {
    if (offersResult) {
      offersResult.forEach(offer => {
        this.renderOfferEl(offer);
      });
    }
  }

  renderOfferEl(offer) {
    debugger;
    let button = document.createElement("button");
    button.innerHTML = `Click here to get ${offer.deal_amount}% off!`;
    button.style.position = "fixed";
    button.style.top = 0;
    button.style.right = 0;
    document.body.appendChild(button);
  }
}