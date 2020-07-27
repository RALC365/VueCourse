<template>
  <div>
    <h1>Galería de Fotos</h1>
    <!--El router link enruta al lugar donde esta alojado-->
    <router-link :to="{ name: 'fotos', params: {id : item}}" 
        v-for="(item, index) of fotoArreglo" :key="index">
      <button>Foto {{item}}</button>
    </router-link>

    <Fotografia />

    <button @click="home">Home</button>
    <button @click="anterior">Anterior</button>
    <button @click="siguiente">Siguiente</button>

  </div>
</template>

<script>
import Fotografia from "@/components/Fotografia.vue";
export default {
  name: "Fotos",
  components: {
    Fotografia,
  },
  data() {
    return {
      fotoArreglo: [1, 2, 3],
    };
  },
  methods:{
      home(){
          //Enruta a cualquier ruta
          this.$router.push('/');
      },
      anterior(){
          //Historial para atrás
          this.$router.go(-1);
      },
      siguiente(){
          //Historial para adelante
          this.$router.go(1);
      }
  }
};
</script>

<style scoped>
</style>