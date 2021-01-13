<template>
  <v-row v-if="forecasts.length" justify="center" dense>
    <template v-for="day in forecasts">
      <day-card :day="day" :key="day.Date" />
    </template>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import DayCard from "./Cards/Day";

export default {
  components: { DayCard },
  computed: {
    ...mapState(["forecasts"]),
  },
};
</script>
