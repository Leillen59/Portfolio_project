<script setup>
import { RouterView } from 'vue-router';
import  NavBar  from "./components/1_NavBar.vue";
import  Footer  from "./components/6_Footer.vue"
</script>

<template>
  <div>

    <NavBar />

    <RouterView/>

    <Footer/>

  </div>
</template>

<style scoped></style>