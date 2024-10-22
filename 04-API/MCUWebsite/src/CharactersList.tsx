import { useState, useEffect } from "react";
import {
  Site,
  Image,
  StyledPHeading,
  StyledCharacterName,
  StyledLink,
  StyledButton,
} from "./StyledComponents";

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

export function CharactersList({ characters }: { characters: Character[] }) {
  const generateRandomImages = (characters: Character[]): string[] => {
    let shuffledCharacters = [...characters];
    return shuffledCharacters.map((character) => character.imageUrl);
  };

  const [randomImages, setRandomImages] = useState<string[]>(
    generateRandomImages(characters)
  );
  /*
  const [data, setData] = useState<Character[]>();
  async function generateNewImages() {
    fetch("http://localhost:3000/mcuAPI")
      .then((response) => response.json())
      .then((data: Character[]) => setData(data))
      .catch((error) => console.error(error));
    console.log(data);
    setRandomImages(generateRandomImages(data));
  }
  */

  const [data, setData] = useState<Character[]>();
  async function generateNewImages() {
    const response = await fetch("http://localhost:3000/mcuAPI");
    const newCharacters: Character[] = await response.json();
    setRandomImages(generateRandomImages(newCharacters));
  }

  return (
    <>
      <Site>
        <StyledPHeading>Five Random Marvel Characters</StyledPHeading>
        <StyledButton
          onClick={() => {
            generateNewImages();
          }}
        >
          Generate again
        </StyledButton>
        {randomImages.map((imageUrl, index) => {
          const character = characters.find((c) => c.imageUrl === imageUrl);
          return (
            <div key={character?.id}>
              <StyledCharacterName
                data-testid={index === 0 ? `characterName${index}` : undefined}
              >
                {character?.title}
              </StyledCharacterName>
              <Image src={imageUrl} alt="Character Imgae" />
            </div>
          );
        })}
        <StyledLink href="http://localhost:3000/mcuAPI">
          Visit MCU-API!
        </StyledLink>
      </Site>
    </>
  );
}
