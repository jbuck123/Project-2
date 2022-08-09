const url = 'https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key';
const api_key = 'AIzaSyBSAEJ0lBONW4JVVCjjFL3QRJLm96cAQFM';
const client_id = 'your client secret';
// var searchBtn = document.querySelector('#search-btn');

// searchBtn.addEventListener('click', function searchByTitle() {
//   var titleSearch = document.getElementById('title-search').value;
//   console.log(titleSearch);
//   fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleSearch}&key=${api_key}`)
//   // fetch(`https://www.googleapis.com/books/v1/volumes?q=dune&key=${api_key}`)
//   .then(res => res.json())
//   .then(data => {
//       console.log(data);
//   });
// })


var searchBtn = document.querySelector('#search-btn');
var searchResults = document.querySelector('#searchResults');

searchBtn.addEventListener('click', function searchByTitle() {
  var titleSearch = document.getElementById('title-search').value;
  console.log(titleSearch);
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleSearch}&key=${api_key}`)
  .then(res => res.json())
  .then(data => {
      console.log(data.items);
      for(var i = 0; i < data.items.length; i++) {
        text = data.items[i].volumeInfo.title;
        thumbnailImg = data.items[i].volumeInfo.imageLinks.thumbnail;
        bookDescription = data.items[i].volumeInfo.description;
        console.log(thumbnailImg);
        searchResults.insertAdjacentHTML('beforeend', `
        <div>
          <p>${text}</p>
          <img src="${thumbnailImg}">
          <p>${bookDescription}</p>
          <button>ADD TO FAVORITES</button>
        </div>
        `);

      }
  });
})