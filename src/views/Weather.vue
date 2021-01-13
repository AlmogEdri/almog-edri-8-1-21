<template>
  <div id="home-page">
    <search-bar />
    <degrees-toggle />
    <v-card elevation="2" outlined>
      <v-container class="px-7 pt-5" fluid>
        <v-row justify="space-between" dense>
          <div class="d-flex" elevation="2">
            <v-img
              height="100"
              width="100"
              contain
              :src="weather_icon"
              :alt="weather_text"
            />
            <div>
              <v-card-title class="name pb-1" v-text="city_name" />
              <v-card-text class="pb-1" v-text="temperature" />
            </div>
          </div>
          <div class="actions">
            <favorite-toggle :cityKey="cityKey" />
          </div>
        </v-row>
        <v-card-title class="justify-center text-h3" v-text="weather_text" />
        <forecast />
      </v-container>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CityInfo from "../mixins/CityInfo";
import DegreesToggle from "../components/Toggle/Degrees";
import FavoriteToggle from "../components/Toggle/Favorite";
import SearchBar from "../components/SearchBar";
import Forecast from "../components/Forecast";

export default {
  mixins: [CityInfo],
  components: { SearchBar, FavoriteToggle, DegreesToggle, Forecast },
  computed: {
    ...mapState(["city", "cityKey"]),
  },
};
</script>
