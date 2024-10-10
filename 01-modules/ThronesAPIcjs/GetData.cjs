


async function getData(times){
    const url = "https://thronesapi.com/api/v2/Characters"
    try{
        const response = await fetch(url)
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json()
        //console.log(json);
        //console.log(typeof json);
            
        
        if (times == null){
            times = 3
        } else if (times > 53){
            times = 3
        };
        let IDarray = []
        let Namearray = []
        /*
        console.log("Three random Characters:");
        console.log(".");
        console.log("..");
        console.log("...");
        console.log("....");
        */
        for (let i = 0; i < times; i++) {
            const id = Math.floor(Math.random() * 53);
            if (IDarray.includes(id)){
                times = times + 1
                continue
            };
            //console.log(json[id].fullName);
            Namearray.push(json[id].fullName);

            IDarray.push(id);
           
        };
        /*
        console.log(Namearray);
        console.log("....");
        console.log("...");
        console.log("..");
        console.log(".");
        */
        //console.log(Namearray)
        return Namearray;
        
    }   
    catch(error){
        console.error(error.message);
    }
    

};

module.exports = getData