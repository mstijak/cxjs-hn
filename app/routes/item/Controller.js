import { Controller } from "cx/ui";
import { fetchItem } from "../../api";

export default class extends Controller {
	onInit() {
		this.load();
	}

	scrollToTop() {
		let scrollEl = document.scrollingElement || document.documentElement;
		scrollEl.scrollTop = 0;
	}

	load() {
		let id = this.store.get("$root.url").substring("~/item/".length);

		fetchItem(id).then(item => {
			this.scrollToTop();
			this.store.set("item", item);
		});
	}
}
