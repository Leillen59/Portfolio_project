<script setup>
const props = defineProps([
  "title",
  "information",
  "language",
  "img",
  "date",
  "gitHub",
]);
</script>

<template>
  <div class="modalBloc">
    <div class="overlay" v-on:click="$emit('closeModal')"></div>

      <div class="modal">

        <div v-on:click="$emit('closeModal')" class="modalButton"> X </div>

        <h2 class="modal_title">{{ title }}</h2>

        
        <div class="modal_content">
          <img :src="img" alt="Miniature du projet" class="imageProject" />

          <p class="description">{{ information }}</p>
        </div>
        <p class="date">Réalisé le {{ date }}</p>
        <div class="moreContent">          
          <div class="github">
            <p class="github_link">Découvrez l'envers du décor</p>
            <a v-bind:href="gitHub" 
            target="_blank" 
            class="github-button"> GitHub </a>
          </div>
          <div class="lang_container">
            <p>Langages utilisés : 
              <div class="lang_container_content"> {{ language }} </div>
            </p>
        </div>
        </div>
      </div>
  </div>
</template>

<style scoped>

.modalBloc {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.modal {
  background: rgba(57,90,145);
  color: #333;
  padding: 1vh 2.5vh;
  position: absolute;
  width: 80vh;
  height: 50vh;
  margin: 10vh;
  border-radius: 2.5vh;
}

.modal_title {
  display: flex;
  justify-content: center;
  font-family: "Anta-Regular", sans-serif;
  color: white;
}

.modal_content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25vh;
  color: white;
}

.imageProject {
  display: flex;
  max-width: 25vh;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  margin-bottom: 2vh;
  margin-top: 4vh;
}

.description {
  display: flex;
  font-family: "OpenSans-Regular", sans-serif;
  font-weight: bold;
  text-align: center;
  margin: 1vh;
}

.date {
  display: flex;
  justify-content: start;
  text-decoration: underline;
  font-family: "OpenSans-Regular", sans-serif;
  font-weight: bold;
  color: white;
  margin-top: 2vh;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  height: 100%;
  width: 100%;
}

.moreContent {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  margin-top: 2vh;
}

.lang_container {
  display: flex;
  flex-flow: column;
  align-items: end;
  font-family: "Anta-Regular", sans-serif;
}

.lang_container_content {
  display: flex;
  justify-content: center;
  border: dashed;
  border-width: 0.1vh;
  background-color: #B1C9EF;
  border-radius: 2vh;
  font-size: 1.5vh;
  padding: 0.5vh;
}

.github {
  display: flex;
  justify-content: start;
  align-items: center;
  flex-flow: column;
}

.github_link {
  font-family: "OpenSans-Regular", sans-serif;
  margin-bottom: 1vh;
}

.github-button {
  background-color: #B1C9EF;
  width: 15vh;
  border: none;
  border-radius: 25px;
  text-decoration: none;
  display: flex;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  justify-content: center;
  font-family: "Anta-Regular", sans-serif;
  color: black;
}

.github-button:hover {
  background-color: #8AAEE0;
}

.modalButton {
  display: flex;
  position: sticky;
  justify-content: end;
  padding: 0;
  margin-right: 1vh;
  font-family: "Anta-Regular", sans-serif;
  font-size: large;
  font-weight: bold;
  cursor: pointer;
}

.modalButton:hover {
  color: rgba(0, 0, 0, 0.5);
}
</style>
