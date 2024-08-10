<script setup lang="ts">
import MainPage  from './components/pages/HomePage.vue'
import Navbar from './components/layout/Navbar.vue'
import Footer from './components/layout/Footer.vue'
import { UseAppStore } from './store/App';
import { storeToRefs } from 'pinia';
const store = UseAppStore()
const {showFooter } =storeToRefs(store)
</script>

<template>
<div class="relative ">
  <div class="fixed  z-50 w-full left-0 "><Navbar/></div>
<div  class="w-full flex justify-center items-center flex-col">
<div class="w-full ">  <router-view  /></div>
  <Footer  v-if="showFooter"/>
</div>
</div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

</style>
