import { createApp } from 'vue'; 
import App from './App';
import router from './routers';
import store from './store';
import loadImage from './plugins/loadImage'

createApp(App)
    .use(router)
    .use(store)
    .use(loadImage)
    .mount('#app');