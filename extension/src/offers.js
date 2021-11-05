export class OffersLoader {
	static getDomain(url) {
		// should be in a separate class/module
		return new URL(url).hostname;
	}

	constructor() {
		this.serviceRootUrl = "http://127.0.0.1:8000"; // This should be configured based on environment
		// this.axiosInstance = axios.create({
		// 	baseURL: this.serviceRootUrl
		// })
	}

	getOffers(merchantURL, cb) {
		chrome.storage.sync.get(['offers'], result => {
			let storedOffers = result['offers'];
			if (storedOffers) {
				cb(result['offers'][merchantURL]);
			} else {
				cb([]);
			}
		});
	}

	async loadOffers(merchantURL) {
		try {
			// const offers = await this.axiosInstance.get(`/deals/${merchantURL}`);
			const offers = await fetch(`${this.serviceRootUrl}/deals/${merchantURL}`);
			const data = await offers.json();
			return data;
		} catch(e) {
			// should display error message in UI
			console.error("error loading offers");
			console.error(e);
		}
	}

	async storeOffers(merchantURL, offers) {
		const result = await chrome.storage.sync.get(['offers']);
		let storedOffers = result['offers'];
		if (!storedOffers) {
			storedOffers = {};
		}
		storedOffers[merchantURL] = offers;

		chrome.storage.sync.set({
			offers: storedOffers
		});
	}
}