// Attraverso l’apposita API di Boolean

// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// dichiaro la variabile collegata a "container" in cui mettere le mail 
const listaEmail = document.getElementById("container");

// ciclo for per generare le mail

for (let i = 0; i < 10; i++) {
    // get per formire l'apposita API
    axios.get( "https://flynn.boolean.careers/exercises/api/random/mail" )

// funzione per aggiungere le mail ad html
    .then(response => {
// dichiaro una variabile che conterrà le mail generate dall API
        const email = response.data.response;
// richiamo la variabile per aggiungere definitivamente le mail all html 
        listaEmail.innerHTML +=  `<li>${email}</li>`;
    })
}