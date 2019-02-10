axios({
    method:'get',
    url:'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',
})
.then((response) => {
    console.log(response);
    const emp = response.data.quoteText;
    $('body').append(`<h1>${emp}</h1>`);
})
.catch((error) => {
        console.log(error);
    }); 