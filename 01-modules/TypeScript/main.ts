async function getData(): Promise<any>{
    const response = await fetch("https://thronesapi.com/api/v2/Characters")
    const result = await response.json();
    let array: string[] = [];
    let i: string;
    for (i of result){
        array.push(i);
    }
    console.log(array);
    return array;
};

getData()

/*
async function print(){
    let result = await getData()
    console.log(result)
}
print()
*/