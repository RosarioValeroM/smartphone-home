/*Para poder tener una idea de como estructurarlo me he basado más o menos en esta pagina aunque algunas funciones son similares
https://medium.com/@nitinpatel_20236/challenge-of-building-a-calendar-with-pure-javascript-a86f1303267d*/

/*Calendar */
const date = new Date();
const actual_days = {
    'date': date.getDate(),
    'month': date.getMonth(),
    'year': date.getFullYear()
};

let actual_month = document.getElementsByClassName('actual-month')[0];
let days_Div = document.getElementsByClassName('days')[0];

// See the next and the previous month
const next_month = document.getElementById('next_month');
const previous_month = document.getElementById('prev_month');

next_month.addEventListener('click', () => {
    draw_Calendar(1);
});

previous_month.addEventListener('click', () => {
    draw_Calendar(-1);
});


// Draw the calendar
const draw_Calendar = (change_month = null) => {
    let month;
    let year;

    if (change_month) date.setMonth(date.getMonth() + change_month);

    month = getMonth(date.getMonth());
    year = date.getFullYear();

    last_Day = last_DayMonth(date);
    first_day = first_dayMonth(date);

    actual_month.innerHTML = `<b>${month} ${year}</b>`;

    days_Div.innerHTML = '';

    num_day = 1;
    last_Day += first_day;
    i = 0;
    while (i < last_Day) {
        //If this conditions are true it paint the days in the html
        if (i < first_day) {
            days_Div.innerHTML += `
                <div class="day">
                    <span></span>
                </div>
            `;
        } else {
            days_Div.innerHTML += `
                <div class="day ${(num_day === actual_days.date && date.getMonth() === actual_days.month && date.getFullYear() === actual_days.year) ? 'actual-day' : ''}">
                    <span>${num_day}</span>
                </div>
            `;
            num_day++;
        }
        i++;
    }

};

//First and Last day of the select month
const last_DayMonth = (date) => {
    const last_day = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return last_day.getDate();
};

const first_dayMonth = (date) => {
    const first_day = new Date(date.getFullYear(), date.getMonth(), 1);
    return first_day.getDay();
};

// All the months
const getMonth = (month_num) => {
    switch (month_num) {
        case 0:
            return "January";
            break;
        case 1:
            return "February";
            break;
        case 2:
            return "March";
            break;
        case 3:
            return "April";
            break;
        case 4:
            return "May";
            break;
        case 5:
            return "June";
            break;
        case 6:
            return "July";
            break;
        case 7:
            return "August";
            break;
        case 8:
            return "September";
            break;
        case 9:
            return "October";
            break;
        case 10:
            return "November";
            break;
        case 11:
            return "December";
            break;
        default:
            break;
    }
};

draw_Calendar();



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
// Options to delete the select message
const delete_button_message = document.querySelectorAll(".message-content .btn-container .delete-message");
delete_button_message.forEach(x => {
    x.addEventListener('click', () => {
        delete_message(x);
    });
});

//Remove the message
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
