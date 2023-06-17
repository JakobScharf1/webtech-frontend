
<script setup>
import TheWelcome from '../components/DynamicForm.vue';
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script>
  export default {
    name: 'HomeView',

    data() {
      return {
        inventoryObjects: []
      }
    },

    methods: {

      getInventoryObject () {
        const endpoint = 'http://localhost:8080/inventoryObject/{id}'
        const requestOptions = {
          method: 'GET',
          redirect: 'follow'
        }

        fetch(endpoint, requestOptions)
            .then(response => response.json())
            .then(result => result.forEach(inventoryObject => this.inventoryObjects.push(inventoryObject)))
            .catch(error => console.log('error', error))
      },

      createInventoryObject () {
        const endpoint = 'http://localhost:8080/inventoryObject/{id}'
        const data = {
          inventoryObjects: this.getInventoryObject()
        }
        const requestOptions = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }

        fetch(endpoint, requestOptions)
            .then(response => response.json())
            .then(data => console.log('Success', data))
            .catch(error => console.log('error', error))
      },

      updateInventoryObject () {
        const endpoint = 'http://localhost:8080/inventoryObject/{id}'
        const data = {
          inventoryObjects: this.getInventoryObject()
        }
        const requestOptions = {
          method: 'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        }

        fetch(endpoint, requestOptions)
            .then(response => response.json())
            .then(data => console.log('Success', data))
            .catch(error => console.log('error', error))
      },

      deleteInventoryObject () {
        const endpoint = 'http://localhost:8080/inventoryObject/{id}'
        const requestOptions = {
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'},
        }

        fetch(endpoint, requestOptions)
            .then(response => response.json())
            .then(data => console.log('Success', data))
            .catch(error => console.log('error', error))
      }
    }
  }
</script>