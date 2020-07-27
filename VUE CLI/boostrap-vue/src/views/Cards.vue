<template>
  <div class="mt-5">
    <b-button variant="success">Texto</b-button>
    <b-button variant="info">Texto</b-button>
    <b-button variant="danger">Texto</b-button>
    <b-button variant="primary">Texto</b-button>
    <b-button variant="warning">Texto</b-button>
    <b-button variant="dark">Texto</b-button>

    <b-row class="mt-5">
      <b-col cols="12" md="4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita, mollitia quisquam sunt deserunt sit assumenda, aliquid deleniti ab necessitatibus odio facere. Beatae ab accusamus maiores distinctio neque, vero iste.</p>
          <b-button variant="dark" href="#">Texto</b-button>

        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita, mollitia quisquam sunt deserunt sit assumenda, aliquid deleniti ab necessitatibus odio facere. Beatae ab accusamus maiores distinctio neque, vero iste.</p>
          <b-button variant="dark" href="#">Texto</b-button>
          
        </b-card>
      </b-col>

      <b-col cols="12" md="4">
        <b-card
          title="Card Title"
          img-src="https://picsum.photos/600/300/?image=25"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi expedita, mollitia quisquam sunt deserunt sit assumenda, aliquid deleniti ab necessitatibus odio facere. Beatae ab accusamus maiores distinctio neque, vero iste.</p>
          <b-button variant="dark" href="#">Texto</b-button>
          
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style scoped>
</style>