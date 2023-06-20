
<script setup>
import DynamicForm from '../components/DynamicForm.vue';
</script>

<template>
  <main>
    <DynamicForm />
  </main>
</template>

<script>
  export default {
    name: 'HomeView',
    components: {DynamicForm},

    data: function () {
      return {
        claims: ''
      }
    },

    methods: {
      async setup () {},
    }
  }
</script>