<script setup>
  import { RouterLink, RouterView } from 'vue-router';
</script>
<script>
  export default {
    name: 'app',
    methods: {
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
      }
    },
    data() {
      return {
        darkMode: false
      };
    }
  }
</script>

<template>
  <div :class="{ 'dark-mode': darkMode }">
    <div class="darkmodeContainer" @click="toggleDarkMode">
      <img id="darkmodeIcon" src="../../public/thema.png" alt="Dark Mode Icon"/>
    </div>
    <img alt="inventory system logo" class="logo" src="@/assets/logo_big.png" />
  <!--
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
    -->
    <RouterView />
  </div>
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  width: 75px;
}

nav {
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: purple;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}

.dark-mode {
  background-color: #222222;
  color: #ffffff;
}

.darkmodeContainer {
  cursor: pointer;
  height: 25px;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 9999;
}

#darkmodeIcon {
  width: 25px;
}

</style>
