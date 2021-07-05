
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

}

const form = document.querySelector('bookAndAuthor');
const error = document.querySelector('#error');
const bookName = document.querySelector('bookInput');
const authorName = document.querySelector('authorInput');

const inputKey = 'CONTACT';
const inputDetails = localStorage.getItem(inputKey);

if (inputDetails) {
  const contact = JSON.parse(inputDetails);
  bookName.value = contact.bookName;
  authorName.value = contact.authorName;
}

form.addEventListener('click', (event) => {
  if (bookName.value.trim() !== bookName.value.trim().toLowerCase()) {
    error.style.opacity = 1;
    error.textContent = 'Please, all Book names should be lowercase';
    event.preventDefault();
  } else if (authorName.value.trim() !== authorName.value.trim().toLowerCase()) {
    error.style.opacity = 1;
    error.textContent = 'Please, add only lower character for Authors';
    event.preventDefault();
  } else {
    const contactObj = {
      bookName: bookName.value,
      authorName: authorName.value,
    };
    localStorage.setItem(inputKey, JSON.stringify(contactObj));
    error.style.opacity = 0;
  }
});
// The Node method :
/* Methods used :     appendChild()    -                createElement()      -                              createTextNode()
                   appends child to Node           creates element in document                             creates a Text Node */




                   
// The Array method :
//  ???