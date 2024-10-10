import getData from "./GetData.mjs";
import chalk from "chalk";

async function Print(times){
    
    
    
    const result = await getData(times);

    
    
    console.log("\n")
    
    
    
    for (let i of result){
        
    
    
        console.log(chalk.blue.bold.blue.underline(i + "\n"))
    
    
    
    };
    
    
    
    //console.log(result.length);
};



Print(4)
