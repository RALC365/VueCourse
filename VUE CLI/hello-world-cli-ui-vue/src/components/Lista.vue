<template>
  <div id="lista">
    <ul class="list-group">
      <!--Siempre es recomendable agregar el :key,
      asi le decimos que vamos a trabajr con elementos únicos-->
      <li v-for="(item,index) of arrayOrdenado" :key="item.id" @click="aumentar(index)"
      class="list-group-item d-flex justify-content-between align-items-center">
        {{index}} - {{item.nombre}}
        <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
      </li>
    </ul>
    <button type="reset" class="btn btn-danger btn-block" @click="reiniciar">Reiniciar</button>
  </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';


export default {
  name: "Lista",
  computed: {
    ...mapState(['frutas']),
    arrayOrdenado(){
      return this.frutas.sort( (a,b) => b.cantiddad - a.cantiddad)
    }
  },
  methods: {
    ...mapMutations(['aumentar','reiniciar'])
    
  },
};
</script>
