<template>
  <v-switch
    class="switch"
    :input-value="fahrenheit"
    @change="toggleFahrenheit"
    append-icon="mdi-temperature-fahrenheit"
    prepend-icon="mdi-temperature-celsius"
    dense
  />
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["fahrenheit"]),
  },
  methods: {
    ...mapMutations(["toggleFahrenheit"]),
  },
};
</script>

<style lang="scss">
.switch {
  width: 100px;
}
</style>
