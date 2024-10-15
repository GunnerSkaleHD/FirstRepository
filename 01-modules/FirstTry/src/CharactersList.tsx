import React, { useState, useEffect } from 'react';
import { PHeading, PButton, PLink } from '@porsche-design-system/components-react';

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

function CharactersList({ characters }: { characters: Character[]}) {
    const [randomImages, setRandomImages] = useState<string[]>([]);

    useEffect(() => {
        setRandomImages(generateRandomImages(characters, 5));
    }, [characters]);

    const generateRandomImages = (characters: Character[], count: number): string[] => {
        const shuffledCharacters = [...characters].sort(()=> Math.random() -0.5);
        return shuffledCharacters.slice(0, count).map(character => character.imageUrl);
    };
    return(
        <>
            <div className="Site">
                <PHeading className="Margin" align="center">5 Random Characters!</PHeading>
                <PButton className="Margin" onClick={function(){return setRandomImages(generateRandomImages(characters, 5))}}>Generate new</PButton>
                {randomImages.map((imageUrl, index) => {
                    const character = characters.find(c => c.imageUrl === imageUrl);
                    return(
                        <div key={index}>
                            <PHeading align="center" size="large">{character?.fullName}</PHeading>
                            <img key={index} src={imageUrl} alt="Character Imgae" className="Image" />
                        </div>

                    );
                
                })}

            </div>
            <div className="Footer">
                <PLink variant="secondary" href="https://thronesapi.com/">Visit ThronesAPI!</PLink>
            </div>
        </>
    )

    
};
export default CharactersList