<script setup>
import { ref } from "vue";
import emailjs from "emailjs-com"

const name = ref("");
const email = ref("");
const phone = ref ("");
const message = ref ("");

//State bouton
const disabledButton = ref(true);

/** 
*@param {string} content - message à afficher en cas d'erreur
*@param {boolean} state - Etat du message (Afficher ou non)
*/

function viewError(content, state) {
    if (state && !content) throw Error("Le message d'erreur ne peut être vide !");

    const errorMessage = document.querySelector("#error_message");
    errorMessage.textContent = content;

    state
        ? (errorMessage.style.display = "block")
        : (errorMessage.style.display = "none");
}

function checkForms() {
    const button = document.querySelector("#submitButton");

    let content = "";

    if (!name.value) content += "Vous devez indiquez votre nom !";
  else if (!email.value) content += "Vous devez indiquez votre email !";
  else if (!phone.value) content += "Vous devez indiquez votre numéro de téléphone !";
  else if (!message.value) content += "Vous devez indiquez votre message !";

  if (
    name.value &&
    email.value &&
    phone.value &&
    message.value
  ) {
    viewError(content, false)

    button.classList.remove("disabled");
    disabledButton.value = false;
  } else if (content) {
    button.classList.add("disabled");
    disabledButton.value = true;

    viewError(content, true);
  }
}

function sendMail() {
    const props = {
        to_email: import.meta.VITE_APP_CONTACT_EMAIL,
        from_name: name.value,
        from_email: email.value,
        message: message.value,
    };

emailjs
    .send(
        import.meta.env.VITE_APP_CONTACT_SERVICE_ID,
        import.meta.env.VITE_APP_CONTACT_TEMPLATE_ID,
        props,
        import.meta.env.VITE_APP_CONTACT_USER_ID
    )
    .then((response) => {
        console.log("Envoi effectué :", response);

        name.value = "";
        email.value = "";
        phone.value = "";
        message.value = "";
    })
    .catch((error) => {
        console.error("Erreur lors de l'envoi :", error);
    })
}
</script>

<template>
    <div class="globalContainer" id="contact_section">
        <div class="container">

                <h1 class="container--title"> Contactez-moi ! </h1>
                <p> Pour me contacter, il vous suffit de remplir le formulaire ci-dessous !</p>

            <div class="container--form">
                <form method="POST" id="form">
                    <div class="container--form--content">

                        <label for="name">Nom</label>
                        <input v-model="name" class="name" placeholder="Mr.Doe" @input="checkForms" required/>

                        <label for="email">Email</label>
                        <input v-model="email" class="email" placeholder="votre.email@gmail.com" @input="checkForms" required/>

                        <label for="phone">Numéro de téléphone</label>
                        <input v-model="phone" class="phone" placeholder="+33 6 59 59 59 59" @input="checkForms" required/>

                        <label for="message">Votre demande</label>
                        <textarea v-model="message" class="message" placeholder="Votre message ..." @input="checkForms" required></textarea>

                        <button @click="sendMail()" type="submit" :disabled="disabledButton" id="submitButton" class="disabled"> Envoyer </button>

                        <p id="error_message" style="display: none;">Un soucis est survenu !</p>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
</template>

<style scoped>

.globalContainer {
    display: flex;
    justify-content: center;
}

.container {
    display: flex;
    flex-flow: column;
    width: 50vh;
    height:65vh;
    background-color: rgba(57,90,145,0.5);
    padding: 2vh 5vh;
    border-radius: 5vh;
}

.container--title {
    display: flex;
    justify-content: center;
    color: white;
    font-family: "Anta-Regular", sans-serif;
    margin-bottom: 2vh;
}

.container p {
    color: white;
    font-family: "OpenSans-Regular", sans-serif;
    text-align: center;
}

.container--form {
    margin: 4vh;
}

.container--form--content {
    margin: 4vh;
    margin-top: 0vh;
}

input {
    width: 25vh;
    height: 4vh;
    border: solid;
    border-width: 0.25vh;
    border-radius: 1vh;
    border-color: darkgray;
}

input:focus {
    outline: none;
    border-color: gray;
    border-width: 0.4vh;
}

textarea {
    width: 25vh;
    height: 8vh;
    border: solid;
    border-width: 0.25vh;
    border-radius: 1vh;
    border-color: darkgray;
}

textarea:focus {
    outline: none;
    border-color: gray;
    border-width: 0.4vh;
}

button {
    width: 25vh;
    height: 4vh;
    border: solid;
    border-width: 0.25vh;
    border-radius: 1vh;
    border-color: darkgray;
    background-color: rgba(57,90,145);
    color: white;
}

button:focus {
    outline: none;
    border-color: gray;
    border-width: 0.4vh;
}

label {
    font-family: "OpenSans-Regular", sans-serif;
    font-size: small;
}
</style>

