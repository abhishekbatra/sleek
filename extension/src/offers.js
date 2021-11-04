export async function loadOffers(url) {
  return [
		{
			"deal_id": "2e5955ce-c796-4742-9eb4-1913f8105c9e",
			"retailer_id": "3cb32510-0e33-4b39-8b83-f5ed58e3be90",
			"retailer_name": "Walmart",
			"retailer_domains": [
				"walmart.com",
				"walmart.ca"
			],
			"deal_type": "PERCENTAGE",
			"deal_amount": 0.2
		},
		{
			"deal_id": "edb602b3-d6bb-4542-b521-33e76e9bb584",
			"retailer_id": "8f4aaf65-937d-451f-9ed5-5cee88c52c97",
			"retailer_name": "Canadian Tire",
			"retailer_domains": [
				"canadiantire.ca"
			],
			"deal_type": "PERCENTAGE",
			"deal_amount": 0.29
		},
	];
}

export class OffersLoader {
	static getDomain(url) {
		// should be in a separate class/module
		return new URL(url).hostname;
	}

	getOffers(url, cb) {
		chrome.storage.sync.get(['offers'], cb);
		cb([
			{
				"deal_id": "2e5955ce-c796-4742-9eb4-1913f8105c9e",
				"retailer_id": "3cb32510-0e33-4b39-8b83-f5ed58e3be90",
				"retailer_name": "Walmart",
				"retailer_domains": [
					"walmart.com",
					"walmart.ca"
				],
				"deal_type": "PERCENTAGE",
				"deal_amount": 0.2
			},
			{
				"deal_id": "edb602b3-d6bb-4542-b521-33e76e9bb584",
				"retailer_id": "8f4aaf65-937d-451f-9ed5-5cee88c52c97",
				"retailer_name": "Canadian Tire",
				"retailer_domains": [
					"canadiantire.ca"
				],
				"deal_type": "PERCENTAGE",
				"deal_amount": 0.29
			},
		]);
	}

	loadOffers(url) {
		
	}

	storeOffers(url) {
		chrome.storage.sync.get(['offers'], result => {
			result['offers'] = offers;
			chrome.storage.sync.set({
				offers: result
			});
		});
	}
}