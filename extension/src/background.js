'use strict';
import { OffersLoader } from './offers';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});

chrome.webNavigation.onBeforeNavigate.addListener(function(e) {
  const offersLoader = new OffersLoader();
  offersLoader.loadOffers(OffersLoader.getDomain(e.url));
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.get(
    activeInfo.tabId,
    tab => {
      const offersLoader = new OffersLoader();
      offersLoader.loadOffers(OffersLoader.getDomain(tab.url));
    }
  )
});