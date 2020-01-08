function sendemail(){
    axios.get('/sendemail')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}