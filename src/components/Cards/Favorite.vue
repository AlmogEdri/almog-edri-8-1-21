<template>
  <v-col calss="favorite-card" cols="12" sm="auto">
    <v-card class="d-flex d-sm-block pa-3">
      <div class="d-flex">
        <v-img
          height="100"
          width="100"
          contain
          :src="weather_icon"
          :alt="weather_text"
        />
        <favorite-toggle :city-key="city.key" />
      </div>
      <div class="text">
        <v-card-title class="name pb-1" v-text="city_name" />
        <v-card-text class="pb-1" v-text="weather_text" />
        <v-card-text class="pb-1" v-text="temperature" />
      </div>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
import CityInfo from "../../mixins/CityInfo";
import FavoriteToggle from "../Toggle/Favorite";

export default {
  props: {
    city: Object,
  },
  mixins: [CityInfo],
  components: { FavoriteToggle },
};
</script>
