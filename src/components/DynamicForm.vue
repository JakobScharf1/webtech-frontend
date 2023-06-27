<script setup>
/* eslint-disable */
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
      objects: [],
      nameField: '',
      amountField: '',
    };
  },

  mounted() {
    this.loadInventoryObjects();
  },

  methods: {

    async loadInventoryObjects() {
      try {
        const response = await fetch('http://localhost:8080/inventoryObject');
        if (!response.ok) {
          throw new Error('Fehler beim Laden der Daten.');
        }
        this.objects = await response.json();
      } catch (error) {
        console.error(error);
      }
    },

    /*
    loadInventoryObjects() {
      const endpoint = 'http://localhost:8080/inventoryObject';
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(result => result.forEach(inventoryObject => {
            this.objects.push(inventoryObject);
          }))
          .catch(error => console.log('error', error));
    },*/


    async save() {
      try {
        const data = {
          name: this.nameField,
          amount: this.amountField,
        };
        const response = await fetch('http://localhost:8080/inventoryObject', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        if (!response.ok) {
          throw new Error('Fehler beim Speichern der Daten.');
        }
        this.nameField = '';
        this.amountField = '';
        await this.loadInventoryObjects();
      } catch (error) {
        console.error(error);
      }
    },

    getInventoryObject() {
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
/*
    createInventoryObject() {
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
*/
    updateInventoryObject() {
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

    deleteInventoryObject() {
      const endpoint = 'http://localhost:8080/inventoryObject/{id}'
      const requestOptions = {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
      }

      fetch(endpoint, requestOptions)
          .then(response => response.json())
          .then(data => console.log('Success', data))
          .catch(error => console.log('error', error))
    },
  },

}
</script>

<template>
  <div class="search">
    <input id="nameField" class="form-control" v-model="nameField" placeholder="Name" type="text" ref="nameInput">
    <input id="amountField" class="form-control" v-model="amountField" placeholder="Anzahl" type="number" ref="amountInput" @keyup.enter="save()">
    <button id="searchButton" class="btn btn-primary" type="button" @click="save()">Speichern</button>
    <button id="loadButton" class="btn btn-primary" type="button" @click="loadInventoryObjects()">Laden</button>
  </div>
  <div>
    <table>
      <thead>
      <tr class="tableBorder">
        <th id="nameCol"><b>Name</b></th>
        <th id="amountCol"><b>Anzahl</b></th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="objects.length === 0">
        <td colspan="2">Noch keine Datensätze vorhanden.</td>
      </tr>
      <tr v-for="object in objects" :key="object.id">
        <td>{{object.name}}</td>
        <td>{{object.amount}}</td>
      </tr>
      <!--<tr>
        <td>{{nameField}}</td>
        <td>{{amountField}}</td>
        <td>
          <button id="searchButton" class="btn btn-primary" type="button">Hallo</button>
        </td>
      </tr>-->
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

.tableBorder{
  border: thin darkgray;
}
</style>
