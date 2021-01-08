<template>
	<div id="home-page">
		<search-bar />
		<v-card elevation="2" outlined>
			<v-container class="px-7 py-5">
				<v-row justify="space-between">
					<div class="d-flex" elevation="2" outlined>
						<v-img
							height="100"
							src="https://developer.accuweather.com/sites/default/files/02-s.png"
							alt="weather discription"
						/>
						<div>
							<v-card-title class="pb-1">Tel-aviv</v-card-title>
							<v-card-text class="pb-2">39 C</v-card-text>
						</div>
					</div>

					<div class="actions">
						<favorite-toggle />
					</div>
				</v-row>
				<v-card-title class="justify-center text-h3">Tel-aviv</v-card-title>
				<v-row class="forecast">
					<day-card class="col"/>
					<day-card class="col"/>
					<day-card class="col"/>
					<day-card class="col"/>
					<day-card class="col"/>
				</v-row>
			</v-container>
		</v-card>
	</div>
</template>

<script>
	import SearchBar from "../components/SearchBar";
	import FavoriteToggle from "../components/Toggle/Favorite";
	import DayCard from "../components/Cards/Day";

	export default {
		components: { SearchBar, FavoriteToggle, DayCard },
	};
</script>
