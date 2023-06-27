
<!--<script setup>
import DynamicForm from '../components/DynamicForm.vue';
</script>-->

<script>
  import DynamicForm from "../components/DynamicForm.vue";

  export default {
    name: 'HomeView',
    components: {DynamicForm},
  }
</script>

<template>
  <main>
    <DynamicForm />
  </main>
</template>