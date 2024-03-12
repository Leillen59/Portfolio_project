<script setup>
import data from "../assets/data/data.json";
import ProjectBloc from "../components/ProjectBloc.vue";
</script>

<template>
  <div id="project_section"></div>
  <h1>Mes projets</h1>
  <body class="projects">
    <div v-for="(project) in data">
      <projectBloc
        :title="project.title"
        :information="project.information"
        :language="project.language"
        :img="project.img"
        :date="project.date"
        :gitHub="project.gitHub"
      />
    </div>
  </body>
</template>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  margin-top: 7vh;
  margin-bottom: 5vh;
  font-family: "Anta-Regular", sans-serif;
}

.projects {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  margin: 2vh;
}
</style>