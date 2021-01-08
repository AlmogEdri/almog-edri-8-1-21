import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		cities: [],
		fahrenheit: false,
		forecasts: [],
		city: {},
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
