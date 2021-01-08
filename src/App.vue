<template>
	<v-app>
		<app-bar />

		<v-main> </v-main>
	</v-app>
</template>

<script>
	import AppBar from './components/Navigation/AppBar';
	
	export default {
		name: "App",

		components: {
			AppBar
		},
	};
</script>
