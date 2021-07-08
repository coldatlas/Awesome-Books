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
