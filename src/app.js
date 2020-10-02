const nameInput = document.querySelector('#input-name');
const timeInput = document.querySelector('#input-time');
const ingredientsInput = document.querySelector('#input-ingredients');
const descripInput = document.querySelector('#input-description');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const recipeList  = document.querySelector('#recipe-list');

const clear = () => {
    nameInput.value = ' ';
    timeInput.value = ' ';
    ingredientsInput.value = ' ';
    descripInput.value = ' ';

}
const alertCtrl = document.createElement('ion-alert');

confirmBtn.addEventListener('click', () => {
    console.log('It works!');
    const enteredName = nameInput.value;
    const enteredTime = timeInput.value;
    const enteredIngedients = ingredientsInput.value;
    const enteredDescription = descripInput.value;
    
    if (enteredName.trim().length <=0 || enteredTime <= 0 || enteredTime.trim().length <= 0) {
        alertCtrl.message = 'Please fill in all lines';
        alertCtrl.header = 'Invalid inputs';
        alertCtrl.buttons = ['Okay'];
        document.body.appendChild(alertCtrl);
        return alertCtrl.present();
        
    }
    console.log(enteredName, enteredTime);
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredName + ': ' + enteredTime + ' min';
    recipeList.appendChild(newItem);
    clear();
});

cancelBtn.addEventListener('click', clear);