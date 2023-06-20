<script setup>
/* eslint-disable */
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
/* eslint-enable */
</script>
<script>
export default {
  name: 'DynamicForm',
  props: ['title'],
  data () {
    return {
      items: [],
      nameField: '',
      amountField: '',
      claims: '',
      accessToken: '',
    };
  },
  methods: {
    loadInventoryObject() {
      const endpoint = 'http://localhost:8080/inventoryObject';
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(result => result.forEach(inventoryObject => {
            this.items.push(inventoryObject);
          }))
          .catch(error => console.log('error', error));
    },
    save () {
      const endpoint = 'http://localhost:8080/inventoryObject'
      const data = {
        name: this.nameField,
        amount: this.amountField
      }
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(data => {
            console.log('Success:', data)
          })
          .catch(error => console.log('error', error))
    },
    async created () {
      await this.setup()
      this.loadInventoryObject()
    },
    mounted () {
    },
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

<template>
  <div class="search">
    <input id="nameField" class="form-control" v-model="nameField" placeholder="Name" type="text" ref="nameInput">
    <input id="amountField" class="form-control" v-model="amountField" placeholder="Anzahl" type="number" ref="amountInput" @keyup.enter="save()">
    <button id="searchButton" class="btn btn-primary" type="button" @click="save()">Speichern</button>
  </div>
  <div>
    <table>
      <thead>
      <tr>
        <th id="nameCol">Name</th>
        <th id="amountCol">Anzahl</th>
      </tr>
      </thead>
      <tbody>
      <!--<tr v-if="items.length===0">
        <td colspan="2">Noch keine Datensätze vorhanden.</td>
      </tr>-->
      <tr v-for="item in items" :key="item.id">
        <td>{{item.name}}</td>
        <td>{{item.amount}}</td>
      </tr>
      <tr>
        <td>{{nameField}}</td>
        <td>{{amountField}}</td>
      </tr>
      </tbody>
    </table>
  </div>

</template>

<style>

#nameField{
  margin-right: 10px;
}

#amountField{
  margin-right: 10px;
}

#searchButton{
  margin-right: 10px;
}

.search{
  width: 500px;
  margin: 25px;
  text-align:center;
  display:flex;
}

#nameCol{
  width: 75%;
}

#amountCol{
  width: 25%;
}
</style>
