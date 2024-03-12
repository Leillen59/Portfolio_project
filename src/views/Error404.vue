<template>
  <div class="errorcontainer">
    <img src="../assets/Img/error404.png" alt="emoticone triste">
    <h2>Oups, Erreur 404 ...</h2>
    <p>Page en phase de conception</p> 
  </div>
</template>

<style scoped>
.errorcontainer {
  display: flex;
  flex-flow: column nowrap;
  margin-top: 15vh;
  margin-bottom: 50vh;
  align-items: center;
}

h2, p {
  display: flex;
  justify-content: center;
  font-family: "Anta-Regular", sans-serif;
  font-size: xx-large;
  line-height: 10vh;
}

.errorcontainer img {
  width: 15vh;
  display: flex;
}

</style>
