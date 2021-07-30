import Vue from 'vue'
import App from './App.vue'
import VMask from 'v-mask'

//Using Specter as it is a lighter framework than Bootstrap and the Application does not require a "heavy" styling.
import 'spectre.css/dist/spectre.min.css'
import 'spectre.css/dist/spectre-icons.min.css'

Vue.use(VMask);
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')