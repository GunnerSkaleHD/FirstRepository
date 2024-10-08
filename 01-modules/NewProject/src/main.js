import ajax from "./fetchingData";




ajax("https://thronesapi.com/api/v2/Characters")
  .then(function(result) {
    console.log(result);
    console.log(typeof result); 
  })
  .catch(function() {
    
  });
