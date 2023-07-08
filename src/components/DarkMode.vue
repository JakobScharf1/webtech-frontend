<template>

</template>

<script>
export default {
  name: "DarkMode",
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

<style scoped>
  div {
    cursor: pointer;
    height: 25px;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 9999;
  }
  #darkmode {
    width: 25px;
  }

</style>