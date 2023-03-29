import {reactive} from 'vue';
export const store = reactive({
    yugiCards: [],
    //di cosa ho bisogno per chiamarmi i valori che l'utente cercherà nella barra di ricerca?
    //richiamare la api con una variabile
    APIcall: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0',
    //creare una variabile per la ricerca dell'utente in AppSearch 
    nomeCarta: "",
    //basta?
});