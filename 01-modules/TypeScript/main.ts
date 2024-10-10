async function getData(): Promise<any>{
    const response = await fetch("https://thronesapi.com/api/v2/Characters")
    const result = await response.json();
    return result;
};


async function print(){
    let Whatever = await getData()
    console.log(Whatever)
}
print()