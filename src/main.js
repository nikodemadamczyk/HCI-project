import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// Import Font Awesome
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

