<template>
	<v-app-bar app color="primary" dark>
		<v-toolbar-title >Weather</v-toolbar-title>
		<v-spacer />
		<nav-buttons class="d-flex align-right" />
	</v-app-bar>
</template>

<script>
	import NavButtons from './Buttons';
	export default {
		components: {
			NavButtons
		}
	};
</script>

<style lang="scss"></style>
