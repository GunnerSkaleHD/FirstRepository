import fetch from "node-fetch";
import { XMLParser } from "fast-xml-parser";

export async function getTrainData(): Promise<string> {
    const APIOptions = {
        method: "GET",
        headers: {
            "DB-Client-Id": "6d8990a55f6ad319e4bcc664d2a26be8",
            "DB-Api-Key": "23d8111fab821ddb070796f82ab3516e",
            accept: "application/xml",
        },
    };

    const options = {
        ignoreAttributes: false,
        attributeNamePrefix: "@_",
        allowBooleanAttributes: true,
        ignoreDeclaration: true,
        isArray: (name: string, jpath: string, isLeafNode: boolean, isAttribute: boolean) => jpath === "timetable.s",
    };

    interface TrainData {
        "@_c": string;
        "@_l": string;
    }

    interface TimetableEntry {
        tl: TrainData;
        dp: {
            "@_ppth": string;
            "@_pt": string;
            "@_l": string;
        };
    }

    interface Timetable {
        timetable: {
            s: TimetableEntry[];
        };
    }

    let year: number = new Date().getFullYear();
    let month: number = new Date().getMonth() + 1;
    let day: number = new Date().getDate();
    let hour: number = new Date().getHours();
    let zero: string = "";

    if (month.toString().length === 1) {
        zero = "0";
    } else if (day.toString().length) {
        zero = "0";
    }

    const fetchLink: string =
        "https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/08000235/" +
        year.toString()[2] +
        year.toString()[3] +
        month.toString() +
        zero +
        day.toString() +
        "/" +
        hour.toString();

    try {
        const response = await fetch(fetchLink, APIOptions);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        const body = await response.text();
        const parser = new XMLParser(options);
        const output: Timetable = parser.parse(body);

        let trainList: string[] = [];

        for (let i of output.timetable.s) {
            if (i.tl["@_c"] === "S" && i.dp["@_ppth"].includes("Stuttgart Hbf")) {
                let time = i.dp["@_pt"].substr(i.dp["@_pt"].length - 4);
                let train = i.tl["@_c"] + i.dp["@_l"];
                trainList.push(time + " " + train);
            }
        }

        trainList.sort();
        let resultFirstHalf = "Die nächsten S-Bahnen richtung Stuttgart sind: \n";
        let resultSecondHalf = trainList.join("\n");

        return resultFirstHalf + resultSecondHalf;
    } catch (error) {
        console.error("Error fetching train data:", error);
        throw error;
    }
}

getTrainData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
