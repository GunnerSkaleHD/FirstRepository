import {getData} from "./GetData.mjs";


async function Print(times){

    const array = await getData(times);
    
    console.log("\n");
    
    for (let i of array){

        console.log(i + "\n");

    };
    
    
};



Print(7)
