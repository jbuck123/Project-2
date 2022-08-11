const url = 'https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key';
const api_key = 'AIzaSyBSAEJ0lBONW4JVVCjjFL3QRJLm96cAQFM';
const client_id = 'your client secret';
var searchBtn = document.querySelector('#search-btn');
var resetBtn = document.querySelector('#reset-btn');
var searchResults = document.querySelector('#searchResults');
var favoritedBook = document.querySelector('#favorited-books');

searchBtn.addEventListener('click', function searchByTitle(event) {

    event.preventDefault();

  var titleSearch = document.getElementById('title-search').value;
  console.log(titleSearch);
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleSearch}&key=${api_key}`)
  .then(res => res.json())
  .then(data => {
      for(var i = 0; i < data.items.length; i++) {
        const title = data.items[i].volumeInfo.title;
        const thumbnailImg = data.items[i].volumeInfo.imageLinks.thumbnail;
        const bookDescription = data.items[i].volumeInfo.description;
        const id = data?.items[i]?.id;
        searchResults.insertAdjacentHTML('beforeend', `
        <form method="post" action="/api" id=${id}>
          <input type="hidden" value=${title} name="title">
          <input type="hidden" value=${thumbnailImg} name="image_url">
          <p>${title}</p>          
          <img src="${thumbnailImg}">
          <p>${bookDescription}</p>
          <button data-image_url="${thumbnailImg}" data-title="${title}" class="form-submit-button">ADD TO FAVORITES</button>
        </form>
        `);
      } 

  });
});

resetBtn.addEventListener('click', function resetSearchResults() {
    searchResults.innerHTML()
})