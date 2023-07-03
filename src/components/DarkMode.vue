<template>
  <div @click="toggleDarkMode">
    <font-awesome-icon icon="fa-solid fa-moon" />  </div>
</template>

<script>
export default {
  name: "DarkMode",
  methods: {
    toggleDarkMode() {
      const appElement = document.querySelector("#app")
      appElement.classList.toggle("dark-mode");
    }
  }
}
</script>

<style scoped>
  div {
    cursor: pointer;
    height: 100px;
  }

</style>