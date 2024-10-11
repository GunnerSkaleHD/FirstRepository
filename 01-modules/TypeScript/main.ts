import {getData} from "./getData"

async function Print(times: number){
    
    let array: string[] = await getData(times);

    console.log("\n");

    for (let i of array){

        console.log(i + "\n");

    };
};

Print(1)