function imageSuccess(response) {
    console.log(response.data.urls.regular);
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage ='url(https://images.unsplash.com/photo-1548781627-88163995c57e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU1NTE3fQ)';
  }
  function imageFail(error) {
    console.log(error);
  }
  axios({
    method: "get",
    url: "https://api.unsplash.com/photos/random/?client_id=eba4df5e99e5383f0b50422769dbca7cd8e3df2ad2af9c952f03336b84b52b90",
  })
    .then(imageSuccess)
    .catch(imageFail);

   

   
