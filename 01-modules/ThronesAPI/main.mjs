import getData from "./GetData.mjs";

async function Print(times){
    const result = await getData(times);
    console.log("\n")
    for (let i of result){
        console.log(i + "\n")
    };
    //console.log(result.length);
};
Print(4)