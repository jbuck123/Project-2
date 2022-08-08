// base URI: https://www.googleapis.com/books/v1

const { application } = require("express");

var get_title_alphabetically = "https://www.googleapis.com/books/v1";

// api key AIzaSyAtHTdOZ_99Jy6UyXEPpShYnWK2e5d62No

// function findVolumeById() {

// }





// search terms : https://www.googleapis.com/books/v1/volumes?q=search+terms
// GET "https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey"

function test() {
    fetch(`https://www.googleapis.com/books/v1/mylibrary/bookshelves/0/addVolume?volumeId=NRWlitmahXkC&key=yourAPIKey`)
    .then(function (res) {
        console.log(res)
        return res.json();
    })
}

test();