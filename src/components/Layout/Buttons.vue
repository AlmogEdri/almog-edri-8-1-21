<template>
  <div class="nav-buttons">
    <theme-toggle class="order-2 order-sm-0 mt-5 mt-sm-0" />
    <v-btn value="nearby" text to="/">
      <span>Weather</span>
      <v-icon>mdi-weather-partly-cloudy</v-icon>
    </v-btn>

    <v-btn value="favorites" text to="/favorites">
      <span>Favorites</span>
      <v-icon>mdi-heart-outline</v-icon>
    </v-btn>
  </div>
</template>

<script>
import ThemeToggle from "../Toggle/Theme";
export default {
  components: {
    ThemeToggle,
  },
};
</script>

<style lang="scss">
.nav-buttons {
      align-items: center;

	@media screen and (max-width: 600px) {
      align-items: flex-end;
    }
}
</style>
