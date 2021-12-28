console.log('Website is loaded....');

const authorBookForm = document.querySelector('form');
const authorBookInput = document.querySelector('input');
const authorBookId = document.querySelector('#author-book-id');
const authorBookName = document.querySelector('#author-book-name');
const authorBookTitle = document.querySelector('#author-book-title');
const authorBookNrPages = document.querySelector('#author-book-nr-pages');
const authorBookGenre = document.querySelector('#author-book-genre');


authorBookForm.addEventListener('submit', (event) => {
    event.preventDefault();

    authorBookId.textContent = 'Loading data...';

    fetch(`/author/${authorBookInput.value}/books`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                response.send({ status: 500, message: `Server error`});
                console.log(data.error);
            } else {

                for (const prop in  data.author_books) {
                    authorBookId.textContent=data.author_books[prop].id
                    authorBookName.textContent=data.author_books[prop].name
                    authorBookTitle.textContent=data.author_books[prop].title
                    authorBookGenre.textContent=data.author_books[prop].genre
                    authorBookNrPages.textContent=data.author_books[prop].nr_pages
                }
            }
        });
    });
});
