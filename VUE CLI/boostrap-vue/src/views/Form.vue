<template>
  <div class="mt-5">
    <h1>Formularios</h1>

    <form>
      <b-row>
        <b-col md="6">
          <b-form-input type="text" v-model="texto" :state="comprobar"></b-form-input>
          <small>Minimo 3 caracteres</small>
        </b-col>
      </b-row>
    </form>
    <p>texto: {{texto}}</p>
  </div>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      texto: "",
    };
  },
  computed: {
      comprobar(){
          return this.texto.length > 2 ? true : false
      }
  }
};
</script>

<style scoped>
</style>