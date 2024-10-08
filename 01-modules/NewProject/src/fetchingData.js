
async function getData() {
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return(json);
  } catch (error) {
    console.error(error.message);
  }
}


export default getData



