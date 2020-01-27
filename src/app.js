import Vue from 'vue';
import Vuikit from 'vuikit';
import VuikitIcons from '@vuikit/icons';

import '@vuikit/theme';
import App from './App.vue';

Vue.use(Vuikit);
Vue.use(VuikitIcons);

new Vue({
	el: '#app',
	render: r => r(App)
});
