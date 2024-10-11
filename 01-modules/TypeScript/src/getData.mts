
export async function getData(times: number): Promise<any>{
    const response = await fetch("https://thronesapi.com/api/v2/Characters")
    const result = await response.json();

    var NameArray: string[] = [];
    var IdArray: number[] = [];
    var id: number;
    
    if (times == null){
        times = 3
    } else if (times > 53){
        times = 3
    };


    for (let i = 0; i < times; i++){
        var id = Math.floor(Math.random() * 53)
        if (IdArray.indexOf(id) !== -1){
            times = times + 1
            continue
        };
        //var Name: string = result[id].fullname
        NameArray.push(result[id].fullName);
        IdArray.push(result[id]);

        
    }
    return NameArray;
    
};



