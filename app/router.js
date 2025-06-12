import Vue from 'nativescript-vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Playback from './views/Playback.vue';
import NoiseSelection from './views/NoiseSelection.vue';
import Favorites from './views/Favorites.vue';
import SleepRecords from './views/SleepRecords.vue';
import Settings from './views/Settings.vue';

export default new VueRouter({
  pageRouting: true,
  routes: [
    { path: '/', redirect: '/playback' },
    { path: '/playback', component: Playback },
    { path: '/noise', component: NoiseSelection },
    { path: '/favorites', component: Favorites },
    { path: '/sleep', component: SleepRecords },
    { path: '/settings', component: Settings },
  ]
});