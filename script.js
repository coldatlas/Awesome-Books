let book = [];

function add(){
    const bookList = document.getElementById("bookList") ;
    const bookInput = document.getElementById("bookInput");
    const authorInput = document.getElementById("authorInput");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "Remove";
    button.addEventListener('click',() => bookList.removeChild(li));   
   
    
  li.appendChild(document.createTextNode(bookInput.value + ' '));
  li.appendChild(document.createElement('br'));
  li.appendChild(document.createTextNode(authorInput.value + ' '));
  li.appendChild(button);
  li.appendChild(document.createElement('hr'));

  bookList.appendChild(li);

  const bookObj = {
    title: bookInput.value,
    author: authorInput.value
  }
  book.unshift(bookObj)
  localStorage.setItem('savedData', JSON.stringify(book));  
}

const showBook = (books) => {
  for(let i = 0; i < books.length; i += 1) {
    const book = books[i]
    // book.appendChild(book(books))
    console.log(book)
  }
}

if(localStorage.getItem('savedData')) {
  book = JSON.parse(localStorage.getItem('savedData'));
  showBook(book)
}

const reAdd = (bookObj) => {
  bookObj = book.length + 1;
  book.unshift(bookObj);
  localStorage.setItem('savedData', JSON.stringify(book));
  book.prepend(add(bookObj));
}
