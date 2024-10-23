import { useState, useLayoutEffect } from "react";
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

export function CharactersList() {
    async function generateNewImages() {
        const response = await fetch("http://localhost:3000/mcuAPI");
        const newCharacters: Character[] = await response.json();
        setData(newCharacters);
    }
    useLayoutEffect(() => {
        generateNewImages();
    }, []);
    const [data, setData] = useState<Character[]>([]);

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
                {data.map((listCharacter, index) => {
                    const character = data.find(
                        (c) => c.imageUrl === listCharacter.imageUrl
                    );
                    return (
                        <div key={character?.id}>
                            <StyledCharacterName
                                data-testid={
                                    index === 0
                                        ? `characterName${index}`
                                        : undefined
                                }
                            >
                                {character?.title}
                            </StyledCharacterName>
                            <Image
                                src={listCharacter.imageUrl}
                                alt="Character Imgae"
                            />
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
