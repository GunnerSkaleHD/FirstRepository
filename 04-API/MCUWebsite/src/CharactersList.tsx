import { useState, useEffect } from "react";

import {
  PHeading,
  PButton,
  PLink,
} from "@porsche-design-system/components-react";

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
  const generateRandomImages = (
    characters: Character[],
    count: number
  ): string[] => {
    let shuffledCharacters = [...characters].sort(() => Math.random() - 0.5);
    return shuffledCharacters
      .slice(0, count)
      .map((character) => character.imageUrl);
  };

  const [randomImages, setRandomImages] = useState<string[]>(
    generateRandomImages(characters, 5)
  );

  return (
    <>
      <div className="Site">
        <PHeading className="Margin" align="center">
          Five Random Marvel Characters
        </PHeading>
        <PButton
          className="Margin"
          onClick={function () {
            return setRandomImages(generateRandomImages(characters, 5));
          }}
        >
          Generate again
        </PButton>
        {randomImages.map((imageUrl, index) => {
          const character = characters.find((c) => c.imageUrl === imageUrl);
          return (
            <div key={index}>
              <PHeading
                data-testid={index === 0 ? `characterName${index}` : undefined}
                align="center"
                size="large"
              >
                {character?.title}
              </PHeading>
              <img
                key={index}
                src={imageUrl}
                alt="Character Imgae"
                className="Image"
              />
            </div>
          );
        })}
        <PLink variant="secondary" href="http://localhost:3000/mcuAPI">
          Visit MCU-API!
        </PLink>
      </div>
    </>
  );
}
