let formData = { email: '', message: '' };
const localStorageKey = "feedback-form-state";

const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
    const userEmail = form.elements.email.value.trim();
    const userMessage = form.elements.message.value.trim();

    formData.email = userEmail;
    formData.message = userMessage;

    localStorage.setItem(localStorageKey, JSON.stringify(formData));
})

function populateText() {
    const savedFormData = JSON.parse(localStorage.getItem(localStorageKey));

    if (!savedFormData) {
        return;
    }

    form.elements.email.value = savedFormData.email || '';
    form.elements.message.value = savedFormData.message || '';
}

populateText()

form.addEventListener('submit', evt => {
    evt.preventDefault();
    const emailInput = form.elements.email.value;
    const messageInput = form.elements.message.value;

    if (emailInput === '' || messageInput === '') {
        alert('Fill please all fields');
    } else {
        console.log(JSON.parse(localStorage.getItem(localStorageKey)));
        localStorage.removeItem(localStorageKey);
        form.reset();
    }

    console.log(formData);
})

