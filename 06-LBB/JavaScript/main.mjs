import request from "request";
import { XMLParser, XMLBuilder, XMLValidator } from "fast-xml-parser";

const alwaysArray = ["timetable.s"];

const options = {
  method: "GET",
  url: "https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/08000235/241031/14",
  headers: {
    "DB-Client-Id": "6d8990a55f6ad319e4bcc664d2a26be8",
    "DB-Api-Key": "23d8111fab821ddb070796f82ab3516e",
    accept: "application/json",
  },
};

const XMLoptions = {
  ignoreAttributes: false,
  attributeNamePrefix: "@_",
  allowBooleanAttributes: true,
  ignoreDeclaration: true,
  isArray: (name, jpath, isLeafNode, isAttribute) => jpath === "timetable.s",
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  const parser = new XMLParser(XMLoptions);
  const output = parser.parse(body);
  console.log(body);
  let trainList = [];
  for (let i of output.timetable.s) {
    //console.log(i);
    if (
      i.tl["@_c"] === "S" &&
      //i.dp["@_l"] === "5" &&
      i.dp["@_ppth"].includes("Stuttgart")
    ) {
      let time = i.dp["@_pt"].substr(i.dp["@_pt"].length - 4);
      trainList.push(time + " " + i.tl["@_c"] + i.dp["@_l"]);
    }
  }
  //console.log(trainList.sort());
  resultFirstHalf = "Die nächsten S-Bahnen richtung Stuttgart sind:"
  resultSecondHalf = ""
  for (let i of trainList)
});
