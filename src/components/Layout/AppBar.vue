<template>
	<div id="navigation">
		<v-navigation-drawer
			class="d-flex d-sm-none pt-12"
			v-model="drawer"
			disable-resize-watcher
			clipped
			app
		>
			<v-list>
				<v-list-item v-for="btn in buttons" :key="btn.title" :to="btn.to" link>
					<v-list-item-icon>
						<v-icon v-text="btn.icon" />
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title v-text="btn.title" />
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app>
			<v-toolbar-title>Weather</v-toolbar-title>

			<v-spacer />

			<theme-toggle />

			<v-btn
				class="d-none d-sm-flex"
				v-for="btn in buttons"
				:to="btn.to"
				:key="btn.title"
				text
			>
				<span v-text="btn.title" />
				<v-icon v-text="btn.icon" />
			</v-btn>

			<v-btn class="d-flex d-sm-none" @click="drawer = !drawer" icon>
				<v-icon>mdi-microsoft-xbox-controller-menu</v-icon>
			</v-btn>
		</v-app-bar>
	</div>
</template>

<script>
	import ThemeToggle from "../Toggle/Theme";

	export default {
		data: () => ({
			drawer: false,
			buttons: [
				{
					title: "Weather",
					icon: "mdi-weather-partly-cloudy",
					to: "/",
				},
				{
					title: "Favorites",
					icon: "mdi-heart-outline",
					to: "/favorites",
				},
			],
		}),
		components: {
			ThemeToggle,
		},
	};
</script>

<style lang="scss">
	#navigation {
		.mobile-nav-buttons {
			display: flex;
			flex-direction: column;
		}
	}
</style>
