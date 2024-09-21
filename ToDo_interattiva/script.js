// Seleziona gli elementi dall'HTML
const addTaskBtn = document.getElementById('add-task');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Funzione per aggiungere un nuovo compito
function addTask() {
    const taskText = newTaskInput.value;

    if (taskText === "") {
        alert("Inserisci un compito valido!");
        return;
    }

    // Crea il nuovo elemento della lista
    const newTask = document.createElement('li');
    newTask.textContent = taskText;

    // Crea il pulsante di rimozione
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.onclick = function () {
        taskList.removeChild(newTask);
    };

    // Aggiungi il pulsante al compito
    newTask.appendChild(deleteBtn);

    // Aggiungi la possibilità di contrassegnare il compito come completato
    newTask.onclick = function () {
        newTask.classList.toggle('completed');
    };

    // Aggiungi il nuovo compito alla lista
    taskList.appendChild(newTask);

    // Pulisci l'input
    newTaskInput.value = "";
}

// Assegna l'evento click al pulsante "Aggiungi"
addTaskBtn.addEventListener('click', addTask);

// Permetti di aggiungere il compito premendo "Invio"
newTaskInput.addEventListener('keypress', function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
