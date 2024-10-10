import getData from "./GetData.mjs";
import chalk from "chalk";

async function Print(times){
    
    
    
    const array = await getData(times);

    
    
    console.log("\n");
    
    
    
    for (let i of array){
        let a = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        let c = Math.floor(Math.random() * 255);

        let d = a - 255
        let e = b - 255
        let f = c - 255

        let g = Math.abs(d);
        let h = Math.abs(e);
        let j = Math.abs(f);
        
 
    
        console.log(chalk.bgRgb(a, b, c)(i + "\n"));
    
    
    
    };
    
    

};



Print(7)