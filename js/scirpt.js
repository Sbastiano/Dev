const addToDo = () => {
    const inputToDo = document.getElementById('addToDo').value;
    const toDo = document.getElementById('toDo');

    // Crea un nuovo elemento To-Do
    const newToDo = document.createElement('div');
    const deleteNewToDo = document.createElement('button');

    // Imposta il testo per il To-Do e il pulsante
    newToDo.textContent = inputToDo;
    deleteNewToDo.textContent = 'Elimina To-Do';
    
    newToDo.classList.add("nw");


    // Aggiungi entrambi al contenitore To-Do
    toDo.append(newToDo, deleteNewToDo);

    // Aggiungi un event listener per eliminare il To-Do
    deleteNewToDo.onclick = () => deleteToDo(newToDo, deleteNewToDo);

    // Aggiungi un event listener per contrassegnare il To-Do come completato
    newToDo.onclick = () => {
        newToDo.classList.toggle('completed');
    };
};

const deleteToDo = (todo, button) => {
    // Rimuove sia il To-Do che il pulsante
    todo.remove();
    button.remove();
};

// Collega il pulsante "Salva To-Do" alla funzione addToDo
document.getElementById("saveToDo").onclick = addToDo;