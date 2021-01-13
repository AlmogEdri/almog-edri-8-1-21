<template>
  <v-btn value="favorites" @click="toggleFavorite(cityKey)" icon>
    <v-icon :color="is_favorite ? 'red' : 'grey'">mdi-heart</v-icon>
  </v-btn>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    cityKey: String,
  },
  computed: {
    ...mapState(["favorites"]),

    is_favorite() {
      return !!this.favorites.find((x) => x.key == this.cityKey);
    },
  },
  methods: {
	  ...mapMutations(['toggleFavorite'])
  },
};
</script>
