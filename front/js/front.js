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
    //   console.log(data.items);
      for(var i = 0; i < data.items.length; i++) {
        title = data.items[i].volumeInfo.title;
        thumbnailImg = data.items[i].volumeInfo.imageLinks.thumbnail;
        bookDescription = data.items[i].volumeInfo.description;
        id = data.items[i].id;
        // console.log(id);    
        searchResults.insertAdjacentHTML('beforeend', `
        <form>
          <p>${title}</p>
          <img src="${thumbnailImg}">
          <p>${bookDescription}</p>
          <button data-image_url="${thumbnailImg}" data-title="${title}" class="form-submit-button">ADD TO FAVORITES</button>
        </form>
        `);
      } 
    //   var addBookToFavorites = document.querySelector('#');
      searchResults.addEventListener('click', function addToFavorite(event){
        event.preventDefault();
        console.log(event.target)
        const el = event.target;
        if(el.tagName = 'BUTTON') {
            const title = el.dataset.title;
            const imgUrl = el.dataset.image_url;
            //FETCH with a post route request to backend. send a post request with data we want to send to the backend. save a book add a book to the favorites column.
            //use an API request. Post request to backend passing in title and thumbnail 
            console.log(title);
            console.log(imgUrl);
        }
        
        
        
        

          
        //   favoritedBook.insertAdjacentHTML('beforeend', `
        //   <form>
        //   <p>${title}</p>
        //   <img src="${thumbnailImg}">
        //   <button class="form-submit-button">REMOVE FROM FAVORITES</button>
        //   </form>
        //   `)
      });

  });
});

resetBtn.addEventListener('click', function resetSearchResults() {
    //empty searchresult UL.
    searchResults.innerHTML()
})





