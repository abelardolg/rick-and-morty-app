import { createApp } from 'vue'
import App from './App.vue'

import "./styles/styles.scss";
import store from "vuex";

createApp(App).use(store).mount('#app')
