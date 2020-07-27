<template>
  <div id="app">
    <!--
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    -->
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-container>
        <!--Navbar responisve-->
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <!--Todo lo que este acá, va a estar oculto es dispositivos md
        lo importante es el ID, que esta relacionado con toggle-->
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" active-class="active" exact>Home</b-nav-item>
            <b-nav-item :to="{name: 'About'}" active-class="active">About</b-nav-item>
            <b-nav-item :to="{name: 'Grid'}" active-class="active">Grid</b-nav-item>
            <b-nav-item :to="{name: 'Cards'}" active-class="active">Cards</b-nav-item>

          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<!--
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
-->
