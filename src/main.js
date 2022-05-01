import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



// import bootstrap
import  'bootstrap'
import  'bootstrap/dist/css/bootstrap.min.css'


//import main style
import  './theme/main.scss'


createApp(App).use(store).use(router).mount('#app')
