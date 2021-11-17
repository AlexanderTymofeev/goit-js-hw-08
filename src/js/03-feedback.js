import throttle from 'lodash.throttle';

    
    
const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};
    
const STORAGE_KEY = 'feedback-form-state';
    
let formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


function onFormSubmit(evt) {

    evt.preventDefault();

    console.log(`${refs.input.name}:`, refs.input.value);
    console.log(`${refs.textarea.name}:`, refs.textarea.value);
    
    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {

    formData[refs.textarea.name] = refs.textarea.value;
    
    formData[refs.input.name] = refs.input.value;
    
    const saveDataEl = JSON.stringify(formData);
    
    localStorage.setItem(STORAGE_KEY, saveDataEl);
    
}

const savedMessage = localStorage.getItem(STORAGE_KEY);
const pasrsedSav = JSON.parse(savedMessage);

function populateTextarea() {

    if (savedMessage) {
      
        const keys = Object.keys(pasrsedSav);
        
        for (const key of keys) {
        
            refs.form.elements[key].value = pasrsedSav[key];
            
    }
  }
}

populateTextarea();