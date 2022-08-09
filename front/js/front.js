const url = 'https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key';
const api_key = 'AIzaSyBSAEJ0lBONW4JVVCjjFL3QRJLm96cAQFM';
const client_id = 'your client secret';
var searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', function searchByTitle() {
  var titleSearch = document.getElementById('title-search').value;
  console.log(titleSearch);
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleSearch}&key=${api_key}`)
  // fetch(`https://www.googleapis.com/books/v1/volumes?q=dune&key=${api_key}`)
  .then(res => res.json())
  .then(data => {
      console.log(data);
  });
})


// function updateSigninStatus(is_signed_in) {
//   console.log(is_signed_in);
//   if (is_signed_in) {
//     // console.log(gapi.client.books.mylibrary);
//     gapi.client.books.mylibrary.bookshelves.list().then(books => {
//       console.log(books);
//     })
//   }
// }

// function initClient() {
//   gapi.client.init({
//     'apiKey': api_key,
//     'clientId': client_id,
//     'scope': 'https://www.googleapis.com/auth/books',
//     'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/books/v1/rest']
//   }).then(function () {
//     const GoogleAuth = gapi.auth2.getAuthInstance();

//     // Listen for sign-in state changes.
//     GoogleAuth.isSignedIn.listen(updateSigninStatus);
//     updateSigninStatus(GoogleAuth.isSignedIn.get());

//     // GoogleAuth.signIn();
//     gapi.auth2.getAuthInstance().signOut();
//   });
// }

// gapi.load('client:auth2', initClient);

