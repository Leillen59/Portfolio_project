<template>
    <footer>
        <p class="creatorName">Site réalisé par G.web</p>
        <p id="lastMod">Mis à jour le 11/03/2024</p>
        <ul class="socialNetwork">
            <li class="socialNetwork_links">
                <a href="https://github.com/Leillen59"><img src="../assets/Img/Github.png"></a>
            </li>
            <li class="socialNetwork_links">
                <a href="https://twitter.com/Progalopin"><img src="../assets/Img/X.png"></a>
            </li>
            <li class="socialNetwork_links">
                <a href="https://www.linkedin.com/in/guillaume-galopin-244b152a3/"><img src="../assets/Img/Linkedin.png"></a>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
footer {
    background: linear-gradient(360deg, rgba(64,189,218,0.5) 0%, rgba(175,222,246,1) 100%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5vh;
}

.creatorName, #lastMod {
    margin-left: 5vh;
    font-family: "Anta-Regular";
}

.socialNetwork {
    display: flex;
    margin-right: 5vh;
    list-style: none;
    align-items: baseline;
}

.socialNetwork_links {
    display: flex;
    padding-left: 2vh;
    padding-top: 2vh;
    padding-bottom: 1vh;
}

img {
    max-width: 3vh;
}
</style>