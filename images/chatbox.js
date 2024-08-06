// script.js
document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    
    chatForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const question = document.getElementById('question').value.trim();

        if (name && email && question) {
            // Burada bilgileri işleyebilir veya bir API'ye gönderebilirsiniz
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Question:', question);

            // Formu temizle
            chatForm.reset();
        }
    });
});
