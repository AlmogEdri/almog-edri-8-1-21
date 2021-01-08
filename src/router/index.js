import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Favorites from '../views/Favorites.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
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
