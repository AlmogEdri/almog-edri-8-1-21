import Vue from 'vue';
import VueRouter from 'vue-router';
import Weather from '../views/Weather';
import Favorites from '../views/Favorites';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Weather',
		component: Weather
	},
	{
		path: '/favorites',
		name: 'Favorites',
		component: Favorites
	}
];

const router = new VueRouter({
	routes
});

export default router;
