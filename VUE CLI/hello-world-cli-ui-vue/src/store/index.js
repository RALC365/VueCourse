import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre: 'Manzama', cantidad: 10},
      {nombre: 'Peru', cantidad: 0},
      {nombre: 'Fresa', cantidad: 40}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad++;
    },
    reiniciar(state){

      /*for (fruta of state.frutas) {
        fruta.cantidad = 0;
      }*/

      state.frutas.forEach(elemento => {
        elemento.cantidad = 0;
      })
    }
  },
  actions: {
  },
  modules: {
  }
})
