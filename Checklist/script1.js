//another knowledge how to use function
document.getElementById('addButton').addEventListener('click', function() {
    //another shortcut
    const itemInput = document.getElementById('itemInput');
    const timeInput = document.getElementById('timeInput');
    //shortcut to shortcut
    const itemText = itemInput.value.trim();
    const itemTime = timeInput.value;

    if (itemText !== '') {
        const checklist = document.getElementById('checklist');

        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" />
            <label>${itemText} - ${itemTime}</label>
            <button class="removeButton">X</button>
        `;

        checklist.appendChild(listItem);
        itemInput.value = '';
        timeInput.value = ''; // Clear the time input

        // Add event listener for the remove button
        const removeButton = listItem.querySelector('.removeButton');
        removeButton.addEventListener('click', function() {
            checklist.removeChild(listItem);
        });
    }
});
