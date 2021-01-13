<template>
  <v-app>
    <app-bar />
    <v-main style="z-index:1">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <background />
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import AppBar from "./components/Layout/AppBar";
import Background from "./components/Layout/Background";

export default {
  name: "App",
  components: {
    AppBar,
    Background,
  },
  beforeMount() {
    this.fetchCity();
  },
  methods: {
    ...mapActions(["fetchCity"]),
  },
};
</script>

<style lang="scss">
.v-input--switch .v-messages {
  display: none;
}
.name {
  text-transform: capitalize;
}
</style>
