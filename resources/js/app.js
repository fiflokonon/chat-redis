import './bootstrap';
import Echo from "laravel-echo";

const message = document.getElementById('msg');
const submit = document.getElementById('submitButton');
const msgDiv = document.getElementById('message');

let e = new Echo({
    broadcaster: 'socket.io',
    host: 'http://localhost:6001'
});

submit.addEventListener('click', () => {
    console.log('click');
    axios.post('/chat', {
        message: message.value
    });
});

e.channel('laravel_database_chat').listen('SendMessage', (event) => {
    console.log(event);
    msgDiv.innerHTML += `
    <div class="message">
    ${event.message}
    </div>
<br>`;
});


