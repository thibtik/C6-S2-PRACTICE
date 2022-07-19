import { createApp } from 'vue'
import App from './App.vue'
import menu_view from "./components/friendnav.vue";
import form from "./components/friendform.vue" ;
import card from "./components/friendform.vue" ;

createApp(App).mount('#app')
App.component("friend_nav", menu_view);
App.component("friend_form", form);
App.component("friend_card", card);
App.mount('#app');


