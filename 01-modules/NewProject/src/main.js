import getData from "./fetchingData";


function ajax(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(this.responseText);
    };
    xhr.onerror = reject;
    xhr.open('GET', url);
    xhr.send();
  });
}

ajax("https://thronesapi.com/api/v2/Characters")
  .then(function(result) {
    console.log(result);
    console.log(typeof result); 
  })
  .catch(function() {
    
  });
