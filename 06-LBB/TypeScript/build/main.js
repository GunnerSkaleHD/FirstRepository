"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrainData = getTrainData;
const node_fetch_1 = __importDefault(require("node-fetch"));
const fast_xml_parser_1 = require("fast-xml-parser");
const APIOptions = {
    method: "GET",
    headers: {
        "DB-Client-Id": "6d8990a55f6ad319e4bcc664d2a26be8",
        "DB-Api-Key": "23d8111fab821ddb070796f82ab3516e",
        accept: "application/json",
    },
};
const options = {
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    allowBooleanAttributes: true,
    ignoreDeclaration: true,
    isArray: (name, jpath, isLeafNode, isAttribute) => jpath === "timetable.s",
};
async function getTrainData() {
    try {
        const response = await (0, node_fetch_1.default)("https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/08000235/241103/13", APIOptions);
        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);
        const body = await response.text();
        const parser = new fast_xml_parser_1.XMLParser(options);
        const output = parser.parse(body);
        let trainList = [];
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
    }
    catch (error) {
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
