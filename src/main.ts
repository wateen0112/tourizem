import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import 'vuetify/styles'
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createPinia } from 'pinia';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const pinia = createPinia();
const vuetify = createVuetify({
    components,
    directives,
  })
  createApp(App).component('VueDatePicker',VueDatePicker)
createApp(App). use(vuetify,{
    iconfont: 'mdi' // 'md' || 'mdi' || 'fa' || 'fa4'
  }). use(router).use(ToastPlugin).use(pinia).mount('#app')
