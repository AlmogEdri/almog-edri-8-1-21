<template>
  <div id="home-page">
    <search-bar />
    <degrees-toggle />
    <city-weather />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar";
import DegreesToggle from "../components/Toggle/Degrees";
import CityWeather from "../components/CityWeather";

export default {
  components: {
    SearchBar,
    DegreesToggle,
    CityWeather,
  },
};
</script>
