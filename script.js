class Library {
  constructor(books) {
    this.books = books;
  }
}

const savedData = localStorage.getItem('savedData');
const bookList = document.getElementById('bookList');

function add({ title, author, id }) {
  const li = document.createElement('li');
  const button = document.createElement('button');
  button.innerText = 'Remove';
  button.addEventListener('click', () => {
    book = book.filter((item) => item.id !== id);
    bookList.innerHTML = '';
    book.forEach((book) => {
      add(book);
    });
    localStorage.setItem('savedData', JSON.stringify(book));
  });

  li.appendChild(document.createTextNode(title));
  li.appendChild(document.createElement('br'));
  li.appendChild(document.createTextNode(author));
  li.appendChild(button);
  li.appendChild(document.createElement('hr'));
  bookList.appendChild(li);
}

function showItems() {
  bookList.innerHTML = '';
  book.forEach((book) => {
    add(book);
  });
}

if (savedData) {
  book = JSON.parse(savedData);
  showItems();
}

const form = document.getElementById('bookAndAuthor');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookInput = document.getElementById('bookInput');
  const authorInput = document.getElementById('authorInput');
  book.push({
    title: bookInput.value, author: authorInput.value, id: Math.floor(Math.random() * 1000),
  });
  showItems();
  localStorage.setItem('savedData', JSON.stringify(book));
  bookInput.value = '';
  authorInput.value = '';
});



//     addBook(bookObject) {
//       bookObject.id = Date.now();
//       this.bookArray.unshift(bookObject);
//       this.#setStorage(this.bookArray);
//       bookList.prepend(this.#createBook(bookObject));
//     }

//     removeBook(bookId) {
//       const bookToRemove = document.querySelector(`#book${bookId}`);
//       bookToRemove.parentNode.removeChild(bookToRemove);
//       this.bookArray = this.getStorage().filter((book) => book.id !== +bookId);
//       this.#setStorage(this.bookArray);
//     }

//     #setStorage(data) {
//       localStorage.setItem(this.key, JSON.stringify(data));
//     }

//     getStorage() {
//       return JSON.parse(localStorage.getItem(this.key));
//     }

//     #isStorage() {
//       if (localStorage.getItem(this.key)) {
//         return true;
//       }
//       return false;
//     }
//     const bookCollection = new BookList();
//     bookCollection.displayBooks();
//   });


// const savedData = localStorage.getItem('savedData');
// let book = [];
// const bookList = document.getElementById('bookList');

// function add({ title, author, id }) {
//   const li = document.createElement('li');
//   const button = document.createElement('button');
//   button.innerText = 'Remove';
//   button.addEventListener('click', () => {
//     book = book.filter((item) => item.id !== id);
//     bookList.innerHTML = '';
//     book.forEach((book) => {
//       add(book);
//     });
//     localStorage.setItem('savedData', JSON.stringify(book));
//   });

//   li.appendChild(document.createTextNode(title));
//   li.appendChild(document.createElement('br'));
//   li.appendChild(document.createTextNode(author));
//   li.appendChild(button);
//   li.appendChild(document.createElement('hr'));
//   bookList.appendChild(li);
// }

// function showItems() {
//   bookList.innerHTML = '';
//   book.forEach((book) => {
//     add(book);
//   });
// }

// if (savedData) {
//   book = JSON.parse(savedData);
//   showItems();
// }

// const form = document.getElementById('bookAndAuthor');
// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const bookInput = document.getElementById('bookInput');
//   const authorInput = document.getElementById('authorInput');
//   book.push({
//     title: bookInput.value, author: authorInput.value, id: Math.floor(Math.random() * 1000),
//   });
//   showItems();
//   localStorage.setItem('savedData', JSON.stringify(book));
//   bookInput.value = '';
//   authorInput.value = '';
// });
