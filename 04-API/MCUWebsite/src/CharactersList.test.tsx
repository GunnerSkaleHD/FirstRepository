import { CharactersList } from "./CharactersList";
import { PorscheDesignSystemProvider } from "@porsche-design-system/components-react";
import { render } from "@testing-library/react";
import { describe, expect, test, jest } from "@jest/globals";

describe("Returns 5 defined Characters", () => {
    beforeEach(() => {
        const mocked = jest.fn(() => 0);
        Math.random = mocked;
    });

    afterEach(() => {});

    test("Returns 'Lord Bronn' as first Character", () => {
        console.log(Math.random());

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
        const data: Character[] = [
            {
                id: 0,
                firstName: "Tony",
                lastName: "Stark",
                fullName: "Tony Stark",
                title: "Iron Man",
                family: "",
                image: "",
                imageUrl: "https://m.media-amazon.com/images/I/61X1QDPTE1L._AC_SX679_.jpg",
            },
            {
                id: 1,
                firstName: "Steve",
                lastName: "Rogers",
                fullName: "Steve Rogers",
                title: "Captain America",
                family: "",
                image: "",
                imageUrl:
                    "https://bilder.deutschlandfunk.de/f6/74/a2/c3/f674a2c3-a097-45cb-951f-6f8eb378c24a/foto-freistil-captain-america-100-1920x1080.jpg",
            },
            {
                id: 2,
                firstName: "Bruce",
                lastName: "Banner",
                fullName: "Bruce Banner",
                title: "Hulk",
                family: "",
                image: "",
                imageUrl: "https://s3-eu-central-1.amazonaws.com/vodafone-featured/wp-content/uploads/2020/10/26114707/96466383-1-960x540.jpg",
            },
            {
                id: 3,
                firstName: "Peter",
                lastName: "Parker",
                fullName: "Peter Parker",
                title: "Spider Man",
                family: "",
                image: "",
                imageUrl: "https://deadline.com/wp-content/uploads/2024/04/spider-man-sam-raimi.jpg?w=681&h=383&crop=1",
            },
            {
                id: 4,
                firstName: "Thor",
                lastName: "Odinsonr",
                fullName: "Thor Odinson",
                title: "Thor",
                family: "",
                image: "",
                imageUrl: "https://cdn.prod.www.spiegel.de/images/18a5354b-0001-0004-0000-000001017395_w960_r1.778_fpx57.14_fpy50.webp",
            },
            {
                id: 5,
                firstName: "Stephen",
                lastName: "Strange",
                fullName: "Stephen Strange",
                title: "Dr Strange",
                family: "",
                image: "",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/18/Benedict_Cumberbatch_as_Doctor_Strange.jpeg",
            },
            {
                id: 6,
                firstName: "Bucky",
                lastName: "Barnes",
                fullName: "Bucky Barnes",
                title: "Winter Soldier",
                family: "",
                image: "",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4b/Sebastian_Stan_as_Bucky_Barnes.jpg",
            },
            {
                id: 7,
                firstName: "Scott",
                lastName: "Lang",
                fullName: "Scott Lang",
                title: "Ant Man",
                family: "",
                image: "",
                imageUrl: "https://superhelden.org/wp-content/uploads/2023/01/Ant-Man.jpg",
            },
            {
                id: 8,
                firstName: "Thanos",
                lastName: "",
                fullName: "Thanos",
                title: "Thanos",
                family: "",
                image: "",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/7b/Josh_Brolin_as_Thanos.jpeg",
            },
            {
                id: 9,
                firstName: "Loki",
                lastName: "",
                fullName: "Loki",
                title: "Loki",
                family: "",
                image: "",
                imageUrl:
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Tom_Hiddleston_by_Gage_Skidmore.jpg/440px-Tom_Hiddleston_by_Gage_Skidmore.jpg",
            },
            {
                id: 10,
                firstName: "T'Challa",
                lastName: "",
                fullName: "T'Challa",
                title: "Black Panther",
                family: "",
                image: "",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
            },
            {
                id: 11,
                firstName: "Eddie",
                lastName: "Brock",
                fullName: "Eddie Brock",
                title: "Venom",
                family: "",
                image: "",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/e/ec/Tom_Hardy_as_Eddie_Brock_and_Venom.jpg",
            },
            {
                id: 12,
                firstName: "Natasha",
                lastName: "Romanoff",
                fullName: "Natasha Romanoff",
                title: "Black Widow",
                family: "",
                image: "",
                imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f6/Scarlett_Johansson_as_Black_Widow.jpg",
            },
            {
                id: 13,
                firstName: "Peter",
                lastName: "Quill",
                fullName: "Peter Jason Quill",
                title: "Star-Lord",
                family: "",
                image: "",
                imageUrl: "https://www.superherohype.com/wp-content/uploads/sites/4/2023/03/Chris-Pratt-Guardians-3.jpg",
            },
        ];
        const { getByTestId } = render(
            <PorscheDesignSystemProvider>
                <CharactersList characters={data} />
            </PorscheDesignSystemProvider>
        );
        const characterName = getByTestId("characterName0").textContent;
        expect(characterName).toEqual("Star-Lord");
    });
});
