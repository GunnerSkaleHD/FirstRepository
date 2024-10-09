


async function getData(){
    const url = "https://thronesapi.com/api/v2/Characters"
    try{
        const response = await fetch(url)
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json()
        //console.log(json);
        //console.log(typeof json);
        let times = 3
        let array = []
        console.log("Three random Characters:");
        console.log(".");
        console.log("..");
        console.log("...");
        console.log("....");

        for (let i = 0; i < times; i++) {
            id = Math.floor(Math.random() * 53);
            if (id in array){
                times = times + 1
                continue
            };
            console.log(json[id].fullName);
            array.push(id);
           
        };
        console.log("....");
        console.log("...");
        console.log("..");
        console.log(".");
    }   
    catch(error){
        console.error(error.message);
    }

}

getData()
