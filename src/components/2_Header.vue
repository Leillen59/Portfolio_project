<template>
    <div class="logo_container">
        <img src="../assets/Img/logo.png" alt="Logo Gweb">
    </div>
    <section class="header_section">
        <h1 class="header_section--name">
            GALOPIN Guillaume - G.Web
        </h1>
        <p class="header_section--status">
            Développeur Web Junior
        </p>
    </section>
</template>

<style scoped>
.logo_container {
    display: flex;
    justify-content: center;
    margin-top: 10vh;
}

.header_section {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 25vh;
}

h1 , p {
    font-family: "Anta-Regular", sans-serif;
}
</style>
