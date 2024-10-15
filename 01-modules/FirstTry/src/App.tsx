import {useEffect, useState} from "react"
import CharactersList from "./CharactersList"

function App() {
  const [data, setData] = useState<Character[] | null>(null);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then((data: Character[]) => setData(data))
      .catch(error => console.error(error));
      document.title = 'ThronesWebsite';
  }, []);

  return (
    <div>
      {data ? <CharactersList characters={data} /> : 'Loading...'}
    </div>
  );
}

export default App
