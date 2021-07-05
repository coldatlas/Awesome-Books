
function add(){
    const bookList = document.getElementById("bookList") ;
    const bookInput = document.getElementById("bookInput");
    const authorInput = document.getElementById("authorInput");
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "Remove";
    button.addEventListener('click',() => bookList.removeChild(li));
   
   
    
li.appendChild(document.createTextNode(bookInput.value + ' '));
li.appendChild(document.createTextNode(authorInput.value + ' '));
li.appendChild(button);

bookList.appendChild(li);

}



// The Node method :
/* Methods used :     appendChild()    -                createElement()      -                              createTextNode()
                   appends child to Node           creates element in document                             creates a Text Node */




                   
// The Array method :
//  ???