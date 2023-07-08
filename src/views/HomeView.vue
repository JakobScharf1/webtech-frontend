<script>
  import DynamicForm from "../components/DynamicForm.vue";
  import DarkMode from "../components/DarkMode.vue";

  export default {
    name: 'HomeView',
    components: {DarkMode, DynamicForm},
  }
</script>

<template>
  <main>
    <DynamicForm />
  </main>
  <DarkMode />
</template>