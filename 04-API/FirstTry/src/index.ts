// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
//import { getUser } from "@services/userService";
//import { log } from "@utils/logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
/*
app.get("/", (req: Request, res: Response) => {
  res.send("MyServer");
});
*/

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
    imageUrl:
      "https://s3-eu-central-1.amazonaws.com/vodafone-featured/wp-content/uploads/2020/10/26114707/96466383-1-960x540.jpg",
  },
  {
    id: 3,
    firstName: "Peter",
    lastName: "Parker",
    fullName: "Peter Parker",
    title: "Spider Man",
    family: "",
    image: "",
    imageUrl:
      "https://deadline.com/wp-content/uploads/2024/04/spider-man-sam-raimi.jpg?w=681&h=383&crop=1",
  },
  {
    id: 4,
    firstName: "Thor",
    lastName: "Odinsonr",
    fullName: "Thor Odinson",
    title: "Thor",
    family: "",
    image: "",
    imageUrl:
      "https://cdn.prod.www.spiegel.de/images/18a5354b-0001-0004-0000-000001017395_w960_r1.778_fpx57.14_fpy50.webp",
  },
  {
    id: 5,
    firstName: "Stephen",
    lastName: "Strange",
    fullName: "Stephen Strange",
    title: "Dr Strange",
    family: "",
    image: "",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/18/Benedict_Cumberbatch_as_Doctor_Strange.jpeg",
  },
  {
    id: 6,
    firstName: "Bucky",
    lastName: "Barnes",
    fullName: "Bucky Barnes",
    title: "Winter Soldier",
    family: "",
    image: "",
    imageUrl: "",
  },
  {
    id: 7,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
  },
  {
    id: 8,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
  },
  {
    id: 9,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
  },
  {
    id: 10,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
  },
  {
    id: 11,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
  },
  {
    id: 12,
    firstName: "",
    lastName: "",
    fullName: "",
    title: "",
    family: "",
    image: "",
    imageUrl: "",
  },
];
app.use(cors());
app.get("/mcuAPI", (req: Request, res: Response) => {
  res.json(data);
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
