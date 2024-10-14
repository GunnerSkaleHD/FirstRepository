import React, { useState, useEffect } from 'react';

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

function App() {
  const [data, setData] = useState<Character[] | null>(null);
  const [randomImages, setRandomImages] = useState<string[]>([]);

  useEffect(() => {
    fetch('https://thronesapi.com/api/v2/Characters')
      .then(response => response.json())
      .then((data: Character[]) => {
        setData(data);
        setRandomImages(generateRandomImages(data, 5));
      })
      .catch(error => console.error(error));
  }, []);

  const generateRandomImages = (characters: Character[], count: number): string[] => {
    const shuffledCharacters = [...characters].sort(() => Math.random() - 0.5);
    return shuffledCharacters.slice(0, count).map(character => character.imageUrl);
  };

  return (
    <div>
      <h2>Random Characters</h2>
      {randomImages.map((imageUrl, index) => {
        const character = data?.find(c => c.imageUrl === imageUrl);
        return (
          <div key={index}>
            <h3>{character?.fullName}</h3>
            <img src={imageUrl} alt="Character Image" />
          </div>
        );
      })}
    </div>
  );
}

export default App;