import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const BASE_API_URL = 'https://dataservice.accuweather.com/';

export default new Vuex.Store({
	state: {
		favorites: [],
		fahrenheit: true,
		cityKey: process.env.VUE_APP_CITY_KEY,
		forecasts: [],
		city: {},
	},
	mutations: {
		setCityKey: (state, key) => state.cityKey = key,
		setCity: (state, city) => {

			// Get and set city name in the city object
			if (city.MobileLink) {
				const urlArr = city.MobileLink.split('/');
				const index = urlArr.findIndex(x => x == state.cityKey) - 1;
				city['name'] = urlArr[index];
			}

			city['key'] = state.cityKey;
			state.city = city;
		},
		setForecasts: (state, forecasts) => state.forecasts = forecasts,
		toggleFavorite: (state, key) => {
			const index = state.favorites.findIndex(x => x.key == key);

			if (index > -1) {
				state.favorites = state.favorites.filter(x => x.key !== key);
			} else {
				state.favorites = [...state.favorites, state.city];
			}
		},
		toggleFahrenheit: (state) => state.fahrenheit = !state.fahrenheit,
	},
	actions: {
		async fetchGeoLocation({ commit, state, dispatch }, { latitude, longitude }) {
			try {
				const { data } = await axios.get(`${BASE_API_URL}locations/v1/cities/geoposition/search`, {
					params: {
						apikey: process.env.VUE_APP_API_KEY,
						q: `${latitude},${longitude}`
					}
				});

				commit('setCityKey', data.Key);
				dispatch('fetchCity');
			} catch (error) {
				console.error('Can not fetch geo location. ', error);
			}
		},

		async fetchCity({ commit, state, dispatch }) {
			try {
				const { data } = await axios.get(`${BASE_API_URL}currentconditions/v1/${state.cityKey}`, {
					params: {
						details: true,
						apikey: process.env.VUE_APP_API_KEY,
					}
				});

				dispatch('fetchForecasts');
				commit('setCity', data[0]);
			} catch (error) {
				console.error('Can not fetch city. ', error);
			}
		},

		async fetchForecasts({ commit, state }) {
			try {
				const forecasts = await axios.get(`${BASE_API_URL}forecasts/v1/daily/5day/${state.cityKey}`, {
					params: {
						apikey: process.env.VUE_APP_API_KEY
					}
				});

				commit('setForecasts', forecasts.data.DailyForecasts);

			} catch (error) {
				console.error('Can not fetch forecasts. ', error);
			}
		},

		changeCity({ dispatch, commit }, key) {
			commit('setCityKey', key);
			dispatch('fetchCity');
		}
	}
});
