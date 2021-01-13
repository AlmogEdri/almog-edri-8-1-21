import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		favorites: [],
		fahrenheit: true,
		cityKey: '215854',
		forecasts: [],
		city: {},
	},
	getters: {

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
		async fetchCity({ commit, state, dispatch }) {
			const { data } = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${state.cityKey}`, {
				params: {
					details: true,
					apikey: process.env.VUE_APP_API_KEY,
				}
			});

			console.log('fetchCity:', data);
			dispatch('fetchForecasts');
			commit('setCity', data[0]);
		},

		async fetchForecasts({ commit, state }) {
			const forecasts = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${state.cityKey}`, {
				params: {
					apikey: process.env.VUE_APP_API_KEY
				}
			});
			console.log('fetchForecasts:', forecasts.data.DailyForecasts);
			commit('setForecasts', forecasts.data.DailyForecasts);
		},

		changeCity({ dispatch, commit }, key) {
			console.log(';payload', key);
			commit('setCityKey', key);
			dispatch('fetchCity');
		}
	}
});
