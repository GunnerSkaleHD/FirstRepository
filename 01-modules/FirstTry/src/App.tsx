import {getData} from "./getData"

async function App(){
    
    let array: string[] = await getData(5);

    console.log("\n");

    for (let i of array){

        console.log(i + "\n");

    };

};


export default App