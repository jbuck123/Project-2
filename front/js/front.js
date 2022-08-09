const url = 'https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key';
const api_key = 'AIzaSyBSAEJ0lBONW4JVVCjjFL3QRJLm96cAQFM';
const client_id = 'your client secret';
var searchBtn = document.querySelector('#search-btn');
var resetBtn = document.querySelector('#reset-btn');
var searchResults = document.querySelector('#searchResults');

searchBtn.addEventListener('click', function searchByTitle(event) {

    event.preventDefault();

  var titleSearch = document.getElementById('title-search').value;
  console.log(titleSearch);
  fetch(`https://www.googleapis.com/books/v1/volumes?q=${titleSearch}&key=${api_key}`)
  .then(res => res.json())
  .then(data => {
      console.log(data.items);
      for(var i = 0; i < data.items.length; i++) {
        title = data.items[i].volumeInfo.title;
        thumbnailImg = data.items[i].volumeInfo.imageLinks.thumbnail;
        bookDescription = data.items[i].volumeInfo.description;
        console.log(thumbnailImg);
        searchResults.insertAdjacentHTML('beforeend', `
        <form>
          <p name="book">${title}</p>
          <img src="${thumbnailImg}">
          <p>${bookDescription}</p>
          <button class="form-submit-button">ADD TO FAVORITES</button>
        </form>
        `);

      }
  });
});

resetBtn.addEventListener('click', function resetSearchResults() {
    //empty searchresult UL.
    searchResults.innerHTML()
})



