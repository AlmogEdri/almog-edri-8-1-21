<template>
	<div class="d-flex">
		<v-autocomplete
			v-model="model"
			:items="items"
			:loading="isLoading"
			:search-input.sync="search"
			placeholder="Start typing to locations"
			solo
			return-object
		/>
	</div>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		data: () => ({
			isLoading: false,
			entries: [],
			model: null,
			search: null,
		}),
		watch: {
			search(input) {
				if (this.isLoading) return;
				this.isLoading = true;
				this.fetchEntriesDebounced(input);
				this.isLoading = false;
			},
			model(val) {
				if (val) {
					const cityKey = this.entries.filter(
						(entry) => entry.LocalizedName == val
					)[0].Key;

					if (cityKey) {
						this.changeCity(cityKey);
					}
				}
			},
		},
		computed: {
			items() {
				return this.entries.map((entry) => entry.LocalizedName || "");
			},
		},
		methods: {
			...mapActions(["changeCity"]),

			fetchEntries(input) {
				if (input) {
					axios
						.get(
							"https://dataservice.accuweather.com/locations/v1/cities/autocomplete",
							{
								mode: "no-cors",
								params: {
									apikey: process.env.VUE_APP_API_KEY,
									q: input,
									language: "en",
								},
							}
						)
						.then(({ data }) => (this.entries = data))
						.catch((error) =>
							console.error("Error occurred while searching, ", error)
						);
				}
			},

			fetchEntriesDebounced(input) {
				// cancel pending call
				clearTimeout(this._timerId);

				// delay new call 500ms
				this._timerId = setTimeout(() => this.fetchEntries(input), 500);
			},
		},
	};
</script>
