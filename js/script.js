const apiKey = GOOGLE_BOOKS_API_KEY;

//Declare a global variable
let dataFromApi;
const apiCall = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      //Assign dataFromApi to data
      dataFromApi = data;
      console.log("First Console Log : ", dataFromApi);
      renderInBrowser(dataFromApi);
    })
    .catch((error) => console.error("Error:", error));
};

function generateURL(title) {
  //Create a variable named 'baseURL' and assign it the base url.
  let baseUrl = "https://www.googleapis.com/books/v1/volumes";
  //Create a variable named 'endPoint' and assign it the end point value
  let endPoint = `?q=intitle:${title}`;
  //Create the dynamic url using template literal syntax and all the variables
  let url = `${baseUrl}${endPoint}&key=${apiKey}`;
  //Call the arrow function=> apiCall() with the dynamic url
  apiCall(url);
}

//Save the form in a variable
const form = document.querySelector("#book-form");
//Print form on console
//console.log("form",form);
//Add Event Listener to the form
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  //prevent default form behavior
  event.preventDefault();
  //save form data
  const data = new FormData(event.target);
  //Use the boilerplate code to create your data object
  const dataObject = Object.fromEntries(data.entries());
  //Show it in the console
  console.log(dataObject);
  let title = dataObject.title;
  form.reset();
  //location.reload();
  generateURL(title);
}

function renderInBrowser(data) {
  const result = document.querySelector(".output");
  console.log(result);
  //Clear previous results
  result.textContent = "";
  let items = data.items;
  for (let info of items) {
    let card = document.createElement("div");
    card.className = "card";
    let headingTwo = document.createElement("h2");
    let bookTitle = info.volumeInfo.title;
    headingTwo.textContent = bookTitle;
    card.appendChild(headingTwo);
    let headingThree = document.createElement("h3");
    let authors = info.volumeInfo.authors;
    //authors = authors.toString();
    headingThree.textContent = authors;
    card.appendChild(headingThree);
    let bookImg = document.createElement("img");
    let bookCover = info.volumeInfo.imageLinks.thumbnail;
    bookImg.src = bookCover;
    bookImg.alt = bookTitle + "Book Cover";
    card.appendChild(bookImg);
    let pDescription = document.createElement("p");
    pDescription.textContent = info.volumeInfo.description;
    card.appendChild(pDescription);
    let buyLink = document.createElement("a");
    // let retailPrice = info.saleInfo.offers[0].retailPrice.amountInMicros;
    // let priceCurrency = info.saleInfo.offers[0].retailPrice.currencyCode;
    buyLink.textContent = `Buy here`;
    let link = info.saleInfo.buyLink;
    buyLink.setAttribute("href", link);
    buyLink.setAttribute("target", "_blank");
    card.appendChild(buyLink);
    result.appendChild(card);
  }
}
