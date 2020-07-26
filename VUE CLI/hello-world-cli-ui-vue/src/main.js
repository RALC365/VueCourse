import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false
//Instancia de Vue
new Vue({
  store,
  render: h => h(App) //renderiza toda nuestra aplicación
}).$mount('#app') //en nuestro div id="app" del html principal (prublic/index.html)
//Esta parte es la analoga de el: "#app" de las lecciones pasadas
