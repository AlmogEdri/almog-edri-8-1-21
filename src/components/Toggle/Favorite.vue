<template>
	<v-btn value="favorites" icon>
		<v-icon  :color="isFavorite ? 'red': 'grey'">mdi-heart</v-icon>
	</v-btn>
</template>

<script>
	export default {
		data: () => ({
			isFavorite: true
		})
	};
</script>

<style lang="scss"></style>
