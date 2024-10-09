import getData from "./GetCharacters.js";

async function Print(num){
    const result = await getData(num);
    console.log(result);
};
Print()
