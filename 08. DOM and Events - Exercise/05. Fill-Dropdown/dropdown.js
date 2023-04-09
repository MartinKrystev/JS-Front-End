function addItem() {
    const select = document.getElementById('menu');
    const newItemTextInput = document.getElementById('newItemText');
    const newItemTextValueInput = document.getElementById('newItemValue');

    const newItemTextValue = newItemTextInput.value;
    const newItemValue = newItemTextValueInput.value;
    const option = document.createElement('option');

    option.textContent = newItemTextValue;
    option.value = newItemValue;
    select.appendChild(option);

    newItemTextInput.value = '';
    newItemTextValueInput.value = '';
}