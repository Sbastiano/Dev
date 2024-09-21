const addItem = () => {
    const inputItem = document.getElementById('addItem').value;
    const shoppingList = document.getElementById('shoppingList');
    document.getElementById('addItem').value = '';

    if (inputItem.trim() === "") {
        alert("Inserisci un elemento valido!");
        return;
    }

const listItem = document.createElement('li');
const deleteBtn = document.createElement('button');

listItem.textContent = inputItem;
deleteBtn.textContent = 'Elimina';

listItem.append (deleteBtn);
shoppingList.append(listItem);

deleteBtn.onclick = () => listItem.remove();

listItem.onclick = () => {
    listItem.classList.toggle('completed');
}

}
document.getElementById("saveItem").onclick = addItem;