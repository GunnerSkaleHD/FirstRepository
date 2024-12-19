"use strict";
var request = require("request");

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = "https://www.alphavantage.co/query?function=HISTORICAL_OPTIONS&symbol=SPY&apikey=UXN7UH4NYMQK349I&date=2024-01-1";

request.get(
    {
        url: url,
        json: true,
        headers: { "User-Agent": "request" },
    },
    (err, res, data) => {
        if (err) {
            console.log("Error:", err);
        } else if (res.statusCode !== 200) {
            console.log("Status:", res.statusCode);
        } else {
            // data is successfully parsed as a JSON object:
            console.log(data);
        }
    }
);
