import ajax from "./fetchingData";

ajax("https://thronesapi.com/api/v2/Characters")
  .then(function(result) {
    //console.log(result);
    const obj = JSON.parse(result)
    //console.log(obj);
    for (i in obj)
    
  });
   

