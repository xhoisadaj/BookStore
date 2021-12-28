console.log('Website is loaded....');

const authorEventForm = document.querySelector('form');
const authorEventInput = document.querySelector('input');
const authorEventId = document.querySelector('#author-event-id');
const authorEventName = document.querySelector('#author-event-name');
const authorEventTitle = document.querySelector('#author-event-title');
const authorEventNrPeople = document.querySelector('#author-event-nr-people');
const authorEventPlace = document.querySelector('#author-event-place');




authorEventForm.addEventListener('submit', (event) => {
    event.preventDefault();

    authorEventId.textContent = 'Loading data...';

    fetch(`/author/${authorEventInput.value}/events`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                response.send({ status: 500, message: `Server error`});
                console.log(data.error);
            } else {

                for (const prop in  data.author_events) {
                    authorEventId.textContent=data.author_events[prop].id
                    authorEventName.textContent=data.author_events[prop].name
                    authorEventTitle.textContent=data.author_events[prop].title
                    authorEventNrPeople.textContent=data.author_events[prop].nr_people
                    authorEventPlace.textContent=data.author_events[prop].place
                }
            }
        });
    });
});
