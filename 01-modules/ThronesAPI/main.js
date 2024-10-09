import getData from "./GetCharacters.js";

async function Print(num){
    const result = await getData(num);
    console.log("\n")
    for (let i of result){
        console.log(i + "\n")
    };
    //console.log(result.length);
};
Print(5)
