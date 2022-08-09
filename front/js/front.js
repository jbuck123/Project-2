// api key AIzaSyAtHTdOZ_99Jy6UyXEPpShYnWK2e5d62No


test()

function test(){
    fetch(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyAtHTdOZ_99Jy6UyXEPpShYnWK2e5d62No`)
    .then( function (res) {
    return  res.json()
        
    }).then(data)
    console.log(data)
}
