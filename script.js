/*
Utils

generare numeri random da un numero min a un numero max: mathFloor(mathRandom()* (max-min + 1) + min)

ciclo for "generico": for(let i=0; i<max; i++){}

ciclo for per ogni array: for(let i=0; i<array.lenght;i++) {console.log(array[i])} - stampi tutti elementi ad ogni ciclo in console.
 


Consegna (traccia generica):
Creato un array contenente una lista di cinque immagini tra quelle fornite, creare un carosello ispirandoci alle foto in allegato.
(non è necessario che la grafica sia IDENTICA alla traccia, non bloccatevi su questo, date un aspetto decente e concentriamoci sulla logica.
Cerchiamo di lavorare seguendo i seguenti step in ordine:

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.
MILESTONE 3
Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente.
BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.
BONUS 2:
Creiamo delle miniature di tutte le immagini, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un semplice bordo.
*/

console.log("js ok")

/*Assegno il target dove stamperò l'immagine */

const imagesTarget = document.getElementById("imagesTarget")

/*Creo la variabile globale che corrisponderà all'indice. Avendo chiamato le immagini con criterio
in fase di stampa alle immagini sostituirò solo l'indice. Parto da 1.  */
let indexImg = 1

/*Stampo la foto numero uno */

imagesTarget.innerHTML = (`<img src="img/${indexImg}.jpg">`)

/* Targettizzo i bottoni */

const buttonLeft = document.getElementById("buttonLeft")
const buttonRight = document.getElementById("buttonRight")

/* Ascolto al click. IndexImg è stata dichiarata come globale per tanto può essere
richiamata nel "pseudo-ciclo for". Praticamente ho detto al bottone di incrementare di uno,
la variabile IndexImg, ad ogni click. Questo è stato possibile con la linea di codice indexImg++
(può essere scritto anche come indexImg += ).
Ovviamente, per tornare indietro col bottone buttonLeft, il ragionamento è lo stesso ma al contrario.

-condizioni
in buttonRight, se l'immagine è quella con l'indexImg 10, allora il giro riparte da 1 */

buttonRight.addEventListener("click",function(){

    if (indexImg === 10) {
        indexImg = 1}

        else indexImg++;
    
        imagesTarget.innerHTML = (`<img src="img/${indexImg}.jpg">`)
    
})

/*-

condizioni
in buttonRight, se l'immagine è quella con l'indexImg 1, allora il giro riparte da 10 */ 

buttonLeft.addEventListener("click",function(){

    if (indexImg === 1) {
        indexImg = 10}

        else indexImg--;
        
        imagesTarget.innerHTML = (`<img src="img/${indexImg}.jpg">`)
    
})


    




