import request from "request";
import { XMLParser, XMLBuilder, XMLValidator } from "fast-xml-parser";

const APIOptions = {
  method: "GET",
  url: "https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/08001844/241101/13",
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
export async function getTrainData(requestOptions, XmlOptions) {
  request(APIOptions, function (error, response, body) {
    if (error) throw new Error(error);
    const parser = new XMLParser(options);
    const output = parser.parse(body);
    let trainList = [];
    for (let i of output.timetable.s) {
      if (i.tl["@_c"] === "S" && i.dp["@_ppth"].includes("Nürnberg")) {
        let time = i.dp["@_pt"].substr(i.dp["@_pt"].length - 4);
        let train = i.tl["@_c"] + i.dp["@_l"];
        trainList.push(time + " " + train);
      }
    }
    trainList.sort();
    let resultFirstHalf = "Die nächsten S-Bahnen richtung Stuttgart sind: \n";
    let resultSecondHalf = trainList.join("\n");
    console.log(resultFirstHalf + resultSecondHalf);
  });
}
getTrainData(APIOptions, options);
