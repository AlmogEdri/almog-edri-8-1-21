<template>
  <div id="navigation">
    <v-navigation-drawer
      class="d-flex d-sm-none py-12 pa-7"
      v-model="drawer"
      app
      clipped
    >
      <nav-buttons class="mobile-nav-buttons" />
    </v-navigation-drawer>
    <v-app-bar app>
      <v-toolbar-title>Weather</v-toolbar-title>

      <v-spacer />

      <nav-buttons class="d-none d-sm-flex align-right" />
      <v-btn class="d-flex d-sm-none" @click="drawer = !drawer" icon>
        <v-icon>mdi-microsoft-xbox-controller-menu</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import NavButtons from "./Buttons";

export default {
  data: () => ({
    drawer: false,
  }),
  components: {
    NavButtons,
  },
};
</script>

<style lang="scss">
#navigation {
  .mobile-nav-buttons {
    display: flex;
    flex-direction: column;
  }
}
</style>