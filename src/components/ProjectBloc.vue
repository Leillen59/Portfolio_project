<script setup>
import { ref } from "vue";
import Modale from './Modale.vue'

defineProps(["title","information", "language", "img", "date", "gitHub"])

const revele = ref(false);

function openModal() {
  revele.value = true;
}

function closeModal() {
  revele.value = false;
}
</script>

<template>
    <div class="container">
      <div class="content" v-on:click="openModal">
        <h3>{{ title }}</h3>
        <img :src="img">
      </div>
      <Modale
        v-if="revele"
        :title="title"
        :information="information"
        :language="language"
        :img="img"
        :date="date"
        :gitHub="gitHub"
        v-on:closeModal="closeModal"
      />
    </div>
  </template>

<style scoped>

.content {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 50vh;
  background-color: rgba(57,90,145,0.5);
  border-radius: 2vh;
  cursor: pointer;
}

.content:hover {
  box-shadow: 10px 10px 5px gray;
}

.content h3 {
  text-align: center;
  margin-top: 1vh;
  font-family: "Anta-Regular", sans-serif;
  color: white;
}

.content img {
  display: flex;
  height: 25vh;
  margin: 1vh;
  cursor: pointer;
  border-radius: 2vh;
}
</style>