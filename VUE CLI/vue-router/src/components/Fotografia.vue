<template>
  <div>
      <!--Para capturar la ruta, la variable la pusimos en el router-->
    <h1>Foto desde componente: {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  name: "Foto",
};
</script>

<style scoped>
</style>