const savedData = localStorage.getItem('savedData');
const bookList = document.getElementById('bookList');

class BookLibrary {
  constructor() {
    this.book = [];
  }

  showItems() {
    bookList.innerHTML = '';
    this.book.forEach((book) => {
      this.add(book);
    });
  }

  add({ title, author, id }) {
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.innerText = 'Remove';
    button.addEventListener('click', () => {
      this.book = this.book.filter((item) => item.id !== id);
      bookList.removeChild(li);
      localStorage.setItem('savedData', JSON.stringify(this.book));
    });

    li.appendChild(document.createTextNode('"'));
    li.appendChild(document.createTextNode(title));
    li.appendChild(document.createTextNode('"'));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode('by'));
    li.appendChild(document.createTextNode(' '));
    li.appendChild(document.createTextNode(author));
    li.appendChild(button);
    bookList.appendChild(li);
  }
}

const library = new BookLibrary();
if (savedData) {
  library.book = JSON.parse(savedData);
  library.showItems();
}

const form = document.getElementById('bookAndAuthor');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const bookInput = document.getElementById('bookInput');
  const authorInput = document.getElementById('authorInput');
  library.book.push({
    title: bookInput.value, author: authorInput.value, id: Math.floor(Math.random() * 1000),
  });
  library.showItems();
  localStorage.setItem('savedData', JSON.stringify(library.book));
  bookInput.value = '';
  authorInput.value = '';
});

window.addEventListener('load', () => {
  // eslint-disable-next-line no-undef
  const { DateTime } = luxon;
  const now = DateTime.now();
  document.getElementById('date').innerText = now.toLocaleString(DateTime.DATETIME_MED);

  library.showItems();
});

function listFun() {
  document.getElementById('bookList') = 'block';
  document.getElementById('add_new') = 'none';
  document.getElementById('contact') = 'none';
}

function addFun() {
  document.getElementById('bookList') = 'none';
  document.getElementById('add_new') = 'block';
  document.getElementById('contact') = 'none';
}

function contactFun() {
  document.getElementById('bookList') = 'none';
  document.getElementById('add_new') = 'none';
  document.getElementById('contact') = 'block';
}