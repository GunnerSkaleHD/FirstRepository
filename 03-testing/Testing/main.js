


export function main() {


  let date = new Date().getFullYear()

  let modelNames = ["911", "718", "Taycan", "Macan", "918"];
  const colors = ["blue", "red", "black", "white", "yellow"];
  const condition = ["used", "new", "factory new"];

  if (date > 2029) {
    modelNames = ["Taycan", "Macan"];
  };
  
  const configs = [modelNames, colors, condition];

  const sentence = [];

  for (const i of configs) {    
    const n = Math.floor(Math.random() * i.length)
    sentence.push(i[n])
    
  };


  return("Your random car is a " + sentence[2] + " " + sentence[0] + " in " + sentence[1] + "!");
  
};
console.log(main())