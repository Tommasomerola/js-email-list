// Attraverso l’apposita API di Boolean

// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

// dichiaro la variabile in cui mettere le mail 
const listaEmail = document.getElementById("container");

// ciclo for per generare le mail
for (let i = 0; i < 10; i++) {
    // get per formire l'apposita API
    axios.get( "https://flynn.boolean.careers/exercises/api/random/mail" )
    
}