import { useState } from "react";
import {
  Site,
  Image,
  StyledPHeading,
  StyledCharacterName,
} from "./StyledComponents";

import { PButton, PLink } from "@porsche-design-system/components-react";

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
      <Site>
        <StyledPHeading>Five Random Marvel Characters</StyledPHeading>
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
        <PLink variant="secondary" href="http://localhost:3000/mcuAPI">
          Visit MCU-API!
        </PLink>
      </Site>
    </>
  );
}
