<template>
  <v-col class="day-card" cols="12" sm="auto" justifY="center">
    <v-card>
      <v-col class="image-col" cols="4" sm="12">
        <v-img contain :src="image_src" />
      </v-col>
      <v-col class="details-col">
        <v-card-title class="name">{{ day_name }}</v-card-title>
        <v-card-text class="status">{{ status }}</v-card-text>
        <v-card-title class="h-4">{{ degrees }}</v-card-title>
      </v-col>
    </v-card>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
import {
  getIconSrc,
  getFormattedDay,
  getFormattedTemperature,
} from "../../helper/index";

export default {
  props: {
    day: Object,
  },
  computed: {
    ...mapState(["fahrenheit"]),

    day_name() {
      return getFormattedDay(this.day?.Date || "");
    },

    image_src() {
      return getIconSrc(this.day?.Day?.Icon || "");
    },

    status() {
      return this.day?.Day?.IconPhrase || "";
    },

    degrees() {
      const { Maximum, Minimum } = this.day?.Temperature;
      return getFormattedTemperature(
        [Maximum?.Value || 0, Minimum?.Value || 0],
        this.fahrenheit
      );
    },
  },
};
</script>

<style lang="scss">
.day-card {
  width: 200px;
  @media screen and (max-width: 600px) {
    width: unset;
  }
  .v-card {
    @media screen and (max-width: 600px) {
      display: flex !important;
      align-items: center;
    }
  }
  .image-col {
    height: 100px;
    display: flex;
    justify-content: center;
  }
  .details-col {
    div {
      text-align: center;
      display: block;
    }
  }
  .status {
    text-overflow: ellipsis;
    overflow: hidden;
    width: 160px;
    height: 1.2em;
    white-space: nowrap;

    @media screen and (max-width: 600px) {
      margin: 0 auto;
    }
  }
}
</style>
