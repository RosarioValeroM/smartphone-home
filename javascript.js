

/*Desplegable*/
var messages = document.getElementsByClassName('messages');
var messages_array = [...messages];

var button = [];
messages_array.forEach(e => {
    if (e.children[4]) button.push(e.children[4]);
});

button.forEach(x => {
    x.addEventListener('click', () => {
        open_message(x);
    });
});

const delete_button_message = document.querySelectorAll(".message-content .btn-container .delete-message");
delete_button_message.forEach(x => {
    x.addEventListener('click', () => {
        delete_message(x);
    });
});

const delete_message = x => {

    x.parentElement.parentElement.previousElementSibling.remove();
    x.closest("div.message-content").remove(); 
}

const open_message = x => {
    message = x.closest("div");

    if (x.classList.contains('open')){
        x.classList.remove('open');

        if (message.nextElementSibling.classList.contains('message-content')){
            message.nextElementSibling.style = "display:none";
        }
    } else {
        x.classList.add('open');

        if (message.nextElementSibling.classList.contains('message-content')){
            message.nextElementSibling.style = "display:block";
        }
    }
}