// genero la griglia al click dell utente( con 10 caselle e 10 righe/colonne)


// inserisco numeri random da 1 a 100 all interno degli #square

// inserisco un bg color alle celle al click dell utente sulla casella
//  messaggio della cella appena cliccata dall utente con descrizione







//  funzione chiamata generateGrid() per generare la griglia al click dell'utente
function generateGrid() {
    // Seleziona l'elemento  con id "grid" 
    const gridElement = document.querySelector("#grid");

    // Itera attraverso un ciclo for che si ripete 100 volte
    for (let i = 0; i < 100; i++) {
        // Crea un nuovo elemento div
        const newElement = document.createElement("div");
        
        // Aggiunge la classe "square" al div appena creato
        newElement.classList.add("square");
        
        // Aggiunge il div appena creato come figlio di #grid
        gridElement.appendChild(newElement);
    }
}

//  event listener al pulsante #start che chiama la funzione generateGrid() quando viene cliccato
document.getElementById("start").addEventListener("click", generateGrid);
