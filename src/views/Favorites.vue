<template>
  <div>
    <h3 class="text-h3 text-center">My Favorites</h3>
    <degrees-toggle />
    <v-row>
      <template v-for="city in favorites">
        <favorite-card :city="city" :key="city.key" />
      </template>
    </v-row>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DegreesToggle from "../components/Toggle/Degrees";
import FavoriteCard from "../components/Cards/Favorite";

export default {
  components: { FavoriteCard, DegreesToggle },
  computed: {
    ...mapState(["favorites"]),
  },
};
</script>

<style lang="scss">
h3.text-h3.text-center {
  font-weight: 300;
}
</style>