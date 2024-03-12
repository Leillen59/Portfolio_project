<template>
    <div id="about_section"></div>
    <section class="about_section--container">
        <div class="about_section--container--avatar">
            <img src="../assets/Img/avatar.gif" alt="Avatar marchant dans une forêt de bambou" >
        </div>
        <p class="about_section--container--content">
                Après plusieurs années dans le monde de la restauration, j'ai choisi d'effectuer une reconversion professionnelle en tant que "Développeur Web et Web Mobile" via le Centre Européen de Formation (CEF). Mes années dans la restauration m'ont apporté beaucoup de valeurs professionnelles que j'applique dans ce que j'entreprends.
        </p>
    </section>
</template>

<style scoped>
#about_section {
    display: flex;
    padding: 5vh;
}

.about_section--container{
    display: flex;
    flex-flow: row nowrap;
    border: solid;
    border-width: 0.5px;
    margin: 0vh 25vh;
    border-radius: 50px;
    border-color: white;
}

.about_section--container--avatar img{
    display: flex;
    width: 15vh;
    height: 15vh;
    margin: 2vh;
    border: none;
    border-radius: 50%;
}

.about_section--container--content {
   display: flex;
   align-items: center;
   font-family: "OpenSans-Regular", sans-serif;
}

</style>