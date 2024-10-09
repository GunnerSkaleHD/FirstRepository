


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
        const times = 3
        let array = []
        console.log("Three random Characters:");
        console.log("...");
        
        for (let i = 0; i < times; i++) {
            id = Math.floor(Math.random() * 53);
            if (id in array){
                continue
            };
            console.log(json[id].fullName);
            array.push(id);
            //console.log(array);
        };
        console.log("...");
        
        
        
        
        /*
        for (i in obj){
            if (obj[id] === 0){
                console.log(obj[firstName])
            }
        }
        */
    }
    catch(error){
        console.error(error.message);
    }

}

getData()
