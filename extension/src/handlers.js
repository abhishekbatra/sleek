import { OffersLoader } from "./offers";

export class DomainActivatedHandler {
	handleEvent(e) {
		this.onUrlActivated(e.url);
	}

	onUrlActivated(url) {
		const offersLoader = new OffersLoader();
		const merchantURL = OffersLoader.getDomain(url);
		if (merchantURL) {
			const offers = offersLoader.loadOffers(merchantURL);
			offersLoader.storeOffers(merchantURL, offers);
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