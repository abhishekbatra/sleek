import { OffersLoader } from "./offers";

export class DomainActivatedHandler {
	handleEvent(e) {
		this.onUrlActivated(e.url);
	}

	async onUrlActivated(url) {
		const offersLoader = new OffersLoader();
		const merchantURL = OffersLoader.getDomain(url);
		if (merchantURL) {
			const offers = await offersLoader.loadOffers(merchantURL);
			await offersLoader.storeOffers(merchantURL, offers);
			chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
				const currentTab = tabs[0];

				if (currentTab) {
					chrome.tabs.sendMessage(currentTab.id, {action: "url-activated"}, function(response) {});
				}
			});
		}
	}
}

export class TabActivatedHandler extends DomainActivatedHandler {
	handleEvent(activeInfo) {
		chrome.tabs.get(
			activeInfo.tabId,
			tab => {
				if (tab.url !== "") {
					this.onUrlActivated(tab.url);
				}
			}
		)
	}
}