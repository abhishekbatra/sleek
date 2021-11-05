'use strict';
import { DomainActivatedHandler, TabActivatedHandler } from './handlers';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.webNavigation.onBeforeNavigate.addListener(function(e) {
  const domainActivatedHandler = new DomainActivatedHandler();
  domainActivatedHandler.handleEvent(e);
});

chrome.tabs.onActivated.addListener(function(activeInfo) {
  const tabActivatedHandler = new TabActivatedHandler();
  tabActivatedHandler.handleEvent(activeInfo);
});