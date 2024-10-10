async function getData(): Promise<any>{
    const response = await fetch("https://thronesapi.com/api/v2/Characters")
    const result = await response.json();
    return result;
};

let Whatever = getData()
console.log(Whatever)