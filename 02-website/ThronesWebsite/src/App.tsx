import { useEffect, useState } from "react";
import { CharactersList } from "./CharactersList";

/*
interface Character {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}
*/

export function App() {
  const [data, setData] = useState<Character[] | null>(null);

  useEffect(() => {
    fetch("https://thronesapi.com/api/v2/Characters")
      .then((response) => response.json())
      .then((data: Character[]) => setData(data))
      .catch((error) => console.error(error));
    document.title = "ThronesWebsite";
  }, []);

  return (
    <div>{data ? <CharactersList characters={data} /> : "Loading..."}</div>
  );
}
