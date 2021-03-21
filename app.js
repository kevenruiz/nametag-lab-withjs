
const nameInput = document.getElementById('name-input');
const changeButton = document.getElementById('name-change-button');
const nameDisplay = document.getElementById('name-display');



changeButton.addEventListener('click', () => {
    console.log('button clicked!');
    // post-click logic goes here!
});

changeButton.addEventListener('click', () => {
    console.log('value is', nameInput.value);
   
});

changeButton.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
   
});
