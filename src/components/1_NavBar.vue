<template>
    <nav class="nav__content" id="topPage">
        <ul class="nav__content--links">
            <li class="nav__content--links_item">
                <a href="/">
                    <img src="../assets/Img/logo.png" alt="LogoGweb">
                </a>
            </li>
            <li class="nav__content--links_item">
                <a href="/">Accueil</a>
            </li>
            <li class="nav__content--links_item">
                <a href="#about_section">A propos</a>
            </li>
            <li class="nav__content--links_item">
                <a href="#project_section">Mes projets</a>
            </li>
            <li class="nav__content--links_item">
                <a href="#contact_section">Contactez-moi !</a>
            </li>
            <li class="nav__content--links_item">
                <a href="/Error"> Tarifs </a>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
.nav__content {
    display: flex;
    height: 10vh;
    background: linear-gradient(180deg, rgba(64,189,218,0.5) 0%, rgba(175,222,246,1) 100%);
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
}

.nav__content--links {
    display: flex;
    position: fixed;
    justify-content: space-evenly;
    align-items: center;
    background: linear-gradient(180deg, rgba(64,189,218,0.75) 0%, rgba(175,222,246,0.75) 100%);
    width: 100%;
}

.nav__content--links_item {
    display: flex;
    padding: 3vh 5vh ;
    font-family: "Anta-Regular", sans-serif;
    font-size: 1.75vh;
    color: white;
}

.nav__content--links_item a {
    text-decoration: none;
    color:white;
}

.nav__content--links_item a:hover {
    text-decoration: underline;
}

img {
    max-width: 5vh;
    max-height: 5vh;
}

img:hover {
    opacity: 0.75;
}
</style>