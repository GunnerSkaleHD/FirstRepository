import { useEffect, useState } from "react";
import { CharactersList } from "./CharactersList";

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

export function App() {
    return (
        <div>
            <CharactersList />
        </div>
    );
}
