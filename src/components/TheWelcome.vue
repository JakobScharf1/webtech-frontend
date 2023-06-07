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

<template>
  <div class="search">
    <input id="nameField" class="form-control" v-model="nameField" placeholder="Name" type="text" ref="nameInput" @keyup.enter="search()">
    <button id="searchButton" class="btn btn-primary" type="button" @click="search()">Suchen</button>
    <input id="filterField" class="form-control" v-model="filterCrit" placeholder="Filter">
  </div>

</template>

<style>

#nameField{
  margin-right: 10px;
}

#searchButton{
  margin-right: 10px;
}

#filterField{

}
 .search{
    width: 500px;
    margin: 25px;
    text-align:center;
    display:flex;
  }
</style>
