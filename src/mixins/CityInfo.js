import { mapState } from "vuex";
import { getIconSrc, getFormattedTemperature } from "../helper";

export default {
    computed: {
        ...mapState(["fahrenheit"]),

        city_name() {
            return this.city?.name || "";
        },

        weather_text() {
            return this.city?.WeatherText || "";
        },

        weather_icon() {
            return getIconSrc(this.city?.WeatherIcon || 0);
        },

        temperature() {
            return getFormattedTemperature(
                this.city?.Temperature?.Imperial?.Value || 0,
                this.fahrenheit
            );
        },
    },
};