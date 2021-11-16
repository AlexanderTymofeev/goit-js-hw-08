import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea'),
    input: document.querySelector('.feedback-form input'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

populateTextarea();

    refs.form.addEventListener('input', evt => {
 
    formData[evt.target.name] = evt.target.value;
    
})

function onFormSubmit(evt) {

    evt.preventDefault();

    console.log(formData);
    
    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_KEY);
}

function onTextareaInput(evt) {

    formData[evt.target.name] = evt.target.value;
    
    const saveDataEl = JSON.stringify(formData);
    
    localStorage.setItem(STORAGE_KEY, saveDataEl);
    
}

function populateTextarea() {

    const savedMessage = localStorage.getItem(STORAGE_KEY);
    
    if (savedMessage) {
      
        const pasrsedSav = JSON.parse(savedMessage);
        
        let formData = {};
        
        console.log(pasrsedSav);
        
        formData = pasrsedSav;
        
        refs.textarea.value = pasrsedSav.message;
        
    refs.input.value = pasrsedSav.email;
    }
}






