import request from "request";

const options = {
  method: "GET",
  url: "https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/08005820/241030/12",
  headers: {
    "DB-Client-Id": "6d8990a55f6ad319e4bcc664d2a26be8",
    "DB-Api-Key": "23d8111fab821ddb070796f82ab3516e",
    accept: "application/xml",
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  const xmlDocument = new DOMParser().parseFromString(body, "text/xml");
  console.log(body.split("<"));
  console.log(typeof body);
  console.log(xmlDocument);
});
