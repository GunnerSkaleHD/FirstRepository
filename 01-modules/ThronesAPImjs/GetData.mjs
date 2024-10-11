
async function getData(times){
    const url = "https://thronesapi.com/api/v2/Characters"
    try{
        const response = await fetch(url)
        if (!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json()
        
        if (times == null){
            times = 3
        } else if (times > 53){
            times = 3
        };
        let IDarray = []
        let Namearray = []

        for (let i = 0; i < times; i++) {
            const id = Math.floor(Math.random() * 53);
            if (IDarray.includes(id)){
                times = times + 1
                continue
            };

            Namearray.push(json[id].fullName);
            IDarray.push(json[id])
            console.log(json[id])
           
        };
        return Namearray;
        
    }   
    catch(error){
        console.error(error.message);
    }
    

};

export default getData